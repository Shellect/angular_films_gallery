export type FilmsSearchResponse = {
    Response: "True" | "False",
    Error?: string,
    Search?: Film[],
    totalResults?: string
};

export type Film = {
    "Title": string,
    "Year": string,
    "imdbID": string,
    "Type": string,
    "Poster": string
};