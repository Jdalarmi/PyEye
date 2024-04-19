import "./app.scss"
import Navbar from "./components/navbar/Navbar,";
import Parallax from "./components/parallax/Parallax"
const App = () => {
    return <div>
      <section id="HomePage">
        <Navbar/>
        <Parallax/>
      </section>
      <section id="Portfolio">Hello</section>
      <section id="Contact">Contact</section>

    </div>;
  };

  export default App;