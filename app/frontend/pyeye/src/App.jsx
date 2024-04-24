import "./app.scss";
import React, { useState, useEffect } from 'react';
import Cursor from "./components/Cursor/Cursor";
import Form from "./components/form/Form";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";

const App = () => {
    const [apiResponse, setApiResponse] = useState(null);
    const [blockContact, setBlockContact] = useState(true);

    useEffect(() => {
        if (!blockContact) {
            window.scrollTo({
                top: document.getElementById("Contact").offsetTop,
                behavior: "smooth"
            });
        }
    }, [blockContact]);

    const handleApiResponse = (response) => {
        if (response.status === 200) {
            response.json() // Convertendo a resposta para JSON
                .then(data => {
                    setBlockContact(false);
                    setApiResponse(data);
                })
                .catch(error => {
                    console.error("Erro ao processar resposta JSON:", error);
                });
        } else {
            setBlockContact(true);
        }
    };

    return (
        <div>
            <Cursor/>
            <section id="HomePage">
                <Navbar/>
                <Parallax/>
            </section>
            <section id="Portfolio">
                <Form handleApiResponse={handleApiResponse}/>
            </section>
            <section id="Contact" style={{ display: blockContact ? 'none' : 'block' }}>
                <br />
                <br />
                <h2>Obrigado pela sua resposta!</h2>
                <br />
                <p>Suas informações serão processadas pelo sistema e contribuirão para geração de análises futuras com modelo preditivos.</p>
                <br />
                <p>Relacionado a comportamentos referente ao uso de telas que tendem causar impacto direto na visão.</p>
                <br />
                <br />
                {apiResponse && (
                    <div id="result-card">
                        <div className="card-content">
                            <div className="value">Seu Score:</div>
                            <hr />
                            <h2>{apiResponse.Score}</h2>
                            <div className="details">Detalhes sobre seu Score:</div>
                            <hr />
                            <p>{apiResponse.Description}</p>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
};

export default App;
