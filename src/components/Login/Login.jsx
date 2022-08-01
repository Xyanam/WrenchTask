import React, { useState } from "react";
import classes from "./Login.module.css";
import { useDispatch } from "react-redux/es/exports";
import { setUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);

  const fakeAuth = {
    login: "Aleksey",
    password: "123test",
  };

  const signIn = () => {
    if (login === fakeAuth.login && pass === fakeAuth.password) {
      setError(false);
      dispatch(setUser(login));
      navigate("/posts");
    } else {
      setError(true);
    }
  };
  return (
    <div className={classes.form}>
      <h2>Authorization</h2>
      <div className={classes.formItems}>
        <div className={classes.formItem}>
          <label>login</label>
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div className={classes.formItem}>
          <label>password</label>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        {error ? (
          <span style={{ color: "red", textAlign: "center" }}>
            Неверный логин или пароль
          </span>
        ) : (
          ""
        )}
      </div>
      <button className={classes.btn} onClick={signIn}>
        Sign In
      </button>
    </div>
  );
};

export default Login;
