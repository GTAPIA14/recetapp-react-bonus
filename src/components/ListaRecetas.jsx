import PropTypes from "prop-types";
import RecetaCard from "./RecetaCard";

function ListaRecetas({ recetas }) {
  return (
    <>
      {recetas.map((receta) => (
        <RecetaCard
          key={receta.id}
          nombre={receta.nombre}
          origen={receta.origen}
          porciones={receta.porciones}
          categoria={receta.categoria}
          descripcion={receta.descripcion}
          ingredientes={receta.ingredientes}
          esVegetariana={receta.esVegetariana}
        />
      ))}
    </>
  );
}

ListaRecetas.propTypes = {
  recetas: PropTypes.array.isRequired,
};

export default ListaRecetas;