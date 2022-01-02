import {fonts} from '../assets/fonts';
import Sizes from './sizes';

//TODO fonts로 바꾸기
const customFont = 'Lao Sangam MN';

const Typography = {
    h1: {fontFamily: customFont, fontSize: Sizes.h1, lineHeight: 36},
    h2: {fontFamily: customFont, fontSize: Sizes.h2, lineHeight: 22},
    h3: {fontFamily: customFont, fontSize: Sizes.h3, lineHeight: 22},
    h4: {fontFamily: customFont, fontSize: Sizes.h4, lineHeight: 22},

    body1: {
        fontFamily: customFont,
        fontSize: Sizes.body1,
        lineHeight: 36,
    },
    body2: {
        fontFamily: customFont,
        fontSize: Sizes.body2,
        lineHeight: 30,
    },
    body3: {
        fontFamily: customFont,
        fontSize: Sizes.body3,
        lineHeight: 22,
    },
    body4: {
        fontFamily: customFont,
        fontSize: Sizes.body4,
        lineHeight: 22,
    },
    body5: {
        fontFamily: customFont,
        fontSize: Sizes.body5,
        lineHeight: 16,
    },
    body6: {
        fontFamily: customFont,
        fontSize: Sizes.body6,
        lineHeight: 12,
    },
    body7: {
        fontFamily: customFont,
        fontSize: Sizes.body7,
        lineHeight: 8,
    },

    bold1: {
        fontSize: Sizes.body1,
        lineHeight: 36,
        fontWeight: 'bold',
    },
    bold2: {
        fontSize: Sizes.body2,
        lineHeight: 30,
        fontWeight: 'bold',
    },
    bold3: {
        fontSize: Sizes.body3,
        lineHeight: 22,
        fontWeight: 'bold',
    },
    bold4: {
        fontSize: Sizes.body4,
        lineHeight: 22,
        fontWeight: '700',
    },
    bold5: {
        fontSize: Sizes.body5,
        lineHeight: 16,
        fontWeight: 'bold',
    },
    bold6: {
        fontSize: Sizes.body6,
        lineHeight: 12,
        fontWeight: 'bold',
    },
    bold7: {
        fontSize: Sizes.body7,
        lineHeight: 8,
        fontWeight: 'bold',
    },

    //myStore
    myStoreBookingFont: {
        fontSize: Sizes.body6,
        fontWeight: '600',
    },

    myStoreServiceFont: {},

    //myDeal
    myDealTitleFont: {
        fontSize: Sizes.body3,
        lineHeight: 25,
        fontWeight: 'bold',
    },

    myDealStoreNameFont: {
        fontFamily: 'Lao Sangam MN',
        fontSize: Sizes.body5,
        lineHeight: 16,
    },

    myDealPeriodFont: {
        fontFamily: 'Lao Sangam MN',
        fontSize: Sizes.body5,
        lineHeight: 16,
    },

    myDealDDayFont: {
        fontSize: Sizes.body5,
        lineHeight: 18,
        fontWeight: '700',
    },

    myDealPushFont: {
        fontSize: Sizes.body6,
        lineHeight: 15,
        fontWeight: '700',
    },

    //MyProfile
    myProfileTitleFont: {
        fontSize: Sizes.body2,
        lineHeight: 22,
        fontWeight: '500',
    },

    myProfileEmailFont: {
        fontFamily: 'Lao Sangam MN',
        fontSize: Sizes.body5,
        lineHeight: 16,
    },

    //common
    //MyDeals, MyStore, Message, MyPage 이름Andrew 전용 폰트
    myPageTitleFont: {
        fontSize: Sizes.body2,
        lineHeight: 22,
        fontWeight: '400',
    },

    myPageHeaderFont: {
        fontSize: Sizes.body3,
        lineHeight: 22,
    },
};

export default Typography;
