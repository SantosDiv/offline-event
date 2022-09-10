import React, { useState } from "react";
import offlineLogo from '../../assets/imgs/offline-logo.svg';
import icons from '../../assets/imgs/icons.svg';
import logoShalom from '../../assets/imgs/logo-shalom.svg';
import instagramLogo from '../../assets/imgs/instagram-logo.svg';
import './style.css'

export default function OfflineOverviewScreen() {
  const INITAL_STATE = { name: '', email: '', phoneNumber: '' };
  const [dataForm, setDataForm] = useState(INITAL_STATE);

  const handleChange = (e) => {
    const { value, name } = e.target;

    setDataForm({ ...dataForm, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <main className="offline-overview-container" id="offline-overview-container">
      <header>
        <img src={offlineLogo} alt="logo seminário de vida no espirito santo - offline" className="offline-logo"/>
        <p className="offline-subtitle">Só Deus Basta!</p>
        <section className="icons-container">
          <img src={icons} alt="Icone de wifi, mudo e cruz" className="icons"/>
        </section>
      </header>
      <main>
        <p className="text-overview">A melhor experiência que você vai viver este ano! <b>Desconecta que passa!</b></p>
        <h1 className="orange-color">14 a 16 de outubro</h1>
        <p>Faça agora sua pré-inscrição</p>

        <form className="form-subscription" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            value={dataForm.name}
            onChange={handleChange}
            placeholder="Nome"
          />
          <input
            type="email"
            name="email"
            id="email"
            value={dataForm.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            value={dataForm.phoneNumber}
            onChange={handleChange}
            placeholder="Telefone"
          />
          <button type="submit" className="btn-submit">Finalizar</button>
        </form>

      </main>

      <footer className="footer">
        <img src={logoShalom} alt="Logo da comunidade shalom" height={35} />
        <span>|</span>
        <img src={instagramLogo} alt="Logo do instagram" height={25}/>
      </footer>

    </main>
  );
}