# 📦 core/ - DashWatch Core Layer

## 🧠 Overview

`core/` contains **singleton services and application-wide infrastructure logic** used across the entire DashWatch application.

This layer is **loaded once** and should **never contain UI or feature-specific logic**.

---

# 🚀 Core Layer Responsibility

> Core = “System backbone”

It provides:

- Authentication foundation
- API communication layer
- Global guards
- HTTP interceptors
- Application-wide services
- Environment-level utilities

---

# ❌ What Core SHOULD NOT contain

To keep architecture clean and scalable:

- ❌ UI components (buttons, tables, charts)
- ❌ Feature-specific logic (dashboard, login, user)
- ❌ Page-level routing
- ❌ Layout / shell components
- ❌ Business-specific workflows

---

# 🧱 Recommended Structure

src/app/core/   
├── services/   
│   ├── api.service.ts   
│   ├── auth.service.ts   
│   ├── storage.service.ts   
│   └── theme.service.ts   
│                                   
├── guards/   
│   ├── auth.guard.ts   
│   └── role.guard.ts (future)   
│                             
├── interceptors/   
│   ├── http.interceptor.ts   
│   └── error.interceptor.ts (optional)   
│                                     
├── models/   
│   ├── user.model.ts  
│   └── api-response.model.ts  
│              
└── core.providers.ts     

---

# 🔐 Core Responsibilities Explained

## 1. Services (System-level logic)

### auth.service.ts
Handles:

- login state
- token storage
- auth check

> ❗No UI logic allowed

---

### api.service.ts
Handles:

- HTTP wrapper
- base URL config
- request standardization

Responsibilities:

- GET / POST abstraction
- attach headers
- error normalization

---

### theme.service.ts
Handles:

- light/dark mode state
- persist theme in storage

---

## 2. Guards

### auth.guard.ts

Protects routes:

```ts
canActivate() {
  return this.authService.isLoggedIn();
}
```
Usage:

Protect app-shell routes
Redirect to login if unauthenticated

---

## 3. Interceptors
http.interceptor.ts

Handles:

attach token   
handle 401 errors   
global request/response transformation  

---

## 4. Models

Shared data structures used across features:

User
ApiResponse<T>

Keeps type system consistent across app.

---

# 🧠 Core Design Principles

## 1. Singleton Only

Everything in core/ should be:

instantiated once for the entire app

## 2. Framework Layer Only

Core is not business logic, it is:   

infrastructure layer   

## 3. Framework-agnostic logic preferred

Avoid Angular-specific coupling when possible.

## 4. No Feature Awareness

Core must NOT know:

dashboard exists   
login page exists   
table or chart exists   

---

# 🚀 Dependency Direction Rule   

core → shared → features

✔ Correct direction:

features use core   
core never imports features   

---

# 🧱 Relationship with Other Layers   
## Features    

Uses core:

- auth service   
- api service   

## Shared  

May use core utilities, but NOT business logic.

## Shell

Uses core indirectly via services.

---

# 🚨 Common Mistakes
## ❌ Putting this in core:
- dashboard.service.ts   
- login.component.ts   
- table logic   

👉 This breaks architecture immediately

## ❌ Using core as “dump folder”

If core becomes:   

“everything not sure where to put”   

👉 architecture will collapse    

---

# 🎯 Why Core Matters in DashWatch

DashWatch is a SaaS starter kit product, so core layer ensures:

- consistent API handling    
- clean authentication flow    
- scalable feature isolation   
- easy customer modification      

---

# 🧠 One-line definition

Core is the application backbone that enables all features, but owns none of them.

---