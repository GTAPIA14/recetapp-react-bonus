import RecetaCard from "./components/RecetaCard";
import { recetas } from "./data/recetas";

function App() {
  return (
    <>
      <h1>RecetApp</h1>

      <RecetaCard
        nombre={recetas[0].nombre}
        origen={recetas[0].origen}
        porciones={recetas[0].porciones}
        categoria={recetas[0].categoria}
        descripcion={recetas[0].descripcion}
        ingredientes={recetas[0].ingredientes}
      />
    </>
  );
}

export default App;