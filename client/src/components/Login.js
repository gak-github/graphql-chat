import React, { useState } from 'react';
import { login } from '../utils/auth';

const Login = ({onLogin}) => {
  const [state, setState] = useState({ name: '', password: '', error: false });
  const handleChange = (event) => {
    const {name, value} = event.target;
    setState({...state, [name]: value});
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {name, password} = state;
    const user = await login(name, password);
    if (user) {
      onLogin(user);
    } else {
      setState({...state, error: true});
    }
  };

  const {name, password, error} = state;
    return (
      <div>
        <section className="section">
          <div className="container">
            <h1 className="title">Chat Login</h1>
            <form>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input className="input" type="text" name="name" value={name}
                    onChange={handleChange} />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input className="input" type="password" name="password" value={password}
                    onChange={handleChange} />
                </div>
              </div>
              <div className="field">
                {error &&
                  <p className="help is-danger">Invalid Credentials</p>
                }                
                <div className="control">
                  <button className="button is-link"
                    onClick={handleSubmit}>Login</button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    );

};

export default Login;
