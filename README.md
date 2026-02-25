# 🚀 AI Quote Generator

An AI-powered full-stack web application that generates inspirational quotes based on user-provided keywords.

Built using **React (Frontend)**, **FastAPI (Backend)**, and **Google Gemini API**.

---

## ✨ Features

- 🔮 AI-generated quotes based on keywords
- 🎨 Modern gradient glass UI
- 📋 Copy-to-clipboard functionality
- ⏳ Loading state while generating quotes
- 🌐 Works across devices on local network
- ⚡ FastAPI backend with Gemini integration

---

## 🛠 Tech Stack

### Frontend
- React
- Axios
- CSS (Glassmorphism UI)

### Backend
- FastAPI
- Uvicorn
- Python
- Google Gemini API (gemini-2.5-flash)

### Tools
- Git & GitHub
- VS Code

---

## 📂 Project Structure

AI-quote-generator/
│
├── backend/
│ ├── main.py
│ ├── services/
│ ├── requirements.txt
│ └── .env (not included in repo)
│
├── frontend/
│ ├── src/
│ ├── package.json
│
└── README.md


---

# ⚙️ How To Run Locally

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/ai-quote-generator.git
cd ai-quote-generator
```

---

## 🖥 Backend Setup

### 2️⃣ Navigate to backend folder

```bash
cd backend
```

### 3️⃣ Create virtual environment

```bash
python -m venv venv
```

### 4️⃣ Activate virtual environment

**Windows (CMD):**
```bash
venv\Scripts\activate
```

**Mac / Linux:**
```bash
source venv/bin/activate
```

### 5️⃣ Install dependencies

```bash
pip install -r requirements.txt
```

### 6️⃣ Create environment file

Create a `.env` file inside the `backend` folder and add:

```
GEMINI_API_KEY=your_gemini_api_key_here
```

You can generate a Gemini API key from:
https://aistudio.google.com

### 7️⃣ Run backend server

```bash
uvicorn main:app --reload
```

Backend will run at:
http://127.0.0.1:8000

---

## 🌐 Frontend Setup

8️⃣ Open a new terminal and navigate to the frontend folder:

```bash
cd frontend
```

### 9️⃣ Install dependencies

```bash
npm install
```

### 🔟 Start frontend

```bash
npm start
```

Frontend will run at:
http://localhost:3000

---

## 🚀 Usage

1. Open the frontend in your browser.
2. Enter a keyword (e.g., success, love, discipline).
3. Click **Generate**.
4. Copy the generated quote if needed.