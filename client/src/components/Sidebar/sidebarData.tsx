import {
    RssFeed,
    Chat,
    School,
    WorkOutline,
    HelpOutline,
    Event,
    PlayCircleFilledOutlined,
    Bookmark,
    Group,
} from '@material-ui/icons';

const sidebarData = [
    {
        icon: <RssFeed />,
        text: 'Feed',
    },
    {
        icon: <Chat />,
        text: 'Chats',
    },
    {
        icon: <PlayCircleFilledOutlined />,
        text: 'Videos',
    },
    {
        icon: <Group />,
        text: 'Groups',
    },
    {
        icon: <Bookmark />,
        text: 'Bookmarks',
    },
    {
        icon: <HelpOutline />,
        text: 'Questions',
    },
    {
        icon: <WorkOutline />,
        text: 'Jobs',
    },
    {
        icon: <Event />,
        text: 'Events',
    },
    {
        icon: <School />,
        text: 'Courses',
    },
];

export default sidebarData;
