import originalImages from '../data';

class Images {
  constructor(images, count) {
    this.original = images.icons;
    this.cardCount = count;
    this.list = [];
  }

  init() {
    this.list = this.generateRandomImages(this.original, this.cardCount);
  }

  get imagesList() {
    return this.list;
  }

  shuffleImages(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  generateRandomImages(array, n) {
    const shuffledAllImages = this.shuffleImages(array);
    const getFirstElements = shuffledAllImages.slice(0, n / 2);
    let generatedArray = Array.prototype.concat(getFirstElements,
      getFirstElements);
    generatedArray = this.shuffleImages(generatedArray);
    return generatedArray;
  }

}

const images = new Images(originalImages, 12);

export default images;
