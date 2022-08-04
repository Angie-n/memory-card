function importAll(r) {
    return r.keys().map(r);
}
  
const images = importAll(require.context('../assets/images/', true, /\.(png|jpe?g|svg|webp)$/));
let cards = [];

const Card = (src, description, alreadySelected) => {
    return {src, description, alreadySelected};
}

const createCards = (() => {
    images.forEach(img => {
        let indexOfStaticMedia = img.indexOf("static/media");
        let imgNoStaticMedia = img.substring(indexOfStaticMedia + 13);
        let endOfName = imgNoStaticMedia.indexOf(".");
        let description = imgNoStaticMedia.substring(0, 1).toUpperCase() + imgNoStaticMedia.substring(1, endOfName);
        cards.push(Card(img, description, false));
    });
    return cards;
})();

export {cards}

