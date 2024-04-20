import React, { useState } from 'react';
import "./form.scss"

const Form = () => {
  const [dadosUsuario, setDadosUsuario] = useState({
    tempo_exposicao: 2,
    intervalos_descanso: 0.3,
    brilho_tela: 30,
    distancia_visualizacao: 60,
    habitos_saude_ocular: 'Bons'
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
    // Aqui você pode enviar os dados para o backend, por exemplo, usando fetch ou axios
    console.log(dadosUsuario);
  };

  return (
    <div className='formulario-container'>
      <div className='formulario-intro'>
        <h2>Bem-vindo ao Formulário de Saúde Ocular</h2>
        <p>Preencha o formulário abaixo com suas informações relacionadas à saúde ocular.</p>
      </div>
      <div className='formulario-card'>
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Tempo de Exposição (horas por dia):
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
          <label>
            Hábitos de Saúde Ocular:
            <select
              name="habitos_saude_ocular"
              value={dadosUsuario.habitos_saude_ocular}
              onChange={handleChange}
            >
              <option value="Bons">Bons</option>
              <option value="Ruins">Ruins</option>
            </select>
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Form;