"use client"

import React, {useState} from "react";  
import Login from "./components/login/Login";
import { setCookie } from "cookies-next";
import axios from "axios";
import style from './page.module.css'; 

export default function Home() {
  const [notFoundCount, setNotFoundCound] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    axios.get(
      `http://localhost:3005/auth/login?email=${data.get('email')}&password=${data.get('password')}`
    ).then((response) => {
      setCookie(
        'auth_token',
        response.data.token
      )

      setNotFoundCound(false);

        window.location.href = '/products';
    })
    .catch((error) => {
      setNotFoundCound(true);
    })
  }
  
  function notFoundCountHtmlContet()
  {
    if (notFoundCount) {
      return <div className={style.notFoundClass}>
      <p>Esse usuário não existe, por gentileza registrar um usuário que existe</p>
      </div>
    }
  }


  return (
    <main>
      <Login handleSubmit={handleSubmit}></Login>
      {notFoundCountHtmlContet()} 
    </main>
  );
}
