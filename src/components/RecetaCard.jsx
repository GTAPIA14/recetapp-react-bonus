import PropTypes from "prop-types";

function RecetaCard({
  nombre,
  origen,
  porciones,
  categoria,
  descripcion,
  ingredientes,
  esVegetariana,
}) {
  const colores = {
    Entrada: "#4CAF50",
    Fondo: "#2196F3",
    Postre: "#FF9800",
  };

  return (
    <div
      style={{
        border: esVegetariana
          ? "4px solid #2E7D32"
          : `3px solid ${colores[categoria]}`,
        borderRadius: "10px",
        padding: "15px",
        margin: "20px",
        maxWidth: "500px",
        backgroundColor: esVegetariana ? "#E8F5E9" : "white",
      }}
    >
      <h2>
        {nombre}

        {esVegetariana && (
          <span
            style={{
              marginLeft: "10px",
              backgroundColor: "#2E7D32",
              color: "white",
              padding: "4px 8px",
              borderRadius: "5px",
              fontSize: "14px",
            }}
          >
            VEG
          </span>
        )}
      </h2>

      <p>
        <strong>Origen:</strong> {origen}
      </p>

      <p>
        <strong>Porciones:</strong> {porciones}
      </p>

      <p>
        <strong>Categoría:</strong>{" "}
        <span
          style={{
            backgroundColor: colores[categoria],
            color: "white",
            padding: "4px 8px",
            borderRadius: "5px",
          }}
        >
          {categoria}
        </span>
      </p>

      <p>
        <strong>Descripción:</strong> {descripcion}
      </p>

      <strong>Ingredientes</strong>

      <ul>
        {ingredientes.map((ingrediente) => (
          <li key={ingrediente}>{ingrediente}</li>
        ))}
      </ul>
    </div>
  );
}

RecetaCard.propTypes = {
  nombre: PropTypes.string,
  origen: PropTypes.string,
  porciones: PropTypes.number,
  categoria: PropTypes.string,
  descripcion: PropTypes.string,
  ingredientes: PropTypes.arrayOf(PropTypes.string),
  esVegetariana: PropTypes.bool,
};

RecetaCard.defaultProps = {
  nombre: "Sin nombre",
  origen: "Desconocido",
  porciones: 0,
  categoria: "Entrada",
  descripcion: "Sin descripción",
  ingredientes: [],
  esVegetariana: false,
};

export default RecetaCard;