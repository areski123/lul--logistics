import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// initialize sqlite
let db;
const initDb = async () => {
  db = await open({ filename: './data.db', driver: sqlite3.Database });
  await db.exec(`
    CREATE TABLE IF NOT EXISTS bookings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      createdAt TEXT DEFAULT (datetime('now')),
      name TEXT,
      email TEXT,
      phone TEXT,
      serviceType TEXT,
      pickupLocation TEXT,
      deliveryLocation TEXT,
      date TEXT,
      time TEXT,
      packageSize TEXT,
      specialInstructions TEXT,
      paymentMethod TEXT
    );
  `);
  await db.exec(`
    CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      createdAt TEXT DEFAULT (datetime('now')),
      name TEXT,
      email TEXT,
      phone TEXT,
      service TEXT,
      pickupLocation TEXT,
      deliveryLocation TEXT,
      date TEXT,
      time TEXT,
      message TEXT
    );
  `);
};

// routes
app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.post('/api/bookings', async (req, res) => {
  const b = req.body || {};
  try {
    const stmt = await db.run(
      `INSERT INTO bookings (name, email, phone, serviceType, pickupLocation, deliveryLocation, date, time, packageSize, specialInstructions, paymentMethod)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        b.name || '',
        b.email || '',
        b.phone || '',
        b.serviceType || '',
        b.pickupLocation || '',
        b.deliveryLocation || '',
        b.date || '',
        b.time || '',
        b.packageSize || '',
        b.specialInstructions || '',
        b.paymentMethod || ''
      ]
    );
    res.json({ id: stmt.lastID });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to create booking' });
  }
});

app.get('/api/bookings', async (_req, res) => {
  const rows = await db.all('SELECT * FROM bookings ORDER BY createdAt DESC LIMIT 200');
  res.json(rows);
});

app.post('/api/messages', async (req, res) => {
  const m = req.body || {};
  try {
    const stmt = await db.run(
      `INSERT INTO messages (name, email, phone, service, pickupLocation, deliveryLocation, date, time, message)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        m.name || '',
        m.email || '',
        m.phone || '',
        m.service || '',
        m.pickupLocation || '',
        m.deliveryLocation || '',
        m.date || '',
        m.time || '',
        m.message || ''
      ]
    );
    res.json({ id: stmt.lastID });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to create message' });
  }
});

app.get('/api/messages', async (_req, res) => {
  const rows = await db.all('SELECT * FROM messages ORDER BY createdAt DESC LIMIT 200');
  res.json(rows);
});

initDb().then(() => {
  app.listen(port, () => console.log(`API listening on :${port}`));
});


