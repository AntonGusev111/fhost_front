import React from "react";
import MainImg from "../assets/MainPage.jpg";
import MainAuth from "../components/MainAuth";

function StartPage() {
  const simple = {
    login: "Simple_user",
    password: "Simple123*",
  };

  const adm = {
    login: "Admin_user",
    password: "Admin123*",
  };

  return (
    <div className="MainContainer">
      <div className="MainPage">
        <div className="MainInfo">
          <h1 className="MainHeader">
            Бесплатный сервис <br></br>для хранения файлов
          </h1>
          <h3 className="MainText">
            Чтобы пользоваться хранилищем нужна регистрация
          </h3>
          <div className="loginData">
          <h5 className="loginDataItem">Пользователь: <br></br>Login: {simple.login} <br></br>password: {simple.password}</h5>
          <h5>Администратор: <br></br>Login: {adm.login} <br></br>password: {adm.password}</h5>
          </div>
        </div>
        <div>
          <img className="MainImg" src={MainImg}></img>
        </div>
      </div>
      <MainAuth />
    </div>
  );
}

export { StartPage };
