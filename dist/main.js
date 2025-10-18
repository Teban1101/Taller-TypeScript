import { series } from "./data.js";
export class SeriesTable {
    constructor(series) {
        this.series = series;
    }
    // Método para renderizar la tabla
    renderTable() {
        let tableHTML = `
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Channel</th>
                        <th scope="col">Seasons</th>
                    </tr>
                </thead>
                <tbody>
        `;
        // Agregar filas de series
        this.series.forEach(serie => {
            tableHTML += `
                <tr>
                    <th scope="row">${serie.id}</th>
                    <td><a href="#" class="serie-link">${serie.name}</a></td>
                    <td>${serie.channel}</td>
                    <td>${serie.seasons}</td>
                </tr>
            `;
        });
        tableHTML += `
                </tbody>
            </table>
        `;
        // Agregar el promedio de temporadas
        const average = this.calculateSeasonsAverage();
        tableHTML += `<p><strong>Seasons average: ${average}</strong></p>`;
        return tableHTML;
    }
    // Método para calcular el promedio de temporadas
    calculateSeasonsAverage() {
        const totalSeasons = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
        return Math.round(totalSeasons / this.series.length);
    }
}
// Función principal para inicializar la aplicación
function main() {
    const seriesTable = new SeriesTable(series);
    const tableContainer = document.getElementById('series-table');
    if (tableContainer) {
        tableContainer.innerHTML = seriesTable.renderTable();
    }
}
// Ejecutar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', main);
//# sourceMappingURL=main.js.map