export const numberToMonth = (numeroMes) => {
    const nombresMeses = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
  
  
    if (numeroMes >= 0 && numeroMes < nombresMeses.length) {
      return nombresMeses[numeroMes];
    } else {
      return null;
    }
  };