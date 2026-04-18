# Personal Portfolio — Waberi Farah
 
A multi-page personal portfolio website showcasing projects, skills, and contact information. Built with HTML, CSS, Bootstrap 5, and a custom AI-powered chatbot widget.
 
---
 
## Project Structure
 
```
portfolio/
├── index.html          # Home / Hero page
├── about.html          # About me + stats + skills preview
├── skills.html         # Full skills, languages & experience
├── portfolio.html      # Projects showcase
├── contact.html        # Contact info & form
├── assets/
│   ├── css/
│   │   ├── main.css        # Main stylesheet
│   │   └── chatbot.css     # Chatbot widget styles
│   ├── js/
│   │   ├── main.js         # Core scripts (AOS, typed, etc.)
│   │   └── chatbot.js      # Chatbot widget logic
│   ├── img/                # Images (profile photo, hero bg)
│   └── vendor/             # Third-party libraries
│       ├── bootstrap/
│       ├── bootstrap-icons/
│       ├── aos/
│       ├── typed.js/
│       ├── purecounter/
│       ├── swiper/
│       ├── glightbox/
│       ├── waypoints/
│       ├── imagesloaded/
│       └── isotope-layout/
└── forms/
    └── contact.php         # Server-side contact form handler
```
 
---
 
## Pages
 
| Page | Description |
|------|-------------|
| `index.html` | Hero section with name, animated typed roles, and social links |
| `about.html` | Bio, personal info, stats counters, and skill progress bars |
| `skills.html` | Programming languages, natural languages, education & experience |
| `portfolio.html` | Cards for each project with GitHub links |
| `contact.html` | Address, phone, email, and a contact form |
 
---
 
## Features
 
- **Responsive design** — mobile-first layout using Bootstrap 5 grid
- **Animated UI** — scroll animations via AOS, typing effect via Typed.js, counters via PureCounter
- **Portfolio cards** — project showcase with icons and GitHub links
- **Contact form** — PHP-based form with validation feedback
- **AI Chatbot widget** — floating assistant that answers questions about the portfolio (About, Skills, Portfolio, Contact)
- **Smooth scroll** & scroll-to-top button
- **Dark footer** with social media links
---
 
## Tech Stack
 
| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | CSS3, Bootstrap 5 |
| Icons | Bootstrap Icons |
| Animations | AOS (Animate On Scroll) |
| Typing effect | Typed.js |
| Counters | PureCounter |
| Lightbox | GLightbox |
| Slider | Swiper.js |
| Chatbot | Custom JS |
 
---
 
## Chatbot Widget
 
Each page includes a floating chatbot assistant (bottom-right corner). It answers visitor questions about the portfolio owner using the **Anthropic Claude API**.
 
- Toggle open/close with the chat button
- Quick-access chips: **About**, **Portfolio**, **Skills**, **Contact**
- Powered by `assets/js/chatbot.js` and styled via `assets/css/chatbot.css`
> To configure the chatbot, set your API key in `chatbot.js`.
 
---
 
## Projects Showcased
 
### Glino Game
A 2D runner game built in **C++ with raylib**, using OOP principles with multiple `.hpp`/`.cpp` files.  
[→ View on GitHub](https://github.com/wab-devx/Lucky-Lino)
 
### Student Service Desk
A **Python** terminal app for managing student records and support tickets — built with OOP, custom exceptions, JSON storage, and unit tests.  
[→ View on GitHub](https://github.com/wab-devx/student_desk_service)
 
### Algebra+
A **C** terminal application for learning algebra, designed for engineering students with an interactive CLI interface.  
[→ View on GitHub](https://github.com/wab-devx/Algebra_plus)
 
---
 
## Getting Started
 
Since this is a static site (no build step required), just open it in your browser:
 
```bash
# Clone the repo
git clone https://github.com/wab-devx/<repo-name>.git
cd <repo-name>
 
# Open directly
open index.html
# or use a local server (recommended)
npx serve .
```
 
> The contact form (`contact.php`) requires a PHP-enabled server to function.
 
---
 
## Live Demo
 
[→ View on GitHub Pages](https://wab-devx.github.io/Personal-portfolio/).
 
---
 
## Contact
 
- **Email:** wabefarah@gmail.com
- **Phone:** +253 77240285
- **Location:** Cité Dawaleh Gabode 4, Djibouti City, DJI
- **GitHub:** [@wab-devx](https://github.com/wab-devx)
---
 
## License
 
© 2026 Waberi Farah Waberi. All rights reserved.