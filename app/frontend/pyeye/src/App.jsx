import "./app.scss"
import Cursor from "./components/Cursor/Cursor";
import Form from "./components/form/Form";
import Navbar from "./components/navbar/Navbar,";
import Parallax from "./components/parallax/Parallax"
const App = () => {
    return <div>
        <Cursor/>
      <section id="HomePage">
        <Navbar/>
        <Parallax/>
      </section>
      <section id="Portfolio"><Form/></section>
      <section id="Contact">
        <h2>Obrigado pela sua resposta!</h2>
        <p>Sua informações seram processadas pelo sistema e contribuiram para geração de analíses.</p>
      </section>

    </div>;
  };

  export default App;