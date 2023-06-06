import React from "react";
import "../hojasDeEstilos/TestimonioCss.css"; // La importacion de un archivo es diferente a la importacion de un componente (no usa "from")


function Testimonio(props) {//colocandole los props a la funcion exportacion nombrada:   export function Testimonio
  return (
  
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../imagenes/${props.imagen}`)}
        alt={props.alt} // El texto alternativo siempre es requerido
        title={props.title}
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> in {props.pais}
        </p>
        <p className="profesion-testimonio">
          {props.profesion} at <strong>{props.empresa}</strong>
        </p>
        <p className="texto-testimonio">{props.testimonio}</p>
      </div>
    </div>
  );
  
}

export default Testimonio; // exportacion por defecto