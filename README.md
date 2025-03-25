# **To-Do App with Appointment Management**

## **📌 Project Overview**
This is a **React + Vite** project that implements a **To-Do Application** with user authentication and an appointment management system. It provides a simple and intuitive interface for users to manage their tasks and appointments efficiently.

---

## **✨ Features**

### 🔹 **User Authentication**
- **Login & Registration** pages for user management.
- Secure authentication system using `ToDoLogin` and `ToDoRegister` components.

### 📋 **To-Do Dashboard**
- Users can access their **personalized dashboard** (`ToDoDashboard`).
- Displays a list of tasks and appointments.

### 📅 **Appointment Management**
- **Add an Appointment:** `AddAppointment` component to schedule a new task.
- **Edit an Appointment:** `EditAppointment` component to modify an existing task.
- **Delete an Appointment:** `DeleteAppointment` component to remove a task.

### 🚀 **Navigation & Routing**
- Uses `react-router-dom` for seamless navigation.
- Pages include:
  - `ToDoHome` (Home Page)
  - `ToDoDashboard` (User Dashboard)
  - `AddAppointment`
  - `EditAppointment`
  - `DeleteAppointment`
  - `Login & Register`

### 🎨 **UI & Styling**
- Bootstrap 5 is used for responsive design.
- Bootstrap Icons for visual elements.
- Custom styles managed in `todo-index.css`.

---

## **🛠️ Technologies Used**
- **React (Vite)** for fast development.
- **React Router** for navigation.
- **Bootstrap & Bootstrap Icons** for UI styling.
- **Formik** (if used) for form handling.
- **Axios** (if used) for API communication.

---

## **📂 Project Structure**
```
/src
│── components/
│   ├── ToDoHome.jsx
│   ├── ToDoLogin.jsx
│   ├── ToDoRegister.jsx
│   ├── ToDoDashboard.jsx
│   ├── AddAppointment.jsx
│   ├── EditAppointment.jsx
│   ├── DeleteAppointment.jsx
│── todo-index.jsx  (Main App Component)
│── todo-index.css  (Styling)
│── main.jsx        (Entry File)
│── App.jsx         (App Router)
```

---

## **📌 Installation & Setup**

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/milind1314/React-ToDo-List.git
cd React-ToDo-List
```

### 2️⃣ **Install Dependencies**
```sh
npm install
```

### 3️⃣ **Run the Development Server**
```sh
npm run dev
```

### 4️⃣ **Open in Browser**
Go to: **`http://localhost:5173/`**

---

## **📌 How to Use**
1. **Register/Login** to access your dashboard.
2. **View, Add, Edit, or Delete** tasks/appointments.
3. Navigate using the header links.
4. Logout when finished.

---

## **📌 Future Improvements**
✅ Integrate a backend (Node.js, Firebase, etc.)
✅ Add user authentication with JWT
✅ Implement dark mode
✅ Add drag-and-drop task reordering

---

## **📌 License**
This project is open-source and available under the **MIT License**.

