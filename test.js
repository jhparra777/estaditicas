const { promedio, desviacionEstandar } = require('./estadisticas.js');
const { generarGrafico } = require('./grafico.js');

const datos = [10, 20, 30, 40, 50];

console.log('Promedio:', promedio(datos));
console.log('Desviación Estándar:', desviacionEstandar(datos));

generarGrafico('grafico.png', ['A', 'B', 'C', 'D', 'E'], datos).then(() => {
      console.log('Grafico Generado');
});