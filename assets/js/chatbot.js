// 1. Define your hardcoded responses here
  const RESPONSES = {
    "about": "I'm a sophomore software engineering student passionate about technology and math. I love building creative projects like games, apps and websites!",
    "resume": "My experience includes projects like **Algèbre+** (C), a **Student Service Desk** (Python), and **Glino**(C++), a Far West runner game.",
    "skills": "I'm proficient in **Python, C, JavaScript, and Kotlin**. I also work with digital logic tools like Logisim and Tinkercad.",
    "contact": "You can find me on GitHub at **@wab-devx** or use the contact form on this site!",
    "default": "I'm not sure about that. Try asking about my **About**, **Resume**, **Skills**, or **Contact** sections!"
  };

  const history = [];
  let isOpen = false;

  function toggleChat() {
    isOpen = !isOpen;
    document.getElementById('chat-panel').classList.toggle('open', isOpen);
    document.getElementById('chat-toggle').classList.toggle('open', isOpen);
    const dot = document.querySelector('#chat-toggle .dot');
    if (dot) dot.style.display = 'none';
    if (isOpen) setTimeout(() => document.getElementById('chat-input').focus(), 300);
  }

  function autoResize(el) { el.style.height = 'auto'; el.style.height = Math.min(el.scrollHeight, 80) + 'px'; }
  function handleKey(e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } }

  function appendMsg(role, text) {
    const c = document.getElementById('chat-messages');
    const w = document.createElement('div'); w.className = `msg ${role}`;
    const a = document.createElement('div'); a.className = 'msg-avatar'; a.textContent = role === 'bot' ? '🤖' : '👤';
    const b = document.createElement('div'); b.className = 'bubble';
    b.innerHTML = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
    w.appendChild(a); w.appendChild(b); c.appendChild(w); c.scrollTop = c.scrollHeight;
  }

  function showTyping() {
    const c = document.getElementById('chat-messages');
    const w = document.createElement('div'); w.className = 'msg bot'; w.id = 'typing-indicator';
    const a = document.createElement('div'); a.className = 'msg-avatar'; a.textContent = '🤖';
    const b = document.createElement('div'); b.className = 'bubble typing'; b.innerHTML = '<span></span><span></span><span></span>';
    w.appendChild(a); w.appendChild(b); c.appendChild(w); c.scrollTop = c.scrollHeight;
  }

  function removeTyping() { const el = document.getElementById('typing-indicator'); if (el) el.remove(); }

  // 2. The new sendMessage function that uses the RESPONSES object
  async function sendMessage(overrideText) {
    const input = document.getElementById('chat-input');
    const text = (overrideText || input.value).trim().toLowerCase();
    if (!text) return;

    input.value = ''; 
    input.style.height = 'auto';
    appendMsg('user', text);
    
    showTyping();

    // Simulate a short "thinking" delay for realism
    setTimeout(() => {
      removeTyping();
      
      let reply = RESPONSES.default;

      // Simple keyword matching logic
      if (text.includes("about")) reply = RESPONSES.about;
      else if (text.includes("resume") || text.includes("project")) reply = RESPONSES.resume;
      else if (text.includes("skill") || text.includes("language")) reply = RESPONSES.skills;
      else if (text.includes("contact") || text.includes("github")) reply = RESPONSES.contact;

      appendMsg('bot', reply);
    }, 600);
  }

  function sendChip(topic) {
    if (!isOpen) toggleChat();
    setTimeout(() => sendMessage(topic), isOpen ? 0 : 350);
  }