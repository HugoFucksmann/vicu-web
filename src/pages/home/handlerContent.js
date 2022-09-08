import { useContext } from "react";
import { VicuContext } from "../../context/vicuContext";
import ProyectosContent from "./proyectosContent";

const HandlerContent = () => {
  const { itemSelect } = useContext(VicuContext);

  switch (itemSelect) {
    case "Proyectos":
      return <ProyectosContent />;
      break;

    default:
      break;
  }
};

export default HandlerContent;
