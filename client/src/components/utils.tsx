export const loadImage = (fileName: string = '', categImage: string = '') => {
    let image_path: string;
    try {
        image_path = require(`../images/${fileName}`).default;
    } catch (err) {
        switch (categImage) {
            case 'person':
                image_path = require(`../images/person/no-avatar.jpeg`).default;
                break;
            default:
                image_path = require(`../images/defaultCover.webp`).default;
        }
    }
    return image_path;
};
