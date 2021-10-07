import { AvatarExterneSVG } from '../../components/Avatar/Avatar';

export const Card = ({ user }: { user: { image: string; name: string; relations: number; avatars: string[] } }) => {
    return (
        <div className="cardContainer">
            <div className="cardContainerWrapper">
                <div className="cardContainerTop">
                    <img src={user.image} alt="avatar" className="cardContainerImage" />
                </div>
                <div className="cardContainerContent">
                    <h4 className="cardContainerContent-name">{user.name}</h4>
                    <div className="cardContainerContent-relations">
                        <AvatarExterneSVG key={0} image={user.avatars[0]} size={16} first={true} />
                        <AvatarExterneSVG key={1} image={user.avatars[1]} size={16} first={false} />
                        {user.relations && <div>{user.relations + ' amis en commun'}</div>}
                    </div>
                    <div className="cardContainerContent-buttonWrapper">
                        <button className="cardContainerContent-button btn-add">Ajouter</button>
                    </div>
                    <div className="cardContainerContent-buttonWrapper">
                        <button className="cardContainerContent-button btn-delete">Supprimer</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const CardEmpty = () => {
    return <div className="cardContainer"></div>;
};

export default Card;
