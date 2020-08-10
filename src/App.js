import React, { useState } from "react";
import Header from "./components/header/index";
import Formulario from "./components/formulario/index";
import "./App.css";
import "./tools/bootstrap.min.css";
import Carta from "./components/carta";
import Footer from "./components/footer/Footer";
//import CartaNoEncontrada from "./components/cartaNoEncontrada";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [listaCartas, setListaCartas] = useState([]);
  const [nombre, setNombre] = useState("Laguna");
  //const [cartaNoEncontrada, setCartaNoEncontrada] = useState(false);
  const limpiarLista = () => {
    setListaCartas([]);
  };
  const buscarNombre = async (nomb) => {
    setNombre(nomb);
    setListaCartas([]);

    try {
      const res = await fetch(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${nomb}`
      );

      const objeto = await res.json();
      if (res.status <= 300 && res.status <= 200) {
        /* setCartaNoEncontrada(false); */

        setListaCartas(objeto.data);
        actualizarListaCartas();
        notificarCartaEncontrada(nomb);
      } else {
        /* setCartaNoEncontrada(true); */
        notificarErrorCarta(nomb);
      }
    } catch (error) {
      /* setCartaNoEncontrada(true); */
      notificarErrorCarta(nomb);
      console.log(error);
    }
  };
  const borrarCarta = (carta) => {
    const nuevaLista = listaCartas.filter((c) => {
      return c !== carta;
    });
    setListaCartas(nuevaLista);
    console.log(`borraste la carta: ${carta.name}`);
  };
  const actualizarListaCartas = () => {};
  const notificarErrorCarta = (n) => {
    toast.error("Carta '" + n + "' no encontrada", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const notificarCartaEncontrada = (n) => {
    toast.success("Carta '" + n + "'  encontrada", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  /* const errorCartaNoEncontrada = () => {
    return cartaNoEncontrada ? (
      <CartaNoEncontrada nombre={nombre} className="mr-5"></CartaNoEncontrada>
    ) : (
      <h4>Obtenga todos los detalles de sus cartas!</h4>
    );
  }; */

  return (
    <div className="App">
      <Header />
      <section className="container">
        <article className="cointeiner row">
          <Formulario
            cambiarNombre={buscarNombre}
            limpiarLista={limpiarLista}
          />
          {/* errorCartaNoEncontrada() */}
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </article>
        <article className="container row">
          {listaCartas.map((carta) => (
            <Carta
              info={carta}
              borrarCarta={borrarCarta}
              key={carta.name}
              className="container col-sm p-1 m-1"
            ></Carta>
          ))}
        </article>
      </section>
      <Footer className="mt-auto" />
    </div>
  );
}

export default App;
