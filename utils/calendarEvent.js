export const calendarEvent = (timestamp, onlyDate) => {
  let format = new Date(timestamp);
  let dia = format.getDate();
  let mes = format.getMonth() + 1;
  let anio = format.getFullYear();
  let mesFormateado = mes < 10 ? `0${mes}` : mes;
  let diaFormateado = dia < 10 ? `0${dia}` : dia;
  let conf = `${anio}-${mesFormateado}-${diaFormateado}`;

  console.log(conf);

  if (onlyDate) {
    return conf;
  } else {
    // Retorna directamente el objeto con la fecha formateada como clave
    return {
      [conf]: {
        selected: true,
        marked: true,
        selectedColor: "red",
        dotColor: "white",
        disableTouchEvent: true,
        consumoDelDia: 1,
      },
    };
  }
};
