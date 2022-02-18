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
        created_at: '2020-08-27T12:00:00.000Z',
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
        created_at: '2020-08-27T12:00:00.000Z',
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
        created_at: '2020-08-27T12:00:00.000Z',
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
        created_at: '2020-08-27T12:00:00.000Z',
        content:
            "Hey Hey Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        numberOfComments: 4,
        numberOfRetweets: 11,
        numberOfLikes: 99,
    },
    {
        tweetId: 't5',
        user: {
            userId: '4',
            username: 'SavinVadim_',
            name: 'Vadim Savin',
            image: 'https://picsum.photos/200',
        },
        created_at: '2020-08-27T12:00:00.000Z',
        content:
            "Hey Hey Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        numberOfComments: 4,
        numberOfRetweets: 11,
        numberOfLikes: 99,
    },
    {
        tweetId: 't6',
        user: {
            userId: '4',
            username: 'SavinVadim_',
            name: 'Vadim Savin',
            image: 'https://picsum.photos/200',
        },
        created_at: '2020-08-27T12:00:00.000Z',
        content:
            "Hey Hey Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        numberOfComments: 4,
        numberOfRetweets: 11,
        numberOfLikes: 99,
    },
    {
        tweetId: 't7',
        user: {
            userId: '4',
            username: 'SavinVadim_',
            name: 'Vadim Savin',
            image: 'https://picsum.photos/200',
        },
        created_at: '2020-08-27T12:00:00.000Z',
        content:
            "Hey Hey Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        numberOfComments: 4,
        numberOfRetweets: 11,
        numberOfLikes: 99,
    },
    {
        tweetId: 't8',
        user: {
            userId: '4',
            username: 'SavinVadim_',
            name: 'Vadim Savin',
            image: 'https://picsum.photos/200',
        },
        created_at: '2020-08-27T12:00:00.000Z',
        content:
            "Hey Hey Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        numberOfComments: 4,
        numberOfRetweets: 11,
        numberOfLikes: 99,
    },
];

const countries = [
    {
        country_id: 1,
        name: 'Malaysia',
        image: require('../assets/images/malaysia/malaysia_map.png'),
        places: [
            {
                place_id: 1,
                name: 'Kuching',
                description:
                    'Kuching, officially the City of Kuching, is the capital and the most populous city in the state of Sarawak in Malaysia. It is also the capital of Kuching Division.',
                image: require('../assets/images/malaysia/kuching.png'),
                rate: '4.89',
                mapInitialRegion: {
                    latitude: 1.557177,
                    longitude: 110.351902,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044,
                },
                hotels: [
                    {
                        id: '1',
                        name: 'Riverside Majestic Hotel',
                        image: require('../assets/images/malaysia/kuching/riverside_majestic_hotel.jpg'),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 1.557907,
                            longitude: 110.352079,
                        },
                    },
                    {
                        id: '2',
                        name: 'Grand Margherita Hotel',
                        image: require('../assets/images/malaysia/kuching/grand_margherita_hotel.jpg'),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 1.558163,
                            longitude: 110.352813,
                        },
                    },
                    {
                        id: '3',
                        name: 'Hilton Kuching',
                        image: require('../assets/images/malaysia/kuching/hilton_kuching.jpg'),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 1.557144,
                            longitude: 110.350496,
                        },
                    },
                ],
            },
            {
                place_id: 2,
                name: 'Kuala Lumpur',
                description:
                    'Kuala Lumpur is the capital of Malaysia. Its modern skyline is dominated by the 451m-tall Petronas Twin Towers, a pair of glass-and-steel-clad skyscrapers with Islamic motifs.',
                image: require('../assets/images/malaysia/kuala_lumpur.png'),
                rate: '4.89',
                mapInitialRegion: {
                    latitude: 3.135662,
                    longitude: 101.687128,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044,
                },
                hotels: [
                    {
                        id: '1',
                        name: 'Hilton Kuala Lumpur',
                        image: require('../assets/images/malaysia/kuala_lumpur/hilton_kuala_lumpur.jpg'),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 3.135308,
                            longitude: 101.685729,
                        },
                    },
                    {
                        id: '2',
                        name: 'Le Méridien Kuala Lumpur',
                        image: require('../assets/images/malaysia/kuala_lumpur/le_meridien_kuala_lumpur.jpg'),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 3.135843,
                            longitude: 101.686544,
                        },
                    },
                    {
                        id: '3',
                        name: 'The St. Regis Kuala Lumpur',
                        image: require('../assets/images/malaysia/kuala_lumpur/the_st_regis_kuala_lumpur.jpg'),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 3.136902,
                            longitude: 101.688924,
                        },
                    },
                ],
            },
            {
                place_id: 3,
                name: 'Penang',
                description:
                    'George Town is the colorful, multicultural capital of the Malaysian island of Penang.',
                image: require('../assets/images/malaysia/penang.png'),
                rate: '4.89',
                mapInitialRegion: {
                    latitude: 5.432068,
                    longitude: 100.317376,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044,
                },
                hotels: [
                    {
                        id: '1',
                        name: 'Sunrise Gurney',
                        image: require('../assets/images/malaysia/penang/sunrise_gurney.jpg'),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 5.432874,
                            longitude: 100.31675,
                        },
                    },
                    {
                        id: '2',
                        name: 'Sunrise Gurney Homestay',
                        image: require('../assets/images/malaysia/penang/sunrise_gurney_homestay.jpg'),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 5.431626,
                            longitude: 100.317848,
                        },
                    },
                    {
                        id: '3',
                        name: 'Evergreen Laurel Hotel Penang',
                        image: require('../assets/images/malaysia/penang/evergreen_laurel_hotel_penang.jpg'),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 5.431288,
                            longitude: 100.317898,
                        },
                    },
                ],
            },
        ],
    },
    {
        country_id: 2,
        name: 'India',
        image: require('../assets/images/india/india_map.png'),
        places: [
            {
                place_id: 1,
                name: 'Goa',
                description:
                    'Known for its gorgeous beaches, stellar nightlife, delish seafood, world-heritage listed monuments, Goa is where all the fun is in India.',
                image: require('../assets/images/india/goa.png'),
                rate: '4.89',
                mapInitialRegion: {
                    latitude: 15.498931,
                    longitude: 73.767945,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044,
                },
                hotels: [
                    {
                        id: '1',
                        name: 'Taj Holiday Village',
                        image: require('../assets/images/india/goa/taj_holiday_village.jpg'),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 15.499815,
                            longitude: 73.769295,
                        },
                    },
                    {
                        id: '2',
                        name: 'Taj Fort Aguada',
                        image: require('../assets/images/india/goa/taj_fort_aguada.jpeg'),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 15.497798,
                            longitude: 73.767097,
                        },
                    },
                ],
            },
            {
                place_id: 2,
                name: 'Jaipur',
                description:
                    'The Pink City, Jaipur is a destination you cannot miss when visiting India. Jaipur is a perfect reflection of what the royal state of Rajasthan is about.',
                image: require('../assets/images/india/jaipur.png'),
                rate: '4.89',
                mapInitialRegion: {
                    latitude: 26.928055,
                    longitude: 75.788295,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044,
                },
                hotels: [
                    {
                        id: '1',
                        name: 'Umaid Mahal',
                        image: require('../assets/images/india/jaipur/umaid_mahal.webp'),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 26.92794,
                            longitude: 75.789056,
                        },
                    },
                ],
            },
            {
                place_id: 3,
                name: 'Agra',
                description:
                    'Home to the symbol of love, Taj Mahal, Agra in Uttar Pradesh finds its spot on the world heritage map.',
                image: require('../assets/images/india/agra.png'),
                rate: '4.89',
                mapInitialRegion: {
                    latitude: 27.168123,
                    longitude: 78.049032,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044,
                },
                hotels: [
                    {
                        id: '1',
                        name: 'The Oberoi Amarvilas',
                        image: require('../assets/images/india/agra/the_oberoi_amarvilas.jpg'),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 27.168123,
                            longitude: 78.049032,
                        },
                    },
                ],
            },
        ],
    },
    {
        country_id: 3,
        name: 'Indonesia',
        image: require('../assets/images/indonesia/indonesia_map.png'),
        places: [
            {
                place_id: 1,
                name: 'Bali',
                description:
                    'Bali has it all. Scenic mountains, sacred temples, rich culture, sandy beaches, surf-worthy waves, lively nightlife, exciting shopping… and the list goes on.',
                image: require('../assets/images/indonesia/bali.png'),
                rate: '4.89',
                mapInitialRegion: {
                    latitude: -8.422605,
                    longitude: 115.274697,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044,
                },
                hotels: [
                    {
                        id: '1',
                        name: 'The Kayon Jungle Resort',
                        image: require('../assets/images/indonesia/bali/the_kayon_jungle_resort.jpg'),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -8.422426,
                            longitude: 115.275185,
                        },
                    },
                    {
                        id: '2',
                        name: 'Green View Private Villas',
                        image: require('../assets/images/indonesia/bali/green_view_private_villas.webp'),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -8.422203,
                            longitude: 115.275142,
                        },
                    },
                ],
            },
            {
                place_id: 2,
                name: 'Jakarta',
                description:
                    'Jakarta may seem like a daunting megacity, but it also has a couple of interesting places that are worth a stopover.',
                image: require('../assets/images/indonesia/jakarta.png'),
                rate: '4.89',
                mapInitialRegion: {
                    latitude: -6.227687,
                    longitude: 106.826979,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044,
                },
                hotels: [
                    {
                        id: '1',
                        name: 'Oakwood Premier Cozmo',
                        image: require('../assets/images/indonesia/jakarta/oakwood_premier_cozmo.jpg'),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -6.227846,
                            longitude: 106.825391,
                        },
                    },
                    {
                        id: '2',
                        name: 'JW Marriott Hotel',
                        image: require('../assets/images/indonesia/jakarta/jw_marriott_hotel.jpg'),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -6.227036,
                            longitude: 106.827333,
                        },
                    },
                ],
            },
            {
                place_id: 3,
                name: 'Nusa Penida',
                description:
                    'If you are in Bali and you want to go off-beat, go to Nusa Penida. Nusa Penida is the biggest of the three Nusa Islands just off from mainland Bali.',
                image: require('../assets/images/indonesia/nusa_penida.png'),
                rate: '4.89',
                mapInitialRegion: {
                    latitude: -8.703571,
                    longitude: 115.439826,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044,
                },
                hotels: [
                    {
                        id: '1',
                        name: 'Purist Beach',
                        image: require('../assets/images/indonesia/nusa_penida/purist_beach.jpg'),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: -8.703571,
                            longitude: 115.439826,
                        },
                    },
                ],
            },
        ],
    },
];

const places = [
    {
        place_id: 1,
        name: 'Marina Bay',
        type: 'HOTEL',
        latitude: 127.6,
        longitude: 11.4,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fringilla augue vel pellentesque. Donec rutrum fringilla fringilla. Nullam porta, risus vel eleifend tempus, lorem eros fermentum elit, vitae suscipit velit tellus non ante. Vestibulum facilisis, nisi eget iaculis elementum, diam felis lacinia tellus, ac venenatis libero lorem nec mi. ',
        details: {
            images: [
                'https://picsum.photos/200',
                'https://picsum.photos/200',
                'https://picsum.photos/200',
            ],
        },
        status: 'OPEN',
        updated_at: '2021-01-08 13:00:00',
    },
    {
        place_id: 2,
        name: 'Gardens By the Bay',
        type: 'HOTEL',
        latitude: 127.6,
        longitude: 11.4,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fringilla augue vel pellentesque. Donec rutrum fringilla fringilla. Nullam porta, risus vel eleifend tempus, lorem eros fermentum elit, vitae suscipit velit tellus non ante. Vestibulum facilisis, nisi eget iaculis elementum, diam felis lacinia tellus, ac venenatis libero lorem nec mi. ',
            details: {
            images: ['https://picsum.photos/200', 'https://picsum.photos/200'],
        },
        status: 'OPEN',
        updated_at: '2021-01-08 13:00:00',
    },
    {
        place_id: 3,
        name: 'LakeSide',
        type: 'HOTEL',
        latitude: 127.6,
        longitude: 11.4,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fringilla augue vel pellentesque. Donec rutrum fringilla fringilla. Nullam porta, risus vel eleifend tempus, lorem eros fermentum elit, vitae suscipit velit tellus non ante. Vestibulum facilisis, nisi eget iaculis elementum, diam felis lacinia tellus, ac venenatis libero lorem nec mi. ',
        details: {
            images: ['https://picsum.photos/200', 'https://picsum.photos/200'],
        },
        status: 'OPEN',
        updated_at: '2021-01-08 13:00:00',
    },
    {
        place_id: 4,
        name: 'Sentosa',
        type: 'HOTEL',
        latitude: 127.6,
        longitude: 11.4,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fringilla augue vel pellentesque. Donec rutrum fringilla fringilla. Nullam porta, risus vel eleifend tempus, lorem eros fermentum elit, vitae suscipit velit tellus non ante. Vestibulum facilisis, nisi eget iaculis elementum, diam felis lacinia tellus, ac venenatis libero lorem nec mi. ',
        details: {
            images: [
                'https://picsum.photos/200',
                'https://picsum.photos/200',
                'https://picsum.photos/200',
            ],
            description: '',
        },
        status: 'OPEN',
        updated_at: '2021-01-08 13:00:00',
    },
];

const tips = [
    {
        tip_id: 1,
        place_name: 'Marina Bay',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fringilla augue vel pellentesque. Donec rutrum fringilla fringilla. Nullam porta, risus vel eleifend tempus, lorem eros fermentum elit, vitae suscipit velit tellus non ante. Vestibulum facilisis, nisi eget iaculis elementum, diam felis lacinia tellus, ac venenatis libero lorem nec mi. ',
        status: 'ACTIVE',
        updated_at: '2021-01-08 14:45:30',
    },
];

const chats = [
    {
        id: '1',
        users: [
            {
                id: 'u1',
                name: 'Vadim',
                imageUri:
                    'https://scontent.fkiv3-1.fna.fbcdn.net/v/t31.0-1/s200x200/22256588_1932617800312085_5686197942193420542_o.jpg?_nc_cat=110&_nc_sid=7206a8&_nc_eui2=AeF3UwtnAs3QLEJRnLSp4-hQxlokCBJZ6JPGWiQIElnok9HafHyjqv9D4bW9zeNFfNJlg5jLsvbewM7j5OD-OFy-&_nc_ohc=IxycgYSpqQEAX8EcTqI&_nc_ht=scontent.fkiv3-1.fna&tp=7&oh=640a83293bb75378958d22b633302f1b&oe=5F9F4BB7',
            },
            {
                id: 'u2',
                name: 'Lukas',
                imageUri:
                    'https://scontent.fkiv3-1.fna.fbcdn.net/v/t1.0-1/p200x200/107443858_3074598385966770_1929559809312242379_n.jpg?_nc_cat=107&_nc_sid=7206a8&_nc_eui2=AeGly5fZLQUfAKei_EiACEq5Dfw2T_M-BQMN_DZP8z4FA_aLEVK_8e0dKvl_5vxVO0Zn-4OPzQ9pKS0c0XeXd898&_nc_ohc=z1ydC_UL4KsAX_tfrbv&_nc_oc=AQknywM4y1IAQaQZaZkPdtkUmaem060LXSByeTx3pdQXWfxW2_tdzfgRsQIXQK_zV94&_nc_ht=scontent.fkiv3-1.fna&tp=6&oh=69508c88f073f64f432fc1f1ab9299e8&oe=5F9C5FD5',
            },
        ],
        messages: [
            {
                message_id: 'm1',
                content: 'How are you, Lukas!',
                created_at: '2020-10-10T12:48:00.000Z',
                user: {
                    user_id: 1,
                    name: 'Vadim',
                },
            },
            {
                message_id: 'm2',
                content: 'I am good, good',
                created_at: '2020-10-03T14:49:00.000Z',
                user: {
                    user_id: 2,
                    name: 'Lukas',
                },
            },
            {
                message_id: 'm3',
                content: 'What about you?',
                created_at: '2020-10-03T14:49:40.000Z',
                user: {
                    user_id: 2,
                    name: 'Lukas',
                },
            },
            {
                message_id: 'm4',
                content: 'Good as well, preparing for the stream now.',
                created_at: '2020-10-03T14:50:00.000Z',
                user: {
                    user_id: 1,
                    name: 'Vadim',
                },
            },
            {
                message_id: 'm5',
                content: 'How is your uni going?',
                created_at: '2020-10-03T14:51:00.000Z',
                user: {
                    user_id: 1,
                    name: 'Vadim',
                },
            },
            {
                message_id: 'm6',
                content:
                    'It is a bit tough, as I have 2 specializations. How about yours? Do you enjoy it?',
                created_at: '2020-10-03T14:49:00.000Z',
                user: {
                    user_id: 2,
                    name: 'Lukas',
                },
            },
            {
                message_id: 'm7',
                content:
                    'Big Data is really interesting. Cannot wait to go through all the material.',
                created_at: '2020-10-03T14:53:00.000Z',
                user: {
                    user_id: 1,
                    name: 'Vadim',
                },
            },
        ],
    },
];

const chatRooms = [
    {
        chatroom_id: '1',
        users: [
            {
                user_id: 1,
                name: 'kay',
                status: 'ACTIVE',
                created_at: '2021-01-09T14:00:00+08:00',
                email: 'kimshy5840@naver.com',
                details: {
                    profileImage: 'https://picsum.photos/200',
                    backgraoundImage: 'https://picsum.photos/200',
                    description: '난 영웅이야',
                    location: 'Singapore',
                    dob: '1997-10-27',
                },
            },
            {
                user_id: 2,
                name: 'Andy',
                status: 'ACTIVE',
                created_at: '2021-01-09T14:00:00+08:00',
                email: 'kimshy5840@naver.com',
                details: {
                    profileImage: 'https://picsum.photos/200',
                    backgraoundImage: 'https://picsum.photos/200',
                    description: '난 영웅이야',
                    location: 'Singapore',
                    dob: '1997-10-27',
                },
            },
        ],
        last_message: {
            message_id: 'm1',
            content: 'Well done this sprint, guys!',
            created_at: '2020-10-03T14:48:00.000Z',
        },
    },
    {
        chatroom_id: '2',
        users: [
            {
                user_id: 1,
                name: 'kay',
                status: 'ACTIVE',
                created_at: '2021-01-09T14:00:00+08:00',
                email: 'kimshy5840@naver.com',
                details: {
                    profileImage: 'https://picsum.photos/200',
                    backgraoundImage: 'https://picsum.photos/200',
                    description: '난 영웅이야',
                    location: 'Singapore',
                    dob: '1997-10-27',
                },
            },
            {
                user_id: 2,
                name: 'Andy',
                status: 'ACTIVE',
                created_at: '2021-01-09T14:00:00+08:00',
                email: 'kimshy5840@naver.com',
                details: {
                    profileImage: 'https://picsum.photos/200',
                    backgraoundImage: 'https://picsum.photos/200',
                    description: '난 영웅이야',
                    location: 'Singapore',
                    dob: '1997-10-27',
                },
            },
        ],
        last_message: {
            message_id: 'm1',
            content: 'Well done this sprint, guys!',
            created_at: '2020-10-03T14:48:00.000Z',
        },
    },
    {
        chatroom_id: '3',
        users: [
            {
                user_id: 1,
                name: 'kay',
                status: 'ACTIVE',
                created_at: '2021-01-09T14:00:00+08:00',
                email: 'kimshy5840@naver.com',
                details: {
                    profileImage: 'https://picsum.photos/200',
                    backgraoundImage: 'https://picsum.photos/200',
                    description: '난 영웅이야',
                    location: 'Singapore',
                    dob: '1997-10-27',
                },
            },
            {
                user_id: 2,
                name: 'Andy',
                status: 'ACTIVE',
                created_at: '2021-01-09T14:00:00+08:00',
                email: 'kimshy5840@naver.com',
                details: {
                    profileImage: 'https://picsum.photos/200',
                    backgraoundImage: 'https://picsum.photos/200',
                    description: '난 영웅이야',
                    location: 'Singapore',
                    dob: '1997-10-27',
                },
            },
        ],
        last_message: {
            message_id: 'm1',
            content: 'Well done this sprint, guys!',
            created_at: '2020-10-03T14:48:00.000Z',
        },
    },
    {
        chatroom_id: '4',
        users: [
            {
                user_id: 1,
                name: 'kay',
                status: 'ACTIVE',
                created_at: '2021-01-09T14:00:00+08:00',
                email: 'kimshy5840@naver.com',
                details: {
                    profileImage: 'https://picsum.photos/200',
                    backgraoundImage: 'https://picsum.photos/200',
                    description: '난 영웅이야',
                    location: 'Singapore',
                    dob: '1997-10-27',
                },
            },
            {
                user_id: 2,
                name: 'Andy',
                status: 'ACTIVE',
                created_at: '2021-01-09T14:00:00+08:00',
                email: 'kimshy5840@naver.com',
                details: {
                    profileImage: 'https://picsum.photos/200',
                    backgraoundImage: 'https://picsum.photos/200',
                    description: '난 영웅이야',
                    location: 'Singapore',
                    dob: '1997-10-27',
                },
            },
        ],
        last_message: {
            message_id: 'm1',
            content: 'Well done this sprint, guys!',
            created_at: '2020-10-03T14:48:00.000Z',
        },
    },
    {
        chatroom_id: '5',
        users: [
            {
                user_id: 1,
                name: 'kay',
                status: 'ACTIVE',
                created_at: '2021-01-09T14:00:00+08:00',
                email: 'kimshy5840@naver.com',
                details: {
                    profileImage: 'https://picsum.photos/200',
                    backgraoundImage: 'https://picsum.photos/200',
                    description: '난 영웅이야',
                    location: 'Singapore',
                    dob: '1997-10-27',
                },
            },
            {
                user_id: 2,
                name: 'Andy',
                status: 'ACTIVE',
                created_at: '2021-01-09T14:00:00+08:00',
                email: 'kimshy5840@naver.com',
                details: {
                    profileImage: 'https://picsum.photos/200',
                    backgraoundImage: 'https://picsum.photos/200',
                    description: '난 영웅이야',
                    location: 'Singapore',
                    dob: '1997-10-27',
                },
            },
        ],
        last_message: {
            message_id: 'm1',
            content: 'Well done this sprint, guys!',
            created_at: '2020-10-03T14:48:00.000Z',
        },
    },
    {
        chatroom_id: '6',
        users: [
            {
                user_id: 1,
                name: 'kay',
                status: 'ACTIVE',
                created_at: '2021-01-09T14:00:00+08:00',
                email: 'kimshy5840@naver.com',
                details: {
                    profileImage: 'https://picsum.photos/200',
                    backgraoundImage: 'https://picsum.photos/200',
                    description: '난 영웅이야',
                    location: 'Singapore',
                    dob: '1997-10-27',
                },
            },
            {
                user_id: 2,
                name: 'Andy',
                status: 'ACTIVE',
                created_at: '2021-01-09T14:00:00+08:00',
                email: 'kimshy5840@naver.com',
                details: {
                    profileImage: 'https://picsum.photos/200',
                    backgraoundImage: 'https://picsum.photos/200',
                    description: '난 영웅이야',
                    location: 'Singapore',
                    dob: '1997-10-27',
                },
            },
        ],
        last_message: {
            message_id: 'm20',
            user_id: 2,
            content:
                'Well done this sprint, guys! Well done this sprint, guys! Well done this sprint, guys! Well done this sprint, guys!',
            created_at: '2020-10-03T14:48:00.000Z',
        },
    },
];

const users = [
    {
        user_id: 1,
        name: 'kay',
        alias: '@yigmmm042223',
        status: 'ACTIVE',
        created_at: '2021-01-09T14:00:00+08:00',
        email: 'kimshy5840@naver.com',
        details: {
            profileImage: 'https://picsum.photos/200',
            backgraoundImage: 'https://picsum.photos/200',
            description: '난 영웅이야',
            location: 'Singapore',
            dob: '1997-10-27',
        },
    },
    {
        user_id: 2,
        name: 'kay',
        alias: '@yigmmm042223',
        status: 'ACTIVE',
        created_at: '2021-01-09T14:00:00+08:00',
        email: 'kimshy5840@naver.com',
        details: {
            profileImage: 'https://picsum.photos/200',
            backgraoundImage: 'https://picsum.photos/200',
            description: '난 영웅이야',
            location: 'Singapore',
            dob: '1997-10-27',
        },
    },
    {
        user_id: 3,
        name: 'kay',
        alias: '@yigmmm042223',
        status: 'ACTIVE',
        created_at: '2021-01-09T14:00:00+08:00',
        email: 'kimshy5840@naver.com',
        details: {
            profileImage: 'https://picsum.photos/200',
            backgraoundImage: 'https://picsum.photos/200',
            description: '난 영웅이야',
            location: 'Singapore',
            dob: '1997-10-27',
        },
    },
    {
        user_id: 4,
        name: 'kay',
        alias: '@yigmmm042223',
        status: 'ACTIVE',
        created_at: '2021-01-09T14:00:00+08:00',
        email: 'kimshy5840@naver.com',
        details: {
            profileImage: 'https://picsum.photos/200',
            backgraoundImage: 'https://picsum.photos/200',
            description: '난 영웅이야',
            location: 'Singapore',
            dob: '1997-10-27',
        },
    },
    {
        user_id: 5,
        name: 'kay',
        alias: '@yigmmm042223',
        status: 'ACTIVE',
        created_at: '2021-01-09T14:00:00+08:00',
        email: 'kimshy5840@naver.com',
        details: {
            profileImage: 'https://picsum.photos/200',
            backgraoundImage: 'https://picsum.photos/200',
            description: '난 영웅이야',
            location: 'Singapore',
            dob: '1997-10-27',
        },
    },
];

export default {
    tweets,
    countries,
    places,
    chats,
    chatRooms,
    users,
};
