import ProductList from "./ProductList";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <div>

        <Navbar/>

        <header className="header">
      <h1>QuickCart</h1>
       </header>
      <main id="products">
        <ProductList />
      </main>

      <Footer/>

    </div>
  );
}

export default App;