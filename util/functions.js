// custom url generator for dynamic image elemnents (school, activities)
export const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
}

export function decodeHTMLEntities (html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}