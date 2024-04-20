import React, { useState } from 'react';
import "./form.scss"

const Form = () => {
  const [dadosUsuario, setDadosUsuario] = useState({
    tempo_exposicao: 0,
    intervalos_descanso: 0,
    brilho_tela: 0,
    distancia_visualizacao: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDadosUsuario({
      ...dadosUsuario,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:8080/v1/received/pyeye", {
      method: 'POST',
      headers:{
        'Content-Type': 'aplication/json'
      },
      body: JSON.stringify(dadosUsuario),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) =>{
      console.error("Erro ao enviar dados:", error);
    });
  };

  return (
    <div className='formulario-container'>
      <div className='formulario-intro'>
        <br />
        <br />
        <h2>Bem-vindo ao Formulário de Saúde Ocular</h2>
        <hr />
        <br />
        <p>Preencha o formulário abaixo com suas informações relacionadas à saúde ocular.</p>
      </div>
      <div className='formulario-card'>
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Tempo de Exposição (horas por dia na tela):
            <input
              type="number"
              name="tempo_exposicao"
              value={dadosUsuario.tempo_exposicao}
              onChange={handleChange}
            />
          </label>
          <label>
            Intervalos de Descanso (proporção):
            <input
              type="number"
              name="intervalos_descanso"
              value={dadosUsuario.intervalos_descanso}
              onChange={handleChange}
            />
          </label>
          <label>
            Brilho da Tela (0-100):
            <input
              type="number"
              name="brilho_tela"
              value={dadosUsuario.brilho_tela}
              onChange={handleChange}
            />
          </label>
          <label>
            Distância de Visualização (centímetros):
            <input
              type="number"
              name="distancia_visualizacao"
              value={dadosUsuario.distancia_visualizacao}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Form;