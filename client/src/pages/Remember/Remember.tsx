import Sidebar from '../../components/Sidebar/Sidebar';
import { loadImage } from '../../components/utils';
import './Remember.scss';

const Remember = () => {
    const hasSouvenirs = false;

    return (
        <div className="rememberContainer">
            <Sidebar />
            <div className="rememberRight">
                {hasSouvenirs ? (
                    <div className="rememberMemoriesContainer"></div>
                ) : (
                    <div className="rememberNoMemoriesContainer">
                        <img
                            src={loadImage('nomemories.jpg')}
                            alt="no-memories"
                            className="rememberNoMemoriesContainer-image"
                        />
                        <div className="rememberNoMemoriesContainer-title">Aucun souvenir aujourd’hui</div>
                        <div className="rememberNoMemoriesContainer-text">
                            Il n’y a aucun souvenir à voir ou à partager pour aujourd’hui.
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Remember;
