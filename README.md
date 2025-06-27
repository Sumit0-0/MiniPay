# 💸 Mini Pay

**Mini Pay** is a full-stack digital wallet and transaction management system. Built to simulate the real-world operations of a minimal payment service, it supports user registration, secure authentication, wallet balance tracking, and transaction history.

This project reflects secure backend practices, clean React frontend structure, and modern UI styling. It was developed as part of my learning and portfolio to demonstrate full-stack application building using modern technologies.

---

## 🎬 Project Walkthrough (Video)

🎯 **[👉 Click here to download and watch the full video demo (MP4)](https://github.com/Sumit0-0/MiniPay/blob/168323f802572205d9a2904d378ffd0269111a35/Ui%20Video.mp4)**

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



