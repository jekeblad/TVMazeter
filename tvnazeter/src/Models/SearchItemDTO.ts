export module MazeSearch {

    export interface Schedule {
        time: string;
        days: string[];
    }

    export interface Rating {
        average?: any;
    }

    export interface Country {
        name: string;
        code: string;
        timezone: string;
    }

    export interface Network {
        id: number;
        name: string;
        country: Country;
        officialSite?: any;
    }

    export interface Externals {
        tvrage?: any;
        thetvdb: number;
        imdb: string;
    }

    export interface Image {
        medium: string;
        original: string;
    }

    export interface Self {
        href: string;
    }

    export interface Previousepisode {
        href: string;
    }

    export interface Links {
        self: Self;
        previousepisode: Previousepisode;
    }

    export interface Show {
        id: number;
        url: string;
        name: string;
        type: string;
        language?: any;
        genres: string[];
        status: string;
        runtime: number;
        averageRuntime: number;
        premiered: string;
        ended?: any;
        officialSite?: any;
        schedule: Schedule;
        rating: Rating;
        weight: number;
        network: Network;
        webChannel?: any;
        dvdCountry?: any;
        externals: Externals;
        image: Image;
        summary: string;
        updated: number;
        _links: Links;
    }

    export interface SearchItem {
        score: number;
        show: Show;
    }

}

