import Navbar from "./components/Navbar";
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

      <footer></footer>
    </>
  );
};

export default App;
