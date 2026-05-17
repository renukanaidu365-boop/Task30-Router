import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';

// Home Page Component
function HomePage() {
  return (
    <div className="page-container">
      <div className="page-card">
        <div className="page-icon">🏠</div>
        <h1>Home Page</h1>
        <p>Welcome to my React Router application. Use the navigation bar to visit different pages.</p>
        <Link to="/dashboard">
          <button className="btn">Go to Dashboard →</button>
        </Link>
      </div>
    </div>
  );
}

// Dashboard Page Component
function DashboardPage() {
  return (
    <div className="page-container">
      <div className="page-card">
        <div className="page-icon">📊</div>
        <h1>Dashboard</h1>
        <p>Welcome to your Dashboard! Here are your statistics.</p>
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Users</h3>
            <p>1,234</p>
          </div>
          <div className="stat-card">
            <h3>Revenue</h3>
            <p>$12,345</p>
          </div>
          <div className="stat-card">
            <h3>Orders</h3>
            <p>567</p>
          </div>
        </div>
        <Link to="/">
          <button className="btn">← Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

// Login Page Component
function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert('Login Successful! Welcome back.');
    navigate('/dashboard');
  };

  return (
    <div className="page-container">
      <div className="page-card">
        <div className="page-icon">🔐</div>
        <h1>Login Page</h1>
        <p>Enter your credentials to access your account.</p>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <p className="link-text">
          Don't have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </div>
    </div>
  );
}

// Signup Page Component
function SignupPage() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    alert('Account created successfully! Please login.');
    navigate('/login');
  };

  return (
    <div className="page-container">
      <div className="page-card">
        <div className="page-icon">📝</div>
        <h1>Signup Page</h1>
        <p>Create a new account to get started.</p>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" required />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Create a password" required />
          </div>
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
        <p className="link-text">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}

// Navigation Bar Component
function Navigation() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>🌐</span> React Router App
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      <p>Task 30 - React Router DOM | Routes: Home, Dashboard, Login, Signup</p>
      <p style={{ fontSize: '12px', marginTop: '5px' }}>Built with React Router v6</p>
    </footer>
  );
}

// Main App Component
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;