const fs = require('fs');
const path = require('path');
const defaultQuestions = require('./questionsData');

const DATA_DIR = path.join(__dirname, '..', 'data');
const DB_FILE = path.join(DATA_DIR, 'db.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

class Database {
  constructor() {
    this.data = {
      admin: {
        // default admin password: adminembrio2026
        passwordHash: '$2a$10$Q7eY0bU9gGgE2.uC8YI8vOq3YJ0E94F8r2vXW.N5F1X5Q472cK26.', // will be initialized below
        lastLogin: null
      },
      settings: {
        defaultTimeLimit: 180,
        defaultFormula: 'standard', // standard: maxPts * (1 - 0.5 * timeUsed / timeTotal)
        revealScientificExplanation: true,
        tieBreaker: 'most_correct_then_fastest'
      },
      questions: [],
      rooms: {},
      history: []
    };
    this.load();
  }

  load() {
    try {
      if (fs.existsSync(DB_FILE)) {
        const raw = fs.readFileSync(DB_FILE, 'utf-8');
        const parsed = JSON.parse(raw);
        this.data = { ...this.data, ...parsed };
      }
      
      // Ensure default questions exist and update if new questions were added
      if (!this.data.questions || this.data.questions.length < defaultQuestions.length) {
        this.data.questions = defaultQuestions;
      }
      this.save();
    } catch (err) {
      console.error('Error loading database, initializing defaults:', err);
      this.data.questions = defaultQuestions;
      this.save();
    }
  }

  save() {
    try {
      const tempFile = DB_FILE + '.tmp';
      fs.writeFileSync(tempFile, JSON.stringify(this.data, null, 2), 'utf-8');
      fs.renameSync(tempFile, DB_FILE);
    } catch (err) {
      console.error('Error saving database:', err);
    }
  }

  get(key) {
    return this.data[key];
  }

  set(key, value) {
    this.data[key] = value;
    this.save();
  }

  update(key, updaterFn) {
    this.data[key] = updaterFn(this.data[key]);
    this.save();
  }
}

const db = new Database();

module.exports = db;
