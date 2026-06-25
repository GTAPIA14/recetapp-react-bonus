import ListaRecetas from "./components/ListaRecetas";
import { recetas } from "./data/recetas";

function App() {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        RecetApp
      </h1>

      <ListaRecetas recetas={recetas} />
    </>
  );
}

export default App;