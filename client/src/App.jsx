import { useState } from 'react';

import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {

  const [showRegister, setShowRegister] = useState(false);

  const token = localStorage.getItem('token');

  if (token) {

    return <Dashboard />;

  }

  return (

    <div className="app-container">

      <div className="auth-box">

        <h1>Team Task Manager</h1>

        {
          showRegister
          ?
          <div>

            <Register />

            <div className="switch-text">

              <p>
                Already have an account?
              </p>

              <button
                onClick={() => setShowRegister(false)}
              >
                Login
              </button>

            </div>

          </div>

          :

          <div>

            <Login />

            <div className="switch-text">

              <p>
                Don't have an account?
              </p>

              <button
                onClick={() => setShowRegister(true)}
              >
                Register
              </button>

            </div>

          </div>
        }

      </div>

    </div>

  );

}

export default App;