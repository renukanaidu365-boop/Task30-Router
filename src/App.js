import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() { return <h1>🏠 Home Page</h1>; }
function Dashboard() { return <h1>📊 Dashboard</h1>; }
function Login() { return <h1>🔐 Login Page</h1>; }
function Signup() { return <h1>📝 Signup Page</h1>; }

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 20 }}>
        <nav style={{ marginBottom: 20 }}>
          <Link to="/" style={{ marginRight: 10 }}>Home</Link>
          <Link to="/dashboard" style={{ marginRight: 10 }}>Dashboard</Link>
          <Link to="/login" style={{ marginRight: 10 }}>Login</Link>
          <Link to="/signup">Signup</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
