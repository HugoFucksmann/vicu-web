import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Home from "./pages/home";

function App() {
  const [inicio, setInicio] = useState(true);

  if (inicio)
    return (
      <div style={styles.containerInicio}>
        <div style={styles.inicioBtn} onClick={() => setInicio(false)}>
          <span>Fucksmann Rottam</span>

          <span>Iniciar</span>
        </div>
      </div>
    );

  return <Home />;
}

const styles = {
  containerInicio: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  },
  inicioBtn: {
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
};

export default App;
