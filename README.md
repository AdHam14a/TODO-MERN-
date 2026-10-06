# MERN Notes & To-Do Application

A full-stack notes and task management application built using the MERN stack (MongoDB, Express, React, Node.js).

---

## 🚀 Features

- **Create Notes**: Add new notes with a title and content.
- **Read Notes**: Fetch all notes or retrieve a single note by ID.
- **Update Notes**: Modify existing notes.
- **Delete Notes**: Remove notes from the database.
- **Timestamps**: Automatic tracking of creation and update times.

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js (ES Modules)
- **Database**: MongoDB with Mongoose ODM
- **Environment Management**: `dotenv`
- **Development Tooling**: `nodemon`

---

## 📁 Project Structure

```plaintext
TO-DO/
├── Backend/
│   ├── src/
│   │   ├── Config/
│   │   │   └── db.js              # MongoDB connection
│   │   ├── Controllers/
│   │   │   └── notesControllers.js# Business logic for notes
│   │   ├── Model/
│   │   │   └── Note.js            # Mongoose Note schema
│   │   ├── Routes/
│   │   │   └── notesRoutes.js     # API route definitions
│   │   └── server.js              # Express app entry point
│   ├── .env.example               # Template for environment variables
│   ├── package.json
│   └── package-lock.json
├── Frontend/                      # Frontend client application
├── .gitignore
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (Local instance or MongoDB Atlas cluster)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd TO-DO
   ```

2. **Configure Backend Environment Variables:**
   Navigate into the `Backend` directory:
   ```bash
   cd Backend
   ```
   Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```
   Fill in your actual environment details in `.env`:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5001
   ```

3. **Install Backend Dependencies:**
   ```bash
   npm install
   ```

4. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   The backend server will start at `http://localhost:5001`.

---

## 📡 API Endpoints

Base URL: `http://localhost:5001/api/notes`

| Method | Endpoint | Description | Request Body |
| :--- | :--- | :--- | :--- |
| `GET` | `/` | Retrieve all notes | None |
| `POST` | `/` | Create a new note | `{ "title": "string", "content": "string" }` |
| `GET` | `/:id` | Retrieve a single note by ID | None |
| `PUT` | `/:id` | Update a note by ID | `{ "title": "string", "content": "string" }` |
| `DELETE` | `/:id` | Delete a note by ID | None |

---

## 📄 License

This project is licensed under the [ISC](LICENSE) License.
