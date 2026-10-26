* {
  box-sizing: border-box;
}

:root {
  --bg: #07111f;
  --bg-soft: #101d31;
  --panel: rgba(17, 29, 46, 0.9);
  --panel-alt: rgba(30, 45, 68, 0.9);
  --border: rgba(148, 163, 184, 0.18);
  --text: #e2e8f0;
  --muted: #9fb0c6;
  --primary: #7dd3fc;
  --primary-strong: #38bdf8;
  --success: #34d399;
  --shadow: 0 20px 50px rgba(15, 23, 42, 0.45);
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: Inter, 'Segoe UI', sans-serif;
  background: radial-gradient(circle at top, #10233d 0%, var(--bg) 45%);
  color: var(--text);
}

button {
  font: inherit;
}

.app-shell {
  display: grid;
  grid-template-columns: 260px 1fr;
  min-height: 100vh;
}

.sidebar {
  background: rgba(7, 17, 31, 0.82);
  border-right: 1px solid var(--border);
  padding: 32px 20px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 32px;
}

.brand-mark {
  display: inline-grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--primary-strong), #a78bfa);
  color: #041322;
  font-weight: 800;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nav-item {
  background: transparent;
  border: 1px solid transparent;
  border-radius: 10px;
  color: var(--muted);
  padding: 12px 14px;
  text-align: left;
  cursor: pointer;
  transition: 0.2s ease;
}

.nav-item.active,
.nav-item:hover {
  background: rgba(125, 211, 252, 0.08);
  border-color: rgba(125, 211, 252, 0.2);
  color: var(--text);
}

.content {
  padding: 36px;
}

.topbar,
.hero,
.cards {
  max-width: 1000px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
}

.eyebrow {
  margin: 0 0 6px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
  color: var(--primary);
}

h1,
h2,
h3,
p {
  margin: 0;
}

h1 {
  font-size: clamp(2rem, 3vw, 2.8rem);
}

.status-pill {
  border: 1px solid rgba(52, 211, 153, 0.35);
  background: rgba(52, 211, 153, 0.12);
  color: var(--success);
  border-radius: 999px;
  padding: 10px 18px;
  font-weight: 600;
}

.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 24px 28px;
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(16, 29, 49, 0.9), rgba(19, 34, 51, 0.8));
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
}

.hero h2 {
  font-size: clamp(1.7rem, 2vw, 2.5rem);
  margin-bottom: 8px;
}

#assistant-message {
  color: var(--muted);
  font-size: 1rem;
}

.primary-btn {
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  color: #041322;
  padding: 14px 18px;
  font-weight: 700;
  cursor: pointer;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 32px;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: var(--panel);
  padding: 22px 20px;
  border-radius: 18px;
  border: 1px solid var(--border);
}

.label {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.7rem;
  color: var(--muted);
}

.card h3 {
  font-size: 2rem;
}

.card span {
  color: var(--muted);
}

@media (max-width: 840px) {
  .app-shell {
    grid-template-columns: 1fr;
  }

  .sidebar {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }

  .cards {
    grid-template-columns: 1fr;
  }

  .hero {
    flex-direction: column;
    align-items: flex-start;
  }
}
