import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to Knekt</h1>
      <div className="hero-section">
        <h2>Connect with Mentors & Find Projects</h2>
        <p>Join our community of developers and mentors</p>
        <div className="cta-buttons">
          <button onClick={() => navigate('/login')} className="primary-btn">
            Login
          </button>
          <button onClick={() => navigate('/register')} className="secondary-btn">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}