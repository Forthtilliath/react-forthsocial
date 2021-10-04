export const loadImage = (fileName: string = '') => {
    let image_path: string;
    try {
        image_path = require(`../images/${fileName}`).default;
    } catch (err) {
        image_path = require(`../images/person/no-avatar.jpeg`).default;
    }
    return image_path;
};
