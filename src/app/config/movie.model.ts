export interface MovieTile {
    cols: number;
    rows: number;
    details: MovieDetails;
}

export interface MovieDetails {
    '@type'?: string;
    id: string;
    image?: MovieDetailsImage;
    runningTimeInMinutes: number;
    nextEpisode: string;
    numberOfEpisodes?: number;
    seriesEndYear: number;
    seriesStartYear: number;
    title: string;
    titleType?: string;
    year: number;
}

export interface MovieDetailsImage {
    "height"?: number;
    "id": string;
    "url": string;
    "width"?: number;
}