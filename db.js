// database.js
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('dias-sobrio.db');

const setupDatabase = () => {
  db.transaction((tx) => {
    // Tabla para almacenar los días de consumo
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS consumo_dias (id INTEGER PRIMARY KEY AUTOINCREMENT, fecha TEXT UNIQUE, veces INTEGER);',
      [],
      (_, result) => {
        console.log('Tabla de consumo_dias creada con éxito');
      },
      (_, error) => {
        console.error('Error al crear la tabla de consumo_dias', error);
      }
    );

    // Tabla para almacenar las horas de consumo para cada día
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS consumo_horas (id INTEGER PRIMARY KEY AUTOINCREMENT, id_fecha INTEGER, hora TEXT, FOREIGN KEY (id_fecha) REFERENCES consumo_dias(id));',
      [],
      (_, result) => {
        console.log('Tabla de consumo_horas creada con éxito');
      },
      (_, error) => {
        console.error('Error al crear la tabla de consumo_horas', error);
      }
    );
  });
};

const agregarFechaConsumo = async (fecha) => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          'INSERT INTO consumo_dias (fecha, veces) VALUES (?, ?);',
          [fecha, 1],
          (_, result) => {
            resolve(result.insertId);
            
          },
          (_, error) => {
            reject(error);
          }
        );
      },
      (error) => {
        reject(error);
      },
      () => {
        // Transacción completada
      }
    );
  });
};

const agregarHoraConsumo = async (idFecha, hora) => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          // Verificar si ya existe una fecha para el día dado
          tx.executeSql(
            'SELECT * FROM consumo_horas WHERE id_fecha = ?;',
            [idFecha],
            (_, result) => {
              if (result.rows.length > 0) {
                // Si ya existe, actualizar la lista de horas
                const horasAntiguas = result.rows.item(0).hora || ''; // Obtener las horas antiguas (puede ser null)
                const nuevasHoras = horasAntiguas ? `${horasAntiguas},${hora}` : hora;
  
                tx.executeSql(
                  'UPDATE consumo_horas SET hora = ? WHERE id_fecha = ?;',
                  [nuevasHoras, idFecha],
                  (_, resultUpdate) => {
                    resolve(resultUpdate.insertId);
                  },
                  (_, errorUpdate) => {
                    reject(errorUpdate);
                  }
                );
              } else {
                // Si no existe, insertar una nueva fila
                tx.executeSql(
                  'INSERT INTO consumo_horas (id_fecha, hora) VALUES (?, ?);',
                  [idFecha, hora],
                  (_, resultInsert) => {
                    resolve(resultInsert.insertId);
                  },
                  (_, errorInsert) => {
                    reject(errorInsert);
                  }
                );
              }
            },
            (_, errorSelect) => {
              reject(errorSelect);
            }
          );
        },
        (error) => {
          reject(error);
        },
        () => {
          // Transacción completada
        }
      );
    });
  };
  

const obtenerTodasFechasConsumo = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          'SELECT * FROM consumo_dias;',
          [],
          (_, result) => {
            resolve(result.rows._array);
          },
          (_, error) => {
            reject(error);
          }
        );
      },
      (error) => {
        reject(error);
      }
    );
  });
};

const obtenerHorasDeFecha = async (idFecha) => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          'SELECT hora FROM consumo_horas WHERE id_fecha = ?;',
          [idFecha],
          (_, result) => {
            resolve(result.rows._array);
          },
          (_, error) => {
            reject(error);
          }
        );
      },
      (error) => {
        reject(error);
      }
    );
  });
};

const ultimoConsumo = async () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            'SELECT * FROM consumo_dias ORDER BY id DESC LIMIT 1;',
            [],
            (_, result) => {
              if (result.rows.length > 0) {
                const ultimoRegistro = result.rows.item(0);
                resolve(ultimoRegistro);
              } else {
                resolve(null); // No hay registros en la tabla
              }
            },
            (_, error) => {
              reject(error);
            }
          );
        },
        (error) => {
          reject(error);
        }
      );
    });
  };
  

export { setupDatabase, agregarFechaConsumo, agregarHoraConsumo, obtenerTodasFechasConsumo, ultimoConsumo, obtenerHorasDeFecha };
