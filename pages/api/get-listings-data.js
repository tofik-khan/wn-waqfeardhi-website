export const getData =  () => {
    const data = require("/content/listings.json");
    //Todo: Convert data from nested arrays to a key/valued array of objects
    return data.slice(1); //remove headings and only return the listings
}


export const TITLE = 0;
export const SUBTITLE = 1;
export const DURATION = 2;
export const AUDIENCE = 3;
export const DESCRIPTION = 4;
export const SLUG = 5;
export const IMAGE = 6;
export const PUBLISHED = 7;

