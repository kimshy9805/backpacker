const GOOGLE_API_KEY = 'AIzaSyCKsUGXfT0xEe_3Ycz0J2NaxMeL0_bRyeA';

const mapStyle = [
    {
        featureType: 'poi.attraction',
        elementType: 'labels.icon',
        stylers: [
            {
                visibility: 'simplified',
            },
        ],
    },
    {
        featureType: 'poi.business',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
    {
        featureType: 'poi.park',
        elementType: 'labels.text',
        stylers: [
            {
                visibility: 'off',
            },
        ],
    },
];

export default mapStyle;
export {GOOGLE_API_KEY};
