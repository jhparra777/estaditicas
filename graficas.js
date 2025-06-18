const { ChartJSNodeCanvas } = require('chartjs-node-canvas');

async function generarGrafico(nombreArchivo, label, data) {
    const width = 800;
    const height = 600;
    const canvasRenderService = new ChartJSNodeCanvas({ width, height });

    const configuration = {
        type: 'bar',
        data: {
            labels: label,
            datasets: [{
                label: 'Datos',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    const imageBuffer = await canvasRenderService.renderToBuffer(configuration);
    const fs = require('fs').promises;
    await fs.writeFileSync(nombreArchivo, imageBuffer);
}

module.exports = { generarGrafico };