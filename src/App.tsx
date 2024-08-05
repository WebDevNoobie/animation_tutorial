import { useState } from "react";
import "./App.scss";

function App() {
  const [signup, setSignup] = useState(false);

  return (
    <>
      <div className="app">
        <div className="shadowContainer"></div>
        <div className="container1">
          <div className="login">Login</div>
          <div className="inputt">
            <div className="inputitem">
              <p>Username</p>
              <input type="text" />
            </div>
            <div className="inputitem">
              <p>Password</p>
              <input type="password" />
            </div>
          </div>
          <button>Login</button>
          <h3>Forgot your password?</h3>
        </div>
        <div className={signup ? "signup" : "signupInitial"}>
          <h1 className="plus" onClick={() => setSignup(!signup)}>
            +
          </h1>
          <div className="appdis">
            <div className="login">Register</div>
            <div className="inputt">
              <div className="inputitem">
                <p>Username</p>
                <input type="text" />
              </div>
              <div className="inputitem">
                <p>Password</p>
                <input type="password" />
              </div>
              <div className="inputitem">
                <p>Password</p>
                <input type="password" />
              </div>
            </div>
            <button>Register</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
