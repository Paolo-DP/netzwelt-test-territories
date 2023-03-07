import "./App.css";
import "./testdata.js";
import testData from "./testdata.js";

function App() {
  //return <LoginPage />;
  return (
    <main>
      <HomePage data={testData} />
    </main>
  );
}

function LoginPage() {
  return (
    <section className="LoginPage">
      <form className="LoginForm">
        <ul className="LoginUL">
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

function HomePage(props) {
  const data = props.data;
  sortTree(props.data);
  return (
    <>
      <header>
        <h1>Territories</h1>
        <p>here is the list of territories in the Philippines</p>
      </header>
      <section className="TerritoryList">
        <ul>
          {data.map((territory) => (
            <li>
              <span type="caret">{territory.name}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

function sortTree(elements) {
  const sorted = elements.filter((element) => element.id == 1);
  console.log(sorted);
}

export default App;
