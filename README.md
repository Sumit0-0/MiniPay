# 💸 Mini Pay

**Mini Pay** is a full-stack digital wallet and transaction management system. Built to simulate the real-world operations of a minimal payment service, it supports user registration, secure authentication, wallet balance tracking, and transaction history.

This project reflects secure backend practices, clean React frontend structure, and modern UI styling. It was developed as part of my learning and portfolio to demonstrate full-stack application building using modern technologies.

---

## 🎥 Demo

![Demo Video](https://github.com/Sumit0-0/MiniPay/blob/08670dba56e85716e79eec373c533be43dde599c/Ui%20Video.mp4)

---

## 🚀 Features

- ✅ User Signup/Login with hashed passwords
- 🔐 JWT-based Authentication
- 💼 Wallet Balance Management
- ➕ Add Transactions (Credit/Debit)
- 📊 View Transaction History
- 📱 Fully Responsive UI
- 📦 Clean RESTful API Design
- 🌐 Hosted on NeonDB (PostgreSQL serverless DB)

---

## 🛠️ Tech Stack

### ⚙️ Backend
- **Node.js**, **Express.js**
- **Prisma ORM**
- **NeonDB** (Serverless PostgreSQL)
- **JWT** for Auth
- **bcrypt** for Password Hashing
- **dotenv**, **CORS**

### 🎨 Frontend
- ****React.js + TypeScript**** (with Hooks & Functional Components)
- **Tailwind CSS** for styling
- **Vite** for fast dev build

### 🧰 Dev Tools
- **Prettier**
- **Postman** for API Testing

---

##  Database Schema
![image alt](https://github.com/Sumit0-0/MiniPay/blob/5710f1aedb722747b62f59a1fb0f3d17fd4c00e8/Screenshot%202025-06-26%20231219.png)

...
## 📚 What I Learned

...

## 📂 Folder Structure

📁 MiniPay  
├── client/                 # React frontend  
│   ├── components/         # UI components  
│   ├── pages/              # Login, Dashboard, etc.   
│   ├── App.jsx             # App root  
│   └── main.jsx            # Entry point  
├── server/                 # Express backend  
|   |──prisma/              # Prisma schema and client 
|   |──src/
│         ├── controllers/                        # Logic handlers
|                        ├── authController       # Authentication Routes Logic
|                        ├── crudController       # Crud Routes Logic
│         ├── routes/                             # API endpoints    
│         ├── middleware/                         # JWT verification  
│         └── index.js                            # Server entry  
├── .env
|── .env.example
├── README.md  
└── package.json  

## ⚙️ Installation & Run Instructions

Follow the steps below to set up and run the project on your local machine:

### 📥 1. Clone the Repository

```bash
git clone https://github.com/your-username/minipay.git
cd minipay

# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install

#Generate Prisma Client
npx prisma generate

# Run the frontend (in /client)
cd ../client/src
npm run dev

# Run the backend (in /server)
cd ../server
npm run dev



