
# 🧮 Basic Calculator

A simple yet modern **Basic Calculator** web app built using **Next.js (TypeScript)** for the frontend and **FastAPI (Python)** for the backend.

---

 🚀 Overview

This project demonstrates the integration of a **FastAPI backend** with a **Next.js TypeScript frontend** to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.

It was designed to explore the use of:
- **React Hooks** (`useState`, `useEffect`)
- **Asynchronous API communication**
- **Component-based UI structure**
- **Modern TypeScript + Python full-stack development**

---

 🛠️ Tech Stack

Frontend:
- Next.js (TypeScript)
- React Hooks (`useState`, etc.)
- Tailwind CSS (for styling)

Backend:
- FastAPI (Python)
- Async endpoints for calculator operations

---

 ⚙️ Features

- Perform basic arithmetic operations  
- Real-time UI updates using React states  
- API-driven calculations handled by FastAPI  
- Simple and clean user interface  

---

 🧩 Project Structure

```

Calculator/
│
├── Backend/            # FastAPI backend
│   ├── main.py         # API endpoints for calculator operations
│
├── Frontend/           # Next.js frontend
│   ├── app/
│   ├── components/
│   └── pages/
│
└── README.md           # You are here

````

---

🧠 Concepts Used

- **useState** for managing user input and button states  
- **Async API calls** to communicate with the backend  
- **JSON request/response handling**  
- **Separation of concerns** between frontend and backend  

---

 ⚡ Getting Started

1️⃣ Clone the repository
```bash
git clone https://github.com/Ahmed72007/Basic_Calculator.git
cd Basic_Calculator
````

2️⃣ Backend Setup (FastAPI)

```bash
cd Backend
pip install fastapi uvicorn
uvicorn main:app --reload
```

Backend will run on [http://127.0.0.1:8000](http://127.0.0.1:8000)

3️⃣ Frontend Setup (Next.js)

```bash
cd Frontend
npm install
npm run dev
```

Frontend will run on [http://localhost:3000](http://localhost:3000)


📸 Preview

<img width="1362" height="641" alt="Screenshot 2025-11-02 202737" src="https://github.com/user-attachments/assets/e6314e6c-75fb-487a-bc37-7906cfd5cbd5" />

---

👨‍💻 Author

Ahmed Abdullah
Built with ❤️ using FastAPI & Next.js (TypeScript)

---

🧱 License

This project is open-source and available under the [MIT License](LICENSE).


