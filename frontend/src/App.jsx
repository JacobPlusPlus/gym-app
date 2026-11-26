import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import { AuthProvider } from './context/AuthProvider';
import { useAuth } from './context/useAuth';
import Exercises from './pages/Exercises';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Workout from './pages/Workout';

function RequireAuth({ children }) {
  const { user, loading, verificationError, retrySessionVerification } = useAuth();

  if (loading) {
    return <div className="empty-state">Checking your session...</div>;
  }

  if (verificationError) {
    return (
      <div className="empty-state" role="alert">
        <p>Could not verify your session: {verificationError}</p>
        <button className="btn btn-primary" onClick={retrySessionVerification}>Try again</button>
      </div>
    );
  }

  return user ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<RequireAuth><AppLayout /></RequireAuth>}>
            <Route index element={<Home />} />
            <Route path="workout" element={<Workout />} />
            <Route path="exercises" element={<Exercises />} />
            <Route path="reports" element={<Reports />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
