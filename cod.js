function calcularProbabilidad(partidasJugadas, partidasGanadas, partidasPerdidas, partidasEmpatadas) {
    const probabilidadGanar = (partidasGanadas / partidasJugadas) * 100;
    const probabilidadPerder = (partidasPerdidas / partidasJugadas) * 100;
  
    return {
      partidasJugadas,
      probabilidadGanar: probabilidadGanar.toFixed(2),
      probabilidadPerder: probabilidadPerder.toFixed(2)
    };
  }
  
  function calcular() {
    const partidasJugadasInput = document.getElementById("partidasJugadas");
    const partidasGanadasInput = document.getElementById("partidasGanadas");
    const partidasPerdidasInput = document.getElementById("partidasPerdidas");
    const partidasEmpatadasInput = document.getElementById("partidasEmpatadas");
  
    const tablaResultados = document.getElementById("tablaResultados");
  
    const partidasJugadas = parseInt(partidasJugadasInput.value);
    const partidasGanadas = parseInt(partidasGanadasInput.value);
    const partidasPerdidas = parseInt(partidasPerdidasInput.value);
    const partidasEmpatadas = parseInt(partidasEmpatadasInput.value);
  
    if (
      !isNaN(partidasJugadas) &&
      partidasJugadas > 0 &&
      !isNaN(partidasGanadas) &&
      partidasGanadas >= 0 &&
      !isNaN(partidasPerdidas) &&
      partidasPerdidas >= 0 &&
      !isNaN(partidasEmpatadas) &&
      partidasEmpatadas >= 0
    ) {
      const resultados = calcularProbabilidad(
        partidasJugadas,
        partidasGanadas,
        partidasPerdidas,
        partidasEmpatadas
      );
  
      tablaResultados.innerHTML = `
        <tr>
          <th>Número de partidas jugadas</th>
          <th>Probabilidad de ganar</th>
          <th>Probabilidad de perder</th>
        </tr>
        <tr>
          <td>${resultados.partidasJugadas}</td>
          <td>${resultados.probabilidadGanar}%</td>
          <td>${resultados.probabilidadPerder}%</td>
        </tr>
      `;
    }
  }
  