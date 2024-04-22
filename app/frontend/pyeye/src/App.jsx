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
            setBlockContact(false);
            setApiResponse(response);
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
                <h2>Confira abaixo seu "Score" e detalhes sobre sua pontuação:</h2>
            </section>
        </div>
    );
};

export default App;
