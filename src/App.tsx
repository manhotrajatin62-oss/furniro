import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <>
      <header>
        <Navbar/>
      </header>

      <main>
        <Home/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default App;
