import { Serie } from "./serie.js";
export declare class SeriesTable {
    private series;
    constructor(series: Serie[]);
    renderTable(): string;
    private calculateSeasonsAverage;
    getSerieById(id: number): Serie | undefined;
    renderSerieDetail(serie: Serie): string;
}
//# sourceMappingURL=main.d.ts.map