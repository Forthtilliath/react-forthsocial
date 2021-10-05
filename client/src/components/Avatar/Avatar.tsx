import { loadImage } from '../utils';
import './Avatar.scss';

const Avatar = ({ image, size, mr }: IProps) => {
    return (
        <img src={loadImage(image)} alt="avatar" className="avatar" style={{ width: size, height: size, marginRight: mr }} />
    );
};

export default Avatar;
