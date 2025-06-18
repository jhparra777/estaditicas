function promedio(arr) {
    if (!arr || arr.length === 0) return 0;
        const sum = arr.reduce((acc, val) => acc + val, 0);
    return sum / arr.length;
}

function desviacionEstandar(arr) {
    if (!arr || arr.length === 0) return 0;
        const mean = promedio(arr);
        const squareDiffs = arr.map(val => Math.pow(val - mean, 2));
        const avgSquareDiff = promedio(squareDiffs);
    return Math.sqrt(avgSquareDiff);
}

module.exports = { promedio, desviacionEstandar };