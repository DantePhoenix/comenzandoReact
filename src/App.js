import "./App.css";
//import {Testimonio} from "./componentes/Testimonio";   // exportacion nombrada
import Testimonio from "./componentes/Testimonio"; // exportacion por defecto


function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Here is what our alumn say about freeCodeCamp:</h1>
        <Testimonio
          imagen= "emma.png"
          alt="Foto de Emma"
          title="Foto de Emma"
          nombre="Emma Bostian"
          pais="Sweden"
          profesion="Software Engineer"
          empresa="Spotify"
          testimonio="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidenceI needed to land my dream job as a software engineer at Spotify."
        ></Testimonio>
        <Testimonio
          imagen="sarah.png"
          alt="Foto de Sarah"
          title="Sarah"
          nombre="Sarah Chima"
          pais="Nigeria"
          profesion="Software Engineer"
          empresa="Chat Desk"
          testimonio="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
        ></Testimonio>
        <Testimonio
          imagen="shawn.png"
          alt="Foto de Shawn"
          title="Shawn"
          nombre="Shawn Wang"
          pais="Singapore"
          profesion="Software Engineer"
          empresa="Amazon"
          testimonio="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
        ></Testimonio>
      </div>
    </div>
  );
}

export default App;
