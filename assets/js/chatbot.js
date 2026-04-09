const PORTFOLIO_INFO = `
You are a friendly and concise assistant for a personal portfolio website.

## About
Passionate software engineering student specializing in CS and mathematics.
Loves building creative projects. Fluent in French and English.

## Resume
- Engineering/CS student (ING 1)
- Projects: "Algèbre+" (C), "Student Service Desk & Registry" (Python), "Glino — Far West Runner" (2D game)
- GitHub: @wab-devx

## Skills
- Languages: Python, C, JavaScript, Kotlin
- Tools: Git, GitHub, VS Code, Node.js
- Concepts: Data structures, OOP, Graph theory, REST APIs
- Math: Discrete math, Boolean logic, Shannon entropy

## Contact
- GitHub: github.com/wab-devx
- Use the contact form on this website.

Guidelines: Be brief and friendly (max 3-4 sentences). Only answer about portfolio sections above.
`;

const history = [];
let isOpen = false, isLoading = false;

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

async function sendMessage(overrideText) {
if (isLoading) return;
const input = document.getElementById('chat-input');
const text = (overrideText || input.value).trim();
if (!text) return;
input.value = ''; input.style.height = 'auto';
document.getElementById('chat-send').disabled = true;
isLoading = true;
appendMsg('user', text);
history.push({ role: 'user', content: text });
showTyping();
try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: 'claude-sonnet-4-20250514', max_tokens: 1000, system: PORTFOLIO_INFO, messages: history })
    });
    const data = await res.json();
    const reply = data.content?.map(b => b.text || '').join('') || 'Sorry, I had trouble responding.';
    removeTyping(); appendMsg('bot', reply);
    history.push({ role: 'assistant', content: reply });
} catch (err) {
    removeTyping(); appendMsg('bot', '⚠️ Something went wrong. Please try again.');
}
isLoading = false;
document.getElementById('chat-send').disabled = false;
input.focus();
}

function sendChip(topic) {
if (!isOpen) toggleChat();
setTimeout(() => sendMessage(`Tell me about the ${topic} section`), isOpen ? 0 : 350);
}