import { Serie } from "./serie.js";
import { series } from "./data.js";

export class SeriesTable {
    private series: Serie[];

    constructor(series: Serie[]) {
        this.series = series;
    }

    // Método para renderizar la tabla
    renderTable(): string {
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
                    <td><a href="#" class="serie-link" data-serie-id="${serie.id}">${serie.name}</a></td>
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
    private calculateSeasonsAverage(): number {
        const totalSeasons = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
        return Math.round(totalSeasons / this.series.length);
    }

    // Método para obtener una serie por ID
    getSerieById(id: number): Serie | undefined {
        return this.series.find(serie => serie.id === id);
    }

    // Método para renderizar el detalle de una serie
    renderSerieDetail(serie: Serie): string {
        return `
            <div class="card">
                <img src="${serie.image}" class="card-img-top" alt="${serie.name}" style="height: 250px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">${serie.name}</h5>
                    <p class="card-text">${serie.description}</p>
                    <a href="${serie.website}" class="btn btn-primary" target="_blank">Visit Website</a>
                </div>
            </div>
        `;
    }
}

// Función principal para inicializar la aplicación
function main(): void {
    const seriesTable = new SeriesTable(series);
    const tableContainer = document.getElementById('series-table');
    const detailContainer = document.getElementById('series-detail');
    
    if (tableContainer) {
        tableContainer.innerHTML = seriesTable.renderTable();
        
        // Agregar event listeners para los links de las series
        const serieLinks = document.querySelectorAll('.serie-link');
        serieLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const serieId = parseInt((event.target as HTMLElement).getAttribute('data-serie-id') || '0');
                const serie = seriesTable.getSerieById(serieId);
                
                if (serie && detailContainer) {
                    detailContainer.innerHTML = seriesTable.renderSerieDetail(serie);
                }
            });
        });
    }
}

// Ejecutar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', main);