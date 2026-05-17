import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';

function HomePage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontSize: '48px' }}>🏠 Home Page</h1>
      <p>Welcome to my React Router application</p>
      <Link to="/dashboard">
        <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Go to Dashboard</button>
      </Link>
    </div>
  );
}

function DashboardPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontSize: '48px' }}>📊 Dashboard</h1>
      <p>Welcome to your Dashboard!</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '30px 0' }}>
        <div style={{ background: '#f0f0f0', padding: '20px', borderRadius: '10px' }}>
          <h3>Users</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>1,234</p>
        </div>
        <div style={{ background: '#f0f0f0', padding: '20px', borderRadius: '10px' }}>
          <h3>Revenue</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>$12,345</p>
        </div>
        <div style={{ background: '#f0f0f0', padding: '20px', borderRadius: '10px' }}>
          <h3>Orders</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>567</p>
        </div>
      </div>
      <Link to="/">
        <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Back to Home</button>
      </Link>
    </div>
  );
}

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert('Login Successful!');
    navigate('/dashboard');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontSize: '48px' }}>🔐 Login Page</h1>
      <form onSubmit={handleLogin} style={{ maxWidth: '300px', margin: '0 auto' }}>
        <div style={{ marginBottom: '15px' }}>
          <input type="email" placeholder="Email" style={{ width: '100%', padding: '10px' }} required />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input type="password" placeholder="Password" style={{ width: '100%', padding: '10px' }} required />
        </div>
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
    </div>
  );
}

function SignupPage() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    alert('Account Created! Please login.');
    navigate('/login');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontSize: '48px' }}>📝 Signup Page</h1>
      <form onSubmit={handleSignup} style={{ maxWidth: '300px', margin: '0 auto' }}>
        <div style={{ marginBottom: '15px' }}>
          <input type="text" placeholder="Full Name" style={{ width: '100%', padding: '10px' }} required />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input type="email" placeholder="Email" style={{ width: '100%', padding: '10px' }} required />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input type="password" placeholder="Password" style={{ width: '100%', padding: '10px' }} required />
        </div>
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </div>
  );
}

function Navbar() {
  return (
    <nav style={{ background: '#1a1a2e', padding: '15px 30px', display: 'flex', justifyContent: 'space-between' }}>
      <h2 style={{ color: 'white' }}>React Router App</h2>
      <div>
        <Link to="/" style={{ color: 'white', marginLeft: '20px', textDecoration: 'none' }}>Home</Link>
        <Link to="/dashboard" style={{ color: 'white', marginLeft: '20px', textDecoration: 'none' }}>Dashboard</Link>
        <Link to="/login" style={{ color: 'white', marginLeft: '20px', textDecoration: 'none' }}>Login</Link>
        <Link to="/signup" style={{ color: 'white', marginLeft: '20px', textDecoration: 'none' }}>Signup</Link>
      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;