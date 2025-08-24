# Malone University  
**Repository:** Malone-Global-University/MGU  
**Website:** [maloneuniversity.org](https://maloneuniversity.org)  

---

## 📖 About
Malone University is a sovereign, independent digital education platform.  
It delivers free political science, leadership, and general education resources, alongside the **Malone Doctrine War College**—an elite training track for revolutionary governance and executive leadership.  

The project is built as a **static website**, published via **GitHub → Netlify**, with all pages written in HTML, CSS, and lightweight JavaScript.  

---

## 📂 Repository Structure
The repo only contains published or required files.  
All drafts, tests, and scratch directories are excluded with `.gitignore`.

MGU/
│
├── index.html # Main landing page
├── home.html
├── founder.html
├── manifesto.html
├── catalog.html
├── courses.html
├── directory.html
│
├── community/ # Published community pages
├── departments/ # Department & course content
├── library/ # Dictionary, Blackpapers, archives
│
├── component/ # Shared site components
│ ├── css/ # Stylesheets
│ ├── js/ # JavaScript
│ ├── html/ # Partials (header, footer, etc.)
│ └── (registry,x,goal excluded)
│
├── css/ # Global styles
├── images/ # Static media assets
├── const/ # Constants/config if referenced
│
├── .gitignore
├── .gitattributes
└── netlify.toml # (optional) Netlify config


---

## 🚀 Deployment
- **Hosting:** [Netlify](https://www.netlify.com/)  
- **Repo → Netlify:** All commits pushed to `main` branch auto-deploy to production.  
- **Build system:** None (pure static HTML/CSS/JS).  
- **Entry point:** `index.html`  

---

## 🛡️ Contribution Rules
This repository represents **published material only**.  
- ✅ Content inside `community/`, `departments/`, `library/`, and approved HTML pages may be updated.  
- ✅ Components (`component/css`, `component/js`, `component/html`) may be improved, but **registry/x/goal** are excluded.  
- ❌ No drafts, test files, or experimental directories should be committed.  
- ❌ No “floating files” (orphaned pages not linked to the main site).  

All contributions are reviewed for **consistency, integrity, and sovereignty** before merging.  

---

## 📜 License
All rights reserved © Malone Global University.  
Content and code are proprietary unless explicitly stated otherwise.  

---

## 🌐 Links
- **Website:** [https://maloneuniversity.org](https://maloneuniversity.org)  
- **Org:** Malone-Global-University  
- **Repo:** [MGU](https://github.com/Malone-Global-University/MGU) 