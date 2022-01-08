import {StyleSheet} from 'react-native';
import Colors from './colors';
import Sizes from './sizes';
import Typography from './typography';

const styles = StyleSheet.create({
    /********************
     **     @Common    **
     ********************/

    container: {
        flex: 1,
        backgroundColor: Colors.black,
    },
    mt10: {
        marginTop: 10,
    },
    flexRow: {
        flexDirection: 'row',
    },

    flexRowCenter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    flexRowCenterBetween: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    flexRowCenterCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flexRowCenterRound: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    flexColumn: {
        flexDirection: 'column',
    },
    flexColumnCenterCenter: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flexColumnCenterRound: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    flexColumnCenterStart: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    ImageSize10: {
        width: 10,
        height: 10,
    },

    ImageSize15: {
        width: 15,
        height: 15,
    },

    ImageSize40: {
        width: 40,
        height: 40,
    },

    ImageSize80: {
        width: 80,
        height: 80,
    },
    boxRadius: {
        borderRadius: Sizes.radius,
    },
    text_P: {
        ...Typography.body5,
        marginBottom: 5,
    },

    dropDownContainerStyle: {
        borderColor: Colors.lightGray,
        backgroundColor: Colors.white,
    },

    darkGrayText5: {
        ...Typography.body5,
        color: Colors.darkGray,
    },

    whiteText5: {
        ...Typography.bold5,
        color: Colors.white,
    },

    whitebody5: {
        ...Typography.body5,
        color: Colors.white,
    },

    whiteText6: {
        ...Typography.body6,
        color: Colors.white,
    },

    title_h1: {
        ...Typography.bold3,
        marginRight: 10,
    },
    storeName: {
        ...Typography.bold4,
        lineHeight: 18,
    },

    sectionHeaderContainer: {
        paddingHorizontal: Sizes.padding,
        paddingVertical: Sizes.padding,
        backgroundColor: Colors.black,
    },

    /********************
     **  @Feed   **
     ********************/

    /********************
     **  @Tweet   **
     ********************/

    tweetContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: Colors.white,
    },

    tweetCardContainer: {
        width: '100%',
        flexDirection: 'row',
        borderBottomWidth: 0.25,
        backgroundColor: Colors.black,
        borderColor: 'lightgrey',
        padding: Sizes.padding,
    },

    tweetProfileContainer: {
        flex: 1,
        height: '100%',
    },
    tweetDetailContainer: {
        flex: 6,
        width: '100%',
        height: '100%',
    },
    tweetHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    tweetHeaderNames: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    tweetContentContainer: {
        marginTop: 5,
    },
    tweetFooterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
    },
    tweetFooterNumber: {
        ...Typography.body6,
        color: 'grey',
        textAlign: 'center',
        marginLeft: 5,
    },

    newTweetButtonContainer: {
        width: 45,
        height: 45,
        borderRadius: Sizes.radius * 3,
        position: 'absolute',
        bottom: 30,
        right: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,
    },

    newTweetHeaderContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: Sizes.padding,
        borderBottomColor: Colors.darkGray,
        borderBottomWidth: 0.5,
    },

    newTweetHeaderButtonContainer: {
        width: 60,
        backgroundColor: Colors.primary,
        borderRadius: Sizes.radius * 2,
        justifyContent: 'center',
        alignItems: 'center',
    },

    newTweetContainer: {
        flexDirection: 'row',
        padding: Sizes.padding,
        flex: 1,
    },

    newTweetInputContainer: {
        width: '100%',
        marginLeft: Sizes.padding,
    },

    newTweetInput: {
        width: '80%',
        color: Colors.white,
    },

    /********************
     **  @Components   **
     ********************/

    bigDropDownPicker: {
        width: Sizes.width * 0.425,
        height: 45,
        borderWidth: 1,
        borderColor: Colors.lightGray,
        borderRadius: Sizes.radius * 2,
        paddingHorizontal: Sizes.padding * 1.5,
    },

    bigDropDownContainer: {
        backgroundColor: Colors.lightGray2,
        paddingHorizontal: Sizes.padding,
        borderColor: Colors.lightGray,
        borderWidth: 1,
        borderBottomLeftRadius: Sizes.radius * 2,
        borderBottomRightRadius: Sizes.radius * 2,
    },

    //counter
    CountContainer: {
        backgroundColor: Colors.primary,
        width: 35,
        height: 20,
        borderRadius: Sizes.radius,
        justifyContent: 'center',
        alignItems: 'center',
    },

    //tag
    tagContainer: {
        marginBottom: 5,
        flexDirection: 'row',
    },

    tagText: {
        ...Typography.body5,
        color: Colors.darkGray,
    },
    //header button area
    HeaderContainer: {
        paddingHorizontal: Sizes.padding,
        paddingVertical: Sizes.padding,
        backgroundColor: Colors.filterHeaderGray,
    },
    BodyContainer: {
        paddingHorizontal: Sizes.padding * 1.5,
        paddingVertical: Sizes.padding * 1.5,
        backgroundColor: Colors.white,
        height: '100%',
    },
    //IconButton
    defaultIconButton: {
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Sizes.radius * 0.5,
        backgroundColor: Colors.white,
    },

    defaultIcon: {
        width: 18,
        height: 18,
    },

    //SelectButton
    defaultSelectButton: {
        width: '49%',
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Sizes.radius * 0.8,
    },

    defaultSelectIcon: {
        width: 20,
        height: 20,
    },

    defaultSelectText: {
        ...Typography.bold5,
    },

    //signin/up/myprofile title
    title_style: {
        fontWeight: '600',
        paddingTop: Sizes.padding * 0.5,
        paddingBottom: Sizes.padding * 0.1,
    },
    title_h2: {
        fontSize: 28,
    },
    title_h3: {
        fontSize: 25,
    },
    title_detail: {
        ...Typography.body5,
        color: Colors.darkGray,
    },
    title_image: {
        width: 50,
        height: 50,
        opacity: 0.2,
    },

    /*******************
     **   @QrModal    **
     *******************/

    /*******************
     **   @Explore    **
     *******************/

    /********************
     **     @Filter    **
     ********************/

    /********************
     **     @Place    **
     ********************/

    placeSectionHeaderContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        paddingHorizontal: Sizes.padding,
        backgroundColor: 'transparent',
        paddingTop: Sizes.padding * 3,
    },

    placeBackgroundContainer: {
        flex: 1,
        marginBottom: -150,
    },

    placeBackgroundImageContainer: {
        width: Sizes.width,
        height: Sizes.height * 0.45,
    },

    placeBackgroundImage: {
        width: '100%',
        height: '100%',
    },

    placeDot: {
        borderRadius: Sizes.radius,
        backgroundColor: Colors.primary,
        marginHorizontal: Sizes.radius / 2,
    },

    placeDotsContainer: {
        position: 'absolute',
        top: Sizes.height * 0.35,
        left: '46%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Sizes.padding / 2,
        marginBottom: Sizes.padding * 3,
        height: Sizes.padding,
    },

    placeBodyContainer: {
        flex: 1,
        backgroundColor: Colors.white,
        borderTopLeftRadius: Sizes.radius * 3,
        borderTopRightRadius: Sizes.radius * 3,
        borderWidth: 1,
        paddingTop: Sizes.padding,
        paddingHorizontal: Sizes.padding,
    },

    placeDescriptionContainer: {
        flex: 1,
        borderWidth: 1,
    },
});

export default styles;
