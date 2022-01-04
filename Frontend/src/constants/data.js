import images from './images';
const tweets = [
    {
        tweetId: 't1',
        user: {
            userId: '1',
            username: 'SavinVadim_',
            name: 'Vadim Savin',
            image: 'https://picsum.photos/200',
        },
        createdAt: '2020-08-27T12:00:00.000Z',
        content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        image: 'https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg',
        numberOfComments: 123,
        numberOfRetweets: 11,
        numberOfLikes: 10,
    },
    {
        tweetId: 't2',
        user: {
            userId: '2',
            username: 'SavinVadim_',
            name: 'Vadim Savin',
            image: 'https://picsum.photos/200',
        },
        createdAt: '2020-08-27T12:00:00.000Z',
        content:
            "Hey Hey Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        numberOfComments: 4,
        numberOfRetweets: 11,
        numberOfLikes: 99,
    },
    {
        tweetId: 't3',
        user: {
            userId: '3',
            username: 'SavinVadim_',
            name: 'Vadim Savin',
            image: 'https://picsum.photos/200',
        },
        createdAt: '2020-08-27T12:00:00.000Z',
        content: 'Hello World',
        numberOfComments: 4,
        numberOfRetweets: 11,
        numberOfLikes: 99,
    },
    {
        tweetId: 't4',
        user: {
            userId: '4',
            username: 'SavinVadim_',
            name: 'Vadim Savin',
            image: 'https://picsum.photos/200',
        },
        createdAt: '2020-08-27T12:00:00.000Z',
        content:
            "Hey Hey Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        numberOfComments: 4,
        numberOfRetweets: 11,
        numberOfLikes: 99,
    },
];

const users = {
    userId: 1,
    username: 'SavinVadim_',
    name: 'Vadim Savin',
    image: 'https://picsum.photos/200',
};

export default {
    tweets,
    users,
};
