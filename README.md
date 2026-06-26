# DashWatch

A production-ready Angular SaaS Dashboard Starter Kit built with Angular 19 and NG-ZORRO.

DashWatch helps developers build modern SaaS applications faster by providing a clean, opinionated, and scalable frontend architecture.

---

## 🚀 Why DashWatch?

Most Angular dashboard templates fall into two extremes:

- ❌ Over-engineered enterprise templates (hard to customize, like Metronic)
- ❌ Barebone starters (no structure, no guidance)

DashWatch sits in the middle:

> A clean SaaS foundation that is **simple to start, but scalable to grow**.

---

## 🎯 What DashWatch Gives You

DashWatch is not just a UI kit — it's a **starter system for SaaS products**.

It includes:

- 🔐 Authentication flow (Login / Logout)
- 📊 Dashboard layout system
- 🧭 Sidebar + routing structure
- 🧱 Feature-based architecture
- 🌙 Light / Dark theme support
- 🔌 Mock API layer for development
- ⚡ Angular 19 + Signals-ready architecture

---

## 🧱 Architecture Overview

DashWatch follows a scalable structure:

src/app/    
├── core/ # Singleton services (auth, api, guards)    
├── shared/ # Reusable UI components    
├── layout/ # App shell (sidebar, header, layout)    
├── features/ # Business modules (auth, dashboard, etc.)    
├── data/ # Mock APIs / fake backend    
  

This ensures:

- Clear separation of concerns
- Easy scalability
- Maintainable feature growth

---

## 🛠 Tech Stack

- Angular 19
- NG-ZORRO (Ant Design for Angular)
- RxJS
- Angular Signals
- SCSS
- TypeScript

---

## ✨ Core Features

### 🔐 Authentication
- Login page
- Route guard protection
- Token-based mock auth

### 📊 Dashboard System
- Responsive layout
- Sidebar navigation
- Ready-to-use dashboard page

### 🎨 UI System
- NG-ZORRO components
- Custom theme support
- Light / Dark mode ready

### 🧩 Developer Experience
- Feature-based folder structure
- Clean routing system
- Mock API layer for fast development

---

## 📦 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
ng serve
```

---

### 3. Open in browser

```bash
http://localhost:4200
```

---

## 🎯 What You Should See After Running

After login, you will enter:    

📊 Dashboard page with KPI cards   
🧭 Sidebar navigation (Dashboard / Table / Chart)   
📈 Sample chart data visualization   
🌙 Theme toggle (light/dark mode)   

If you see this screen → installation is successful 🎉

---

 ## 📸 Preview

 ### Login page
 ![Login](./docs/login.png)

 ### Dashboard UI
 ![Dashboard](./docs/dashboard.png)

 ### UI Components
![UI](./docs/ui.png)

---

## 📁 Key Pages
- /login → Authentication page
- /dashboard → Main dashboard (protected route)

---

## 🎯 Design Philosophy
DashWatch is built around three principles:   
    
1. Simplicity First   
     
Avoid unnecessary complexity in early-stage SaaS products.   
    
2. Scalability by Design    
     
Feature-based architecture allows safe long-term growth.   
    
3. Product Mindset    
    
This is not a UI library — it's a SaaS foundation.    

---

## 🧭 Roadmap
Planned improvements:

 - Table system module
 - Chart components
 - Role-based access control (RBAC)
 - Real API integration layer
 - Multi-theme support
 - Plugin-based architecture

 --- 

 ## 🤝 Contributing

 This project is currently maintained as a personal SaaS starter kit.   

 Pull requests and ideas are welcome in the future.   

 ---

 ## 📄 License

 MIT License

 ---

 ## 💡 Philosophy    
 “DashWatch is not a dashboard template. It is a starting point for building SaaS products without reinventing the wheel.”   

---

