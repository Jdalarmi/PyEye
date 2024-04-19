import "./app.scss"
import Cursor from "./components/Cursor/Cursor";
import Navbar from "./components/navbar/Navbar,";
import Parallax from "./components/parallax/Parallax"
const App = () => {
    return <div>
        <Cursor/>
      <section id="HomePage">
        <Navbar/>
        <Parallax/>
      </section>
      <section id="Portfolio">Hello</section>
      <section id="Contact">Contact</section>

    </div>;
  };

  export default App;