# 🎯 Resume Forge

> **Your resume deserves more than just a glance.**  
> This project helps job seekers **optimize** their resumes for **Applicant Tracking Systems (ATS)** and stand out from the pile.

---

## 📌 Overview

The **ATS Resume Checker** is a MERN-based web application that analyzes resumes against industry standards and ATS algorithms.  
It provides **detailed feedback**, **scoring**, and **AI-powered suggestions** to improve your chances of getting shortlisted.

Whether you're a **fresher** or a **seasoned professional**, this tool tailors its analysis to your career stage.

---

## 🚀 Features

- 📄 **Resume Upload & Analysis** – Supports PDF/DOCX formats.
- 🤖 **AI-Powered Suggestions** – Improves structure, keywords, and formatting.
- 📊 **Score Meter** – Visual score indicator for resume quality.
- 🧠 **Fresher vs. Experienced Mode** – Context-aware feedback.
- ✨ **Multi-Step Resume Builder** – Create ATS-friendly resumes directly in the app.
- 🎨 **Custom Templates** – Choose from multiple Chitkara-approved templates.
- 📥 **Download as PDF** – Instantly save your optimized resume.

---

## 🛠️ Tech Stack

**Frontend:**
- React + Vite
- Tailwind CSS
- Axios

**Backend:**
- Node.js + Express.js
- MongoDB + Mongoose

**AI Integration:**
- Google Gemini AI API

---

## 📸 Screenshots

| Dashboard | Resume Analysis |
|-----------|----------------|
| <img width="1429" height="783" alt="image" src="https://github.com/user-attachments/assets/c9b80563-1610-4926-b3ef-eaf1c7fe77bf" />
 | <img width="883" height="847" alt="image" src="https://github.com/user-attachments/assets/4d434b36-04df-4f13-b36f-d40e498dfc0e" />
 |

---

## 📦 Installation & Setup

```bash
# 1️⃣ Clone the repository
git clone https://github.com/yourusername/ats-resume-checker.git

# 2️⃣ Navigate to the project folder
cd ats-resume-checker

# 3️⃣ Install dependencies for both frontend & backend
cd client && npm install
cd ../server && npm install

# 4️⃣ Create a .env file in both client & server directories
# Example .env (server)
PORT=5000
MONGO_URI=your_mongo_connection_string
GEMINI_API_KEY=your_google_gemini_api_key

# Example .env (client)
VITE_API_BASE_URL=http://localhost:5000/api

# 5️⃣ Start the development servers
# In one terminal (backend)
cd server && npm run dev

# In another terminal (frontend)
cd client && npm run dev
