import Modal from "react-modal";

import { BrowserRouter } from "react-router-dom";

import "../styles/app.scss";

import Navbar from "../components/navigation/Navbar";
import Routing from "../components/routing/Routing";
import Footer from "../components/pages/Footer";

export default function App() {
  Modal.setAppElement("#root");
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routing />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
