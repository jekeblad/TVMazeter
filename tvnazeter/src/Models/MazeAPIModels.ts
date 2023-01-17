export module MazeSearch {

    export interface Schedule {
        time: string;
        days: string[];
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
        language?: string;
        genres?: string[];
        status?: string;
        runtime?: any;
        averageRuntime?: number;
        premiered?: string;
        ended?: any;
        officialSite?: string;
        schedule?: Schedule;
        rating?: Rating;
        weight?: number;
        network?: any;
        webChannel: WebChannel;
        dvdCountry?: any;
        externals?: Externals;
        image: Image;
        summary: string;
        updated?: number;
        _links: Links;
        _embedded?: Embedded;
    }

    export interface SearchItem {
        score: number;
        show: Show;
    }

    export interface Schedule {
        time: string;
        days: string[];
    }

    export interface Rating {
        average: number;
    }

    export interface WebChannel {
        id: number;
        name: string;
        country?: any;
        officialSite: string;
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

    export interface Country {
        name: string;
        code: string;
        timezone: string;
    }

    export interface Image2 {
        medium: string;
        original: string;
    }

    export interface Self2 {
        href: string;
    }

    export interface Links2 {
        self: Self2;
    }

    export interface Person {
        id: number;
        url: string;
        name: string;
        country: Country;
        birthday: string;
        deathday?: any;
        gender: string;
        image: Image2;
        updated: number;
        _links: Links2;
    }

    export interface Self3 {
        href: string;
    }

    export interface Links3 {
        self: Self3;
    }

    export interface Character {
        id: number;
        url: string;
        name: string;
        image?: any;
        _links: Links3;
    }

    export interface Cast {
        person: Person;
        character: Character;
        self: boolean;
        voice: boolean;
    }

    export interface Embedded {
        cast: Cast[];
    }

    

}

