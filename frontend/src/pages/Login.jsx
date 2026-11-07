import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <h1>GymApp</h1>
      <h2>Logowanie</h2>

      <form>
        <input type="email" placeholder="Adres e-mail" required />

        <input type="password" placeholder="Hasło" required />

        <button type="submit">Zaloguj się</button>
      </form>

      <button type="button" onClick={() => navigate('/')}>
        Wróć do strony głównej
      </button>
    </div>
  );
}

export default Login;
