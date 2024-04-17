import "./app.scss"
import Navbar from "./components/navbar/Navbar,";


const App = () => {
    return <div>
      <section id="HomePage">
        <Navbar/>
      </section>
      <section id="Services">Parallax</section>
      <section>Services</section>
      <section id="Portfolio">Hello</section>
      <section>Portifolio</section>
      <section id="Contact">Contact</section>

    </div>;
  };

  export default App;