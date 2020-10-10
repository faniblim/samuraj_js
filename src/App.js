//09 урок
import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
};

export default App;
//конспект

//горячие клавиши
//выровнять код в VS code Shift+Alt+F или Ctrl+A потом Ctrl+K+F
//выровнять код в Webstorm Ctrl+Alt+L
//в VS code Ctrl+Shift+F - посмотреть, где используется выделенная компонента.
//Ctrl+клик на выделенное слово - перейти к компонете, поиск файлов по проекту.

//06
// App - переменная, которая по факту является фунцией. Она возвращает что-то. Разметку, например.

//07
//синтаксис стрелочной и обычной функции
// function Welcome() {
//   return <h1>Hell, IT-KAMASUNRA</h1>;
// }
//
// const Welcome = () => {
//   return <h1>Hell, IT-KAMASUNRA</h1>;
// }
//
//components это кусок разметки, HTMLля
//пример анонимной функции
//const Header = function() {
//   return (<div>
//     <a>Home</a>
//     <a>News Feed</a>
//     <a>Messages</a>
//   </div>);
// }
//
//пример функции
//function Header () {
//   return (<div>
//     <a>Home</a>
//     <a>News Feed</a>
//     <a>Messages</a>
//   </div>);
// }
//
//пример стрелочной функции
//const Header = () => {
//   return (<div>
//     <a>Home</a>
//     <a>News Feed</a>
//     <a>Messages</a>
//   </div>);
// }
//компонента - это функция, возвращающая разметку (JSX)
//Как её использовать?
//функция нужна для того, чтобы ее вызвать. Какдый раз, когда мы объявляем такую
//функцию, у нас в reac-те появляется, считайте, что новый тэг <Header /> или <Welcom />
//мы его создаем.
//Компонента - это функция, возвращающая разметку (JSX).
//Компонетна - это тэг.
//Мы руками не вызываем функцию. Никогда. Создаем тэг. А React ее вызывает.
//Чтобы компонету вызвать, мы должны по факту вставить название копоненты куда-либо

//09
//Перенесем Technologies в файл Technologies.js
//Перенесем Header  в файл Header.js

//10
//компонеты <Header />, <Technologies />, <Footer /> удаляем
//файлы .js и тэги
//удаляем в App импорты к ним.
