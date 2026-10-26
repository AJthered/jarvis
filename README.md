async function loadStatus() {
  try {
    const response = await fetch('/api/health');
    const data = await response.json();

    const statusPill = document.getElementById('status-pill');
    const messageText = document.getElementById('assistant-message');

    if (data.ok) {
      statusPill.textContent = 'System online';
      statusPill.style.color = '#34d399';
      statusPill.style.borderColor = 'rgba(52, 211, 153, 0.35)';
      statusPill.style.background = 'rgba(52, 211, 153, 0.12)';
    }

    const messageResponse = await fetch('/api/message');
    const messageData = await messageResponse.json();
    messageText.textContent = messageData.message;
  } catch (error) {
    document.getElementById('status-pill').textContent = 'Offline';
    document.getElementById('status-pill').style.color = '#fca5a5';
    document.getElementById('status-pill').style.borderColor = 'rgba(252, 165, 165, 0.35)';
    document.getElementById('status-pill').style.background = 'rgba(127, 29, 29, 0.2)';
    document.getElementById('assistant-message').textContent = 'Unable to reach the Jarvis service.';
  }
}

loadStatus();
