# Knekt - Connect with Mentors & Find Projects

Knekt is a web application that connects developers with mentors and helps them find projects to collaborate on.

## Features

- User authentication (Login/Register)
- Project browsing and creation
- Mentor matching
- User profiles
- Project collaboration tools

## Tech Stack

- **Frontend:**
  - React.js
  - React Router Dom
  - Vite (Build tool)
  - CSS for styling

- **Backend:**
  - Node.js
  - Express
  - MongoDB
  - JWT for authentication
  - bcrypt for password hashing

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/knekt.git
```

2. Install frontend dependencies:
```bash
cd knekt
npm install
```

3. Install backend dependencies:
```bash
cd Backend
npm install
```

4. Create a `.env` file in the Backend directory with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

### Running the Application

1. Start the frontend development server:
```bash
cd knekt
npm run dev
```

2. Start the backend server:
```bash
cd Backend
npm start
```

The frontend will be available at `http://localhost:5173` and the backend at `http://localhost:5000`

## Project Structure

```
knekt/
├── src/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── Api/
│   └── assets/
Backend/
├── controllers/
├── models/
├── routes/
├── middleware/
└── config/
```

## Available Scripts

Frontend:
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

Backend:
- `npm start` - Start the server
- `npm test` - Run tests

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Create a Pull Request

## License

ISC License