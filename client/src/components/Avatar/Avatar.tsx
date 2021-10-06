import { loadImage } from '../utils';
import './Avatar.scss';

const Avatar = ({ image, size, mr }: IProps) => {
    return (
        <img
            src={loadImage(image)}
            alt="avatar"
            className="avatar"
            style={{ width: size, height: size, marginRight: mr }}
        />
    );
};

export const AvatarExterne = ({ image, size, mr }: IProps) => {
    return <img src={image} alt="avatar" className="avatar" style={{ width: size, height: size, marginRight: mr }} />;
};

export const AvatarExterneSVG = ({ image, size, first = false }: IProps) => {
    console.log(first ? "a" : "b");
    const style = first ? {} : { marginLeft: -4 };
    // const style = { paddingLeft: '-4px' };
    const a = Math.random();

    return (
        <div style={style}>
            <svg
                aria-hidden="false"
                aria-label="Name"
                className="avatar"
                data-visualcompletion="ignore-dynamic"
                role="img"
                style={{ width: size, height: size }}
            >
                <mask id={"mask" + a}>
                    <circle cx="8" cy="8" fill="white" r="8"></circle>
                    {!first && <circle cx="-4" cy="8" fill="black" r="10"></circle>}
                </mask>
                <g mask={"url(#mask" + a+")"}>
                    <image
                        x="0"
                        y="0"
                        preserveAspectRatio="xMidYMid slice"
                        height="100%"
                        width="100%"
                        xlinkHref={image}
                        style={{ width: size, height: size }}
                    ></image>
                    <circle fill="none" cx="8" cy="8" r="8"></circle>
                </g>
            </svg>
        </div>
    );
};

export default Avatar;
