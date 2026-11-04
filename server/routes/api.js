const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const db = require('../database');
const defaultQuestions = require('../questionsData');
const {
  verifyAdminPassword,
  updateAdminPassword,
  createAdminSession,
  adminAuthMiddleware,
  DEFAULT_ADMIN_PASS
} = require('../auth');

module.exports = function(roomManager) {
  // --- Public Endpoints ---

  // Get active rooms list
  router.get('/rooms', (req, res) => {
    res.json(roomManager.getPublicRoomList());
  });

  // Get single room info
  router.get('/rooms/:id', (req, res) => {
    const room = roomManager.getRoom(req.params.id);
    if (!room) return res.status(404).json({ error: 'Sala não encontrada.' });
    res.json(roomManager.getSanitizedRoomState(req.params.id));
  });

  // Get default categories and questions count
  router.get('/info', (req, res) => {
    const questions = db.get('questions') || [];
    const categories = [...new Set(questions.map(q => q.category))];
    res.json({
      title: 'Os Mistérios da Vida: Curiosidades e Fenômenos Extraordinários da Embriologia',
      discipline: 'Bases Celulares',
      seminar: 'Grupo 5 — Seminário de Bases Celulares (Odontologia)',
      totalQuestions: questions.length,
      categories
    });
  });

  // Get questions bank (questions with options, strictly protected for admin only)
  router.get('/questions', (req, res) => {
    const authHeader = req.headers.authorization;
    let token = null;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.substring(7);
    } else if (req.query && req.query.adminToken) {
      token = req.query.adminToken;
    }
    const { isValidAdminToken } = require('../auth');
    const isAdmin = isValidAdminToken(token);

    if (!isAdmin) {
      return res.status(401).json({ error: 'Acesso restrito ao Administrador. Digite a senha para visualizar o banco de questões.' });
    }

    const questions = db.get('questions') || [];
    res.json(questions);
  });

  // --- Admin Authentication Endpoints ---

  router.post('/admin/login', (req, res) => {
    const { password } = req.body;
    if (!password) {
      return res.status(400).json({ error: 'Senha não informada.' });
    }

    if (verifyAdminPassword(password)) {
      const token = createAdminSession();
      return res.json({ success: true, token, message: 'Autenticado com sucesso!' });
    } else {
      return res.status(401).json({ error: 'Senha incorreta.' });
    }
  });

  router.get('/admin/verify', (req, res) => {
    const authHeader = req.headers.authorization;
    let token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.substring(7) : null;
    if (!token && req.query && req.query.adminToken) {
      token = req.query.adminToken;
    }
    const { isValidAdminToken } = require('../auth');

    if (isValidAdminToken(token)) {
      return res.json({ authenticated: true });
    }
    return res.status(401).json({ authenticated: false, error: 'Acesso restrito ao Administrador.' });
  });

  router.post('/admin/change-password', adminAuthMiddleware, (req, res) => {
    const { newPassword } = req.body;
    if (!newPassword || newPassword.length < 4) {
      return res.status(400).json({ error: 'A nova senha deve ter no mínimo 4 caracteres.' });
    }
    updateAdminPassword(newPassword);
    res.json({ success: true, message: 'Senha administrativa atualizada com sucesso!' });
  });

  // --- Admin Room Management ---

  router.post('/admin/rooms', adminAuthMiddleware, (req, res) => {
    try {
      const newRoom = roomManager.createRoom(req.body);
      res.json({ success: true, room: newRoom });
    } catch (err) {
      res.status(500).json({ error: 'Erro ao criar sala: ' + err.message });
    }
  });

  router.delete('/admin/rooms/:id', adminAuthMiddleware, (req, res) => {
    const success = roomManager.deleteRoom(req.params.id);
    if (success) {
      res.json({ success: true, message: 'Sala removida com sucesso.' });
    } else {
      res.status(404).json({ error: 'Sala não encontrada.' });
    }
  });

  router.post('/admin/rooms/:id/start', adminAuthMiddleware, (req, res) => {
    const result = roomManager.startCompetition(req.params.id);
    if (result.error) return res.status(400).json(result);
    res.json(result);
  });

  router.post('/admin/rooms/:id/pause', adminAuthMiddleware, (req, res) => {
    const result = roomManager.pauseCompetition(req.params.id);
    if (result.error) return res.status(400).json(result);
    res.json(result);
  });

  router.post('/admin/rooms/:id/resume', adminAuthMiddleware, (req, res) => {
    const result = roomManager.resumeCompetition(req.params.id);
    if (result.error) return res.status(400).json(result);
    res.json(result);
  });

  router.post('/admin/rooms/:id/advance', adminAuthMiddleware, (req, res) => {
    const result = roomManager.advanceManually(req.params.id);
    if (result.error) return res.status(400).json(result);
    res.json(result);
  });

  router.post('/admin/rooms/:id/finish', adminAuthMiddleware, (req, res) => {
    roomManager.finishCompetition(req.params.id);
    res.json({ success: true });
  });

  // --- Quem Sou Eu Specific Admin Endpoints ---

  router.post('/admin/rooms/qse', adminAuthMiddleware, (req, res) => {
    try {
      const room = roomManager.createQseRoom(req.body);
      res.json({ success: true, room });
    } catch (err) {
      res.status(500).json({ error: 'Erro ao criar sala Quem Sou Eu: ' + err.message });
    }
  });

  router.post('/admin/rooms/:id/qse/start-round', adminAuthMiddleware, (req, res) => {
    const roundIndex = req.body.roundIndex !== undefined ? Math.max(0, req.body.roundIndex) : 0;
    const result = roomManager.startQseRound(req.params.id, roundIndex);
    if (result.error) return res.status(400).json(result);
    res.json(result);
  });

  router.post('/admin/rooms/:id/qse/finish-narration', adminAuthMiddleware, (req, res) => {
    const result = roomManager.finishQseNarration(req.params.id);
    if (result.error) return res.status(400).json(result);
    res.json(result);
  });

  router.post('/admin/rooms/:id/qse/unlock', adminAuthMiddleware, (req, res) => {
    const result = roomManager.emergencyUnlockQseBuzzer(req.params.id);
    if (result.error) return res.status(400).json(result);
    res.json(result);
  });

  router.post('/admin/rooms/:id/qse/tortada', adminAuthMiddleware, (req, res) => {
    const result = roomManager.triggerQseTortada(req.params.id, req.body.targetName);
    if (result.error) return res.status(400).json(result);
    res.json(result);
  });

  router.post('/admin/rooms/:id/qse/advance', adminAuthMiddleware, (req, res) => {
    const room = roomManager.getRoom(req.params.id);
    if (!room || room.mode !== 'quem_sou_eu') return res.status(404).json({ error: 'Sala inválida.' });

    const nextIdx = (room.currentQuestionIndex !== undefined && room.currentQuestionIndex >= 0) ? (room.currentQuestionIndex + 1) : 0;
    if (nextIdx < room.questions.length) {
      const result = roomManager.startQseRound(req.params.id, nextIdx);
      res.json(result);
    } else {
      const result = roomManager.finishQseCompetition(req.params.id);
      res.json(result);
    }
  });

  router.post('/admin/rooms/:id/qse/finish', adminAuthMiddleware, (req, res) => {
    const result = roomManager.finishQseCompetition(req.params.id);
    if (result.error) return res.status(400).json(result);
    res.json(result);
  });

  // Get Quem Sou Eu questions bank
  router.get('/qse/questions', (req, res) => {
    const authHeader = req.headers.authorization;
    let token = null;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.substring(7);
    } else if (req.query && req.query.adminToken) {
      token = req.query.adminToken;
    }
    const { isValidAdminToken } = require('../auth');
    const isAdmin = isValidAdminToken(token);

    if (!isAdmin) {
      return res.status(401).json({ error: 'Acesso restrito ao Administrador.' });
    }

    const qseQuestions = db.get('qse_questions') || [];
    res.json(qseQuestions);
  });

  // Admin Quem Sou Eu Question CRUD
  router.post('/admin/qse/questions', adminAuthMiddleware, (req, res) => {
    const { theme, difficulty, points, question, options, correctAnswer, introText } = req.body;
    if (!question || !options || options.length !== 4 || correctAnswer === undefined) {
      return res.status(400).json({ error: 'Preencha todos os campos obrigatórios (enunciado, 4 opções e alternativa correta).' });
    }

    const newQ = {
      id: 'qse-' + crypto.randomBytes(4).toString('hex'),
      theme: theme || 'Fenômeno Embriológico',
      difficulty: difficulty || 'Médio',
      points: parseInt(points) || (difficulty === 'Difícil' ? 30 : difficulty === 'Médio' ? 20 : 10),
      question: question.trim(),
      options: options.map(o => o.trim()),
      correctAnswer: parseInt(correctAnswer),
      introText: introText || 'Atenção participantes! Quem Sou Eu?'
    };

    db.update('qse_questions', list => [...(list || []), newQ]);
    res.json({ success: true, question: newQ });
  });

  router.put('/admin/qse/questions/:id', adminAuthMiddleware, (req, res) => {
    const qId = req.params.id;
    let found = false;

    db.update('qse_questions', list => {
      return (list || []).map(q => {
        if (q.id === qId) {
          found = true;
          return {
            ...q,
            ...req.body,
            options: req.body.options ? req.body.options.map(o => o.trim()) : q.options,
            correctAnswer: req.body.correctAnswer !== undefined ? parseInt(req.body.correctAnswer) : q.correctAnswer,
            points: req.body.points ? parseInt(req.body.points) : q.points
          };
        }
        return q;
      });
    });

    if (found) {
      res.json({ success: true, message: 'Pergunta atualizada com sucesso!' });
    } else {
      res.status(404).json({ error: 'Pergunta não encontrada.' });
    }
  });

  router.delete('/admin/qse/questions/:id', adminAuthMiddleware, (req, res) => {
    const qId = req.params.id;
    db.update('qse_questions', list => (list || []).filter(q => q.id !== qId));
    res.json({ success: true, message: 'Pergunta removida com sucesso.' });
  });

  // --- Question Bank CRUD (Admin Only) ---

  router.post('/admin/questions', adminAuthMiddleware, (req, res) => {
    const { category, difficulty, points, theme, question, options, correctAnswer, scientificExplanation, curiosity, difference, reference } = req.body;
    
    if (!question || !options || options.length !== 4 || correctAnswer === undefined) {
      return res.status(400).json({ error: 'Preencha todos os campos obrigatórios (enunciado, 4 opções e alternativa correta).' });
    }

    const newQuestion = {
      id: 'emb-' + crypto.randomBytes(4).toString('hex'),
      category: category || 'Gêmeos siameses',
      difficulty: difficulty || 'Média',
      points: parseInt(points) || (difficulty === 'Difícil' ? 30 : difficulty === 'Média' ? 20 : 10),
      theme: theme || 'Fenômeno Embriológico',
      question: question.trim(),
      options: options.map(o => o.trim()),
      correctAnswer: parseInt(correctAnswer),
      scientificExplanation: scientificExplanation || '',
      curiosity: curiosity || '',
      difference: difference || '',
      reference: reference || 'Moore, K.L. Embriologia Clínica.'
    };

    db.update('questions', qs => [...qs, newQuestion]);
    res.json({ success: true, question: newQuestion });
  });

  router.put('/admin/questions/:id', adminAuthMiddleware, (req, res) => {
    const qId = req.params.id;
    let found = false;

    db.update('questions', qs => {
      return qs.map(q => {
        if (q.id === qId) {
          found = true;
          return {
            ...q,
            ...req.body,
            id: q.id // prevent altering ID
          };
        }
        return q;
      });
    });

    if (!found) return res.status(404).json({ error: 'Pergunta não encontrada.' });
    res.json({ success: true });
  });

  router.delete('/admin/questions/:id', adminAuthMiddleware, (req, res) => {
    const qId = req.params.id;
    db.update('questions', qs => qs.filter(q => q.id !== qId));
    res.json({ success: true, message: 'Pergunta excluída.' });
  });

  router.post('/admin/questions/reset-defaults', adminAuthMiddleware, (req, res) => {
    db.set('questions', defaultQuestions);
    res.json({ success: true, message: 'Banco de perguntas restaurado para os padrões do Grupo 5!' });
  });

  // --- History and Results Export ---

  router.get('/history', (req, res) => {
    const history = db.get('history') || [];
    res.json(history);
  });

  router.get('/admin/export/:format', adminAuthMiddleware, (req, res) => {
    const { format } = req.params;
    const history = db.get('history') || [];

    if (format === 'json') {
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Content-Disposition', 'attachment; filename="competicoes_embriologia_grupo5.json"');
      return res.send(JSON.stringify(history, null, 2));
    }

    if (format === 'csv') {
      // Build CSV with classification, scores, and details
      let csv = 'ID_Sala,Nome_Sala,Modo,Data_Encerramento,Posicao,Nome_Participante_Dupla,Codigo_Dupla,Pontos,Respostas,Acertos,Percentual_Acerto,Tempo_Total_Corretas_Segundos\n';

      history.forEach(h => {
        const date = new Date(h.finishedAt).toLocaleDateString('pt-BR');
        (h.leaderboard || []).forEach(lb => {
          const row = [
            `"${h.code || h.roomId}"`,
            `"${(h.name || '').replace(/"/g, '""')}"`,
            `"${h.mode}"`,
            `"${date}"`,
            lb.position,
            `"${(lb.name || '').replace(/"/g, '""')}"`,
            `"${lb.code || ''}"`,
            lb.score || 0,
            lb.answeredCount || 0,
            lb.correctCount || 0,
            `${lb.accuracy || 0}%`,
            lb.totalCorrectTime ? Number(lb.totalCorrectTime).toFixed(1) : '0.0'
          ];
          csv += row.join(',') + '\n';
        });
      });

      res.setHeader('Content-Type', 'text/csv; charset=utf-8');
      res.setHeader('Content-Disposition', 'attachment; filename="resultados_embriologia_grupo5.csv"');
      return res.send('\uFEFF' + csv); // Include BOM for Excel compatibility in Portuguese
    }

    res.status(400).json({ error: 'Formato de exportação inválido (use json ou csv).' });
  });

  return router;
};
