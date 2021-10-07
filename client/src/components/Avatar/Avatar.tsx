import { loadImage } from '../utils';

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

// export const AvatarExterne = ({ image, size, mr }: IProps) => {
//     return <img src={image} alt="avatar" className="avatar" style={{ width: size, height: size, marginRight: mr }} />;
// };

export const AvatarExterneSVG = ({ image, size, first = false }: IProps) => {
    const style = first ? {} : { marginLeft: -4 };
    const mask = first ? "url(#mask_first)" : "url(#mask_next)";

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
                <g mask={mask}>
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
