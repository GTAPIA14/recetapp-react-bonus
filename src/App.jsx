import { useState } from "react";

import { recetas } from "./data/recetas";

import ListaRecetas from "./components/ListaRecetas";
import FiltroCategoria from "./components/FiltroCategoria";

function App() {
  const [filtro, setFiltro] = useState("Todas");
  const [busqueda, setBusqueda] = useState("");

  const textoBusqueda = busqueda.trim().toLowerCase().slice(0, 50);

  const recetasFiltradas = recetas.filter((receta) => {
    const coincideCategoria =
      filtro === "Todas" || receta.categoria === filtro;

    const coincideNombre = receta.nombre
      .toLowerCase()
      .includes(textoBusqueda);

    return coincideCategoria && coincideNombre;
  });

  const totalVegetarianas = recetas.filter(
    (receta) => receta.esVegetariana
  ).length;

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>RecetApp</h1>

      <h2
        style={{
          textAlign: "center",
          color: "#2E7D32",
        }}
      >
        Recetas vegetarianas: {totalVegetarianas}
      </h2>

      <FiltroCategoria
        filtro={filtro}
        setFiltro={setFiltro}
      />

      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Buscar receta..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          maxLength={50}
          style={{
            padding: "10px",
            width: "300px",
          }}
        />
      </div>

      {recetasFiltradas.length > 0 ? (
        <ListaRecetas recetas={recetasFiltradas} />
      ) : (
        <h2
          style={{
            textAlign: "center",
            color: "red",
          }}
        >
          No hay recetas que coincidan
        </h2>
      )}
    </div>
  );
}

export default App;