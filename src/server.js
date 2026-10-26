import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    service: 'jarvis',
    status: 'running',
    timestamp: new Date().toISOString(),
  });
});

app.get('/api/message', (_req, res) => {
  res.json({
    message: 'Welcome back, user. Jarvis is online and ready.',
  });
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
  console.log(`Jarvis is running at http://localhost:${port}`);
});
