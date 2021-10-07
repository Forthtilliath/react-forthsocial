import { FcCamera, FcConferenceCall } from 'react-icons/fc';

const sidebarData = [
    // TODO Ajouter Avatar + Username
    {
        icon: <FcConferenceCall size={30} />,
        text: 'Retrouver des amis',
        link: 'friends',
    },
    {
        icon: <FcCamera size={30} />,
        text: 'Souvenirs',
        link: 'remember',
    },
];

export default sidebarData;
