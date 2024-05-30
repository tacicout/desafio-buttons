import React, { useState } from 'react';
import Button from './components/Button/Button';
import Header from './components/Header/Header'; 
import './App.css'; // Importe o arquivo de estilos CSS

function App() {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [selected, setSelected] = useState(false);

  const handleLoadingClick = () => {
    setLoading(!loading);
  };

  const handleDisableClick = () => {
    setDisabled(!disabled);
  };

  const handleSelectedClick = () => {
    setSelected(!selected);
  };

  return (
    <div className="app-container">
      <Header /> {/* Utilização do componente Header */}
      <h1>Meu App</h1>
      <div className="button-container">
        <Button
          value={loading ? 'Carregando...' : 'Clique Aqui'}
          onClick={handleLoadingClick}
          className={loading ? 'click-button' : 'loading-button'}
        />
        <Button
          value={disabled ? 'Habilitar botão' : 'Botão Habilitado'}
          onClick={handleDisableClick}
          className={disabled ? 'disabled-button' : 'enabled-button'}
        />
        <Button
          value={selected ? 'Não Selecionado' : 'Selecionado'}
          onClick={handleSelectedClick}
          className={selected ? 'non-selected-button' : 'selected-button'}
        />
      </div>
    </div>
  );
}

export default App;