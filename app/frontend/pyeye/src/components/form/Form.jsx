import React, { useState } from 'react';
import "./form.scss"

const Form = ({handleApiResponse}) => {
  const [dadosUsuario, setDadosUsuario] = useState({
    user_name: "",
    tempo_exposicao: 0,
    intervalos_descanso: 0,
    brilho_tela: 0,
    distancia_visualizacao: 0,
  });


  const [botaoDesabilitado, setBotaoDesabilitado] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDadosUsuario({
      ...dadosUsuario,
      [name]: value
    });
  };

// http://127.0.0.1:8000/
// http://34.238.154.232:8000/v1/received/pyeye
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://34.238.154.232:8000/v1/received/pyeye", {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_name: dadosUsuario.user_name,
        time_exposed: parseInt(dadosUsuario.tempo_exposicao),
        rest_time: parseInt(dadosUsuario.intervalos_descanso),
        shine_screen: parseInt(dadosUsuario.brilho_tela),
        distance_screen: parseInt(dadosUsuario.distancia_visualizacao)
      }),
    })
    .then(response => {
      handleApiResponse(response);
      if (response.status === 200){
        setBotaoDesabilitado(true);
      } else if (response.status === 400) {
        return response.json();
      } else {
        throw new Error('Erro na solicitação: Valor fora do permitido');
      }
    })
    .then(data => {
      if (data) {
        setErrorMessage("Erro ao enviar os dados: " + data.message);

        setTimeout(()=> {
          setErrorMessage(null);
        }, 5000);
      }
    })
    .catch((error) =>{
      setErrorMessage("" + error.message);

      setTimeout(()=> {
        setErrorMessage(null);
      }, 5000);
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
        <p>Preencha o formulário abaixo com suas informações para obter seu "Score".</p>
      </div>
      <div className='formulario-card'>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Insira seu nome:
            <input
              type="text"
              name="user_name"
              value={dadosUsuario.user_name}
              onChange={handleChange}
            />
          </label>
          <label>
            Tempo de Exposição (Horas por dia em frente a tela de 1-12):
            <input
              type="number"
              name="tempo_exposicao"
              value={dadosUsuario.tempo_exposicao}
              onChange={handleChange}
            />
          </label>
          <label>
            Intervalos de Descanso (Quantas pausas a cada 1 hora de 1-5):
            <input
              type="text"
              name="intervalos_descanso"
              value={dadosUsuario.intervalos_descanso}
              onChange={handleChange}
            />
          </label>
          <label>
            Nvel de brilho da sua tela (0-100):
            <input
              type="number"
              name="brilho_tela"
              value={dadosUsuario.brilho_tela}
              onChange={handleChange}
            />
          </label>
          <label>
            Distância de Visualização (centímetros de 1-100):
            <input
              type="number"
              name="distancia_visualizacao"
              value={dadosUsuario.distancia_visualizacao}
              onChange={handleChange}
            />
          </label>
          <button type="submit" disabled={botaoDesabilitado}>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Form;