import { BrowserRouter, Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

// Home Page Component
function HomePage() {
  return (
    <div className="page">
      <h1>Home Page</h1>
      <p>Welcome to my React Router app. Use the navigation bar above to visit different pages.</p>
    </div>
  );
}

// Dashboard Page Component
function DashboardPage() {
  return (
    <div className="page">
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <div className="stats">
        <div className="stat">Users: 1,234</div>
        <div className="stat">Sales: $12,345</div>
        <div className="stat">Orders: 567</div>
      </div>
    </div>
  );
}

// Login Page Component with controlled form
function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login attempted with: ${email}`);
    navigate('/dashboard');
  };

  return (
    <div className="page">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>No account? <NavLink to="/signup">Sign up</NavLink></p>
    </div>
  );
}

// Signup Page Component with controlled form
function SignupPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Account created for: ${name}`);
    navigate('/login');
  };

  return (
    <div className="page">
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name:</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required 
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>Have an account? <NavLink to="/login">Login</NavLink></p>
    </div>
  );
}

// 404 Page - Not Found
function NotFoundPage() {
  return (
    <div className="page">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <NavLink to="/">Go back to Home</NavLink>
    </div>
  );
}

// Navigation Bar with NavLink
function Navbar() {
  return (
    <nav>
      <h2>React Router App</h2>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>Dashboard</NavLink>
        <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>Login</NavLink>
        <NavLink to="/signup" className={({ isActive }) => isActive ? 'active' : ''}>Signup</NavLink>
      </div>
    </nav>
  );
}

// Main App Component
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;