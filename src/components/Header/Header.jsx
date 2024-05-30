import React from 'react';
import logo from '../../assets/logo.png'; // Importe o logo
import './Header.css'; // Importe o arquivo de estilos CSS

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo" className="logo" /> {/* Aplique a classe CSS aqui */}
      
    </header>
  );
}

export default Header;

