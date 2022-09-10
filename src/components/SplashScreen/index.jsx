import React, { useState } from "react";
import powerOn from '../../assets/imgs/power-on.svg';
import powerOff from '../../assets/imgs/power-off.svg';
import './style.css';

export default function SplashScreen() {
  const [on, setOn] = useState(true);

  const turnOff = () => {
    setOn(false);
    window.location.replace("/#offline-overview-container")
  }

  return (
    <div>
      <main className="main">
        <img src={on ? powerOn : powerOff} alt="Power on" className="power-image" onClick={turnOff}/>
        <span className="status-power">
          { on ? "ON" : "OFF" }
        </span>
        <div className="box-subititle">
          <p className="text-splash">Quer ficar off? Pressione o power!</p>
        </div>
      </main>
    </div>
  );
}