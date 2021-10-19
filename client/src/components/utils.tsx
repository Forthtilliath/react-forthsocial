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
                image_path = require(`../images/defaultCover.jpg`).default;
        }
    }
    return image_path;
};

export const isEmpty = (value:unknown) => {
    return (
        value === null ||
        typeof value == 'undefined' ||
        (typeof value === 'object' && Object.keys(value!).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
    );
};