import { Routes, Route } from "react-router-dom";
import { Container } from "reactstrap";
import { Shop } from "./pages/Shop";
import { About } from "./pages/About";
import { Cart } from "./pages/Cart";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar />
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Container>
    </>
  );
}

export default App;