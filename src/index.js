import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

// var today = new Date();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();


const img1 = "https://picsum.photos/200/300"
const img2 = "https://picsum.photos/300/300"
const img3 = "https://picsum.photos/250/300"


ReactDOM.render(
  <div>
    <h1 className="head">Hello Mihir sharma!!!</h1>
    <div className="img-div">
      <img src={img1} alt="Random images" />
      <img src={img2} alt="Random images" />
      <img src={img3} alt="Random images" />
    </div>

  </div>,
  document.getElementById('root'));
