
import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../App";
import styles from "./Login.module.css"


export default function Login() {
  const { state, dispatch } = useContext(AuthContext);
  const [data, setData] = useState({ errorMessage: "", isLoading: false });

  const { client_id, redirect_uri } = state;

  useEffect(() => {
      console.log("state: ",state);
  },[state])
  useEffect(() => {
    const url = window.location.href;
    const hasCode = url.includes("?code=");
    if (hasCode) {
      const newUrl = url.split("?code=");
      window.history.pushState({}, null, newUrl[0]);
      setData({ ...data, isLoading: true });

      const requestData = {
        code: newUrl[1]
      };

      const proxy_url = state.proxy_url;
      console.log("prroxy url: ", proxy_url);
      fetch(proxy_url, {
        method: "POST",
        body: JSON.stringify(requestData)
      })
        .then(response => response.json())
        .then(data => {
          dispatch({
            type: "LOGIN",
            payload: { user: data, isLoggedIn: true }
          });
        })
        .catch(error => {
            console.log("login error: ", error);
          setData({
            isLoading: false,
            errorMessage: "Sorry! Login failed"
          });
        });
    }
  }, [state, dispatch, data]);

  if (state.isLoggedIn) {
      localStorage.setItem("state", JSON.stringify(state))
    return <Redirect to = "/github" />;
  }

  return (
      <section className = {styles.container}>
        <div>
          <h1>Welcome</h1>
          <span>{data.errorMessage}</span>
          <div className = {styles.loginContainer}>
            {data.isLoading ? (
              <div className = {styles.loaderContainer}>
                <div className = {styles.loader}></div>
              </div>
            ) : (
              <>
                <a
                  className = {styles.loginLink}
                  href = {`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
                  onClick={() => {
                    setData({ ...data, errorMessage: "" });
                  }}
                >
                  <button className = {styles.button}>Login with GitHub</button>
                </a>
              </>
            )}
          </div>
        </div>
      </section>
  );
}