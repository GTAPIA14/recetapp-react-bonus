import PropTypes from "prop-types";

function FiltroCategoria({ filtro, setFiltro }) {
  return (
    <div style={{ margin: "20px 0", textAlign: "center" }}>
      <button onClick={() => setFiltro("Todas")}>Todas</button>

      <button onClick={() => setFiltro("Entrada")}>
        Entrada
      </button>

      <button onClick={() => setFiltro("Fondo")}>
        Fondo
      </button>

      <button onClick={() => setFiltro("Postre")}>
        Postre
      </button>
    </div>
  );
}

FiltroCategoria.propTypes = {
  filtro: PropTypes.string.isRequired,
  setFiltro: PropTypes.func.isRequired,
};

export default FiltroCategoria;