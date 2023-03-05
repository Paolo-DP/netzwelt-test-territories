import "./App.css";

function App() {
  return <LoginPage />;
}

function LoginPage() {
  return (
    <section className="LoginPage">
      <form className="LoginForm">
        <ul>
          <li>
            <span>Username:</span>
          </li>
          <li>
            <input type="text" placeholder="Username/Email" />
          </li>
          <li>
            <span>Password:</span>
          </li>
          <li>
            <input type="password" placeholder="Password" />
          </li>
          <li>
            <button>LOGIN</button>
          </li>
        </ul>
      </form>
    </section>
  );
}

export default App;
