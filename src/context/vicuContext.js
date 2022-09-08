import React, { createContext, Component } from "react";
import { dataProyectos } from "./dataProyectos";

export const VicuContext = createContext();

class VicuProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ready: false,
      itemSelect: "Proyectos",
      proyecto: null,
    };
  }

  async componentDidMount() {
    let path = window.location.pathname;
    if (path !== "/") this.setState({ ready: true });
  }

  setReady = () => {
    this.setState({ ready: true });
  };

  handlerItem = (item) => {
    this.setState({ itemSelect: item });
  };

  handlerConProyect = () => {
    let proyectName = window.location.pathname.split("/");
    let proyecto = null;

    dataProyectos.map((obj, i) => {
      if (obj.name === proyectName[2]) proyecto = obj;
    });

    this.setState({
      proyecto: proyecto,
    });
  };

  render() {
    return (
      <VicuContext.Provider
        value={{
          ...this.state,
          setReady: this.setReady,
          handlerItem: this.handlerItem,
          handlerConProyect: this.handlerConProyect,
        }}
      >
        {this.props.children}
      </VicuContext.Provider>
    );
  }
}

export default VicuProvider;
