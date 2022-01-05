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
        backgroundColor: Colors.white,
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
        backgroundColor: Colors.white,
    },

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
        borderBottomWidth: 0.5,
        borderColor: 'lightgrey',
        padding: Sizes.padding,
        borderWidth: 1,
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
        width: 50,
        height: 50,
        borderRadius: Sizes.radius * 3,
        position: 'absolute',
        bottom: 30,
        right: 50,
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

    //SubscribeButton
    defaultSubscribeButton: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderRadius: Sizes.radius,
        borderColor: Colors.primary,
    },

    defaultSubscribeIcon: {
        width: 20,
        height: 20,
        //Image에 color를 주면 에러가 떠서 해당 부분 커맨트 처리했습니다. 추후 확인후 삭제 부탁드립니다.
        // color: Colors.primary,
        marginRight: Sizes.base * 0.5,
    },

    defaultSubscribeText: {
        ...Typography.body3,
        color: Colors.primary,
    },

    //StoreCard

    storCardContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: Sizes.padding,
    },

    storeCardImage: {
        width: 80,
        height: '100%',
        borderRadius: Sizes.radius,
    },

    storeCardDetailContainer: {
        flex: 1,
        height: '100%',
        paddingLeft: Sizes.padding,
        paddingVertical: Sizes.padding * 0.3,
    },

    storeCardDealTypeContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
        width: 25,
        height: 17,
        backgroundColor: Colors.primary,
        borderRadius: Sizes.radius,
    },
    storeCardDealTypeContainerImg: {
        width: 11,
        height: 11,
        marginTop: 13,
    },

    storeCardBookingButtonContainer: {
        width: 70,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: Colors.primary,
    },

    //DealCard

    dealCardContainer: {
        flex: 1,
        height: 200,
        padding: Sizes.padding,
        borderRadius: Sizes.radius,
        backgroundColor: Colors.white,
        marginTop: 10,
        marginBottom: 10,
    },

    dealCardDetailContainer: {
        flex: 0.8,
        paddingLeft: Sizes.padding * 1.5,
        paddingRight: Sizes.padding * 1.5,
        paddingVertical: Sizes.padding * 1.2,
    },

    dealCardDDayWrapper: {
        borderRadius: Sizes.radius * 1.5,
        borderWidth: 1,
        borderColor: Colors.primary,
        paddingHorizontal: 10,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dealCardDDayText: {
        ...Typography.bold5,
        color: Colors.primary,
    },
    dealCardImageWrapper: {
        flex: 0.2,
        backgroundColor: Colors.lightGray2,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: Sizes.radius,
        borderBottomRightRadius: Sizes.radius,
    },
    dealCardImage: {
        width: 45,
        height: 45,
        borderRadius: Sizes.radius * 2,
        alignItems: 'center',
        justifyContent: 'center',
    },

    //MessageCard
    messageCardContainer: {
        marginBottom: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: Sizes.radius,
        borderColor: Colors.gray,
    },

    messageCardHeaderContainer: {
        width: '100%',
        backgroundColor: Colors.white,
        borderTopLeftRadius: Sizes.radius,
        borderTopRightRadius: Sizes.radius,
        padding: Sizes.padding,
    },

    messageCardTitleWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    messageCardBodyContainer: {
        width: '100%',
        backgroundColor: Colors.lightGray2,
        padding: Sizes.padding,
        borderBottomLeftRadius: Sizes.radius,
        borderBottomRightRadius: Sizes.radius,
    },

    //MyDealCard

    myDealCardContainer: {
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: Colors.green,
        borderRadius: Sizes.radius,
        marginVertical: 10,
    },

    myDealCardDetailContainer: {
        paddingHorizontal: Sizes.padding * 1.5,
        paddingVertical: Sizes.padding,
        flex: 2,
    },

    myDealCardDetailDateWrapper: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
    },

    myDealCardDDayWrapper: {
        borderRadius: 50,
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderWidth: 1,
        borderColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },

    myDealCardImageWrapper: {
        flex: 1,
        backgroundColor: Colors.green,
        borderTopRightRadius: Sizes.radius,
        borderBottomRightRadius: Sizes.radius,
        justifyContent: 'center',
        alignItems: 'center',
    },

    //MyStoreCard
    myStoreCardContainer: {
        flex: 1,
        marginTop: 15,
        marginBottom: 8,
    },

    myStoreCardImage: {
        width: 80,
        borderRadius: Sizes.radius * 0.5,
    },

    myStoreCardBookingButtonWrapper: {
        width: 80,
        borderRadius: Sizes.radius * 0.5,
        alignItems: 'center',
        borderWidth: 1,
        paddingVertical: 10,
        borderColor: Colors.primary,
    },

    myStoreCardDetailContainer: {
        flex: 0.94,
    },

    myStoreCardDealTypeContainer: {
        alignItems: 'center',
        marginRight: 5,
        width: 20,
        paddingVertical: 1,
        backgroundColor: Colors.primary,
        borderRadius: Sizes.radius,
    },

    myStoreCardBalanceDealContainer: {
        flexDirection: 'row',
        flex: 0.94,
        borderWidth: 1,
        borderColor: Colors.lightGray,
        borderRadius: Sizes.radius * 0.5,
        height: '100%',
    },

    // sns링크영역
    SNSLinksButtonWrapper: {
        width: '100%',
        height: 46,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#bbb',
        marginBottom: 10,
    },
    //Remove
    RemoveWrapper: {
        position: 'absolute',
        top: -15,
        right: 0,
        zIndex: 1,
    },

    RemovebuttonStyle: {
        width: 30,
        height: 30,
        borderWidth: 0.5,
        borderRadius: Sizes.radius * 2,
        borderColor: Colors.lightGray,
    },

    /*******************
     **   @QrModal    **
     *******************/
    Modal: {
        flex: 1,
        backgroundColor: '#000000AA',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ModalTop: {
        width: Sizes.width * 0.75,
        paddingHorizontal: Sizes.padding * 2,
        paddingVertical: Sizes.padding * 3.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        overflow: 'hidden',
    },
    ModalBottom: {
        backgroundColor: Colors.white,
        padding: Sizes.padding * 3,
        width: Sizes.width * 0.75,
    },
    CloseBtn: {
        width: 200,
        paddingVertical: 10,
        borderRadius: Sizes.radius * 2,
        borderWidth: 1,
        borderColor: Colors.lightGray,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    /*******************
     **   @Explore    **
     *******************/

    exploreHeaderContainer: {
        flex: 1,
        paddingHorizontal: Sizes.padding,
        zIndex: 1,
    },
    exploreHeaderSectionContainer: {
        flex: 1,
        marginBottom: Sizes.padding,
    },

    exploreLogoWrapper: {
        justifyContent: 'center',
    },

    //text도 style.js
    exploreLogoText: {
        ...Typography.exploreBold1,
        color: Colors.primary,
    },

    exploreUserWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    exploreTopicon: {
        width: 35,
        height: 35,
        opacity: 0.3,
    },

    exploreUserName: {
        ...Typography.explorebold2,
        textAlign: 'right',
    },

    exploreUserEmail: {
        ...Typography.body6,
        textAlign: 'right',
        color: Colors.exploreGray5,
    },
    exploreUserMessageContainer: {
        position: 'absolute',
        right: -7,
        top: -3,
        height: 16,
        width: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Sizes.radius,
        backgroundColor: Colors.primary,
    },
    exploreUserMessage: {
        ...Typography.body5,
        color: Colors.white,
    },
    exploreSearchBarWrapper: {
        width: '100%',
        paddingHorizontal: Sizes.padding * 0.2,
        borderRadius: Sizes.radius * 0.8,
        borderWidth: 1,
        borderColor: Colors.exploreGray5,
    },
    exploreSearchBarText: {
        ...Typography.body4,
        paddingVertical: 8,
        paddingLeft: 12,
        flex: 1,
    },
    exploreSelectButtonsContainer: {
        marginBottom: Sizes.padding,
    },
    exploreBodyContainer: {
        backgroundColor: Colors.exploreGray1,
    },
    exploreFilterWrapper: {
        paddingVertical: 10,
        paddingHorizontal: Sizes.padding,
        backgroundColor: Colors.exploreGray1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1,
    },

    exploreListContainer: {
        backgroundColor: Colors.white,
        paddingHorizontal: Sizes.padding,
    },

    exploreMapContainer: {
        flex: 1,
        height: 375,
    },

    exploreMapButtonWrapper: {
        position: 'absolute',
        bottom: 30,
        right: Sizes.padding * 0.5,
        width: 60,
        height: 120,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    exploreFilterDropDownPicker: {
        width: '100%',
        height: 35,
        borderColor: 'transparent',
    },

    exploreSearchBarButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    exploreSearchBarButtonStyle: {
        width: 40,
        height: 25,
        marginRight: 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Sizes.radius * 0.5,
        backgroundColor: Colors.lightGray2,
    },

    SearchBarDropDownContainer: {
        position: 'absolute',
        left: -1,
        right: 0,
        top: 39,
        maxHeight: 200,
        paddingVertical: Sizes.base,
        backgroundColor: Colors.white,
        borderWidth: 0.5,
        borderColor: Colors.lightGray,
        borderRadius: Sizes.radius * 0.8,
    },

    /********************
     **     @Filter    **
     ********************/

    filterRegionContainer: {
        flex: 1,
        zIndex: 2,
    },
    filterCategoryContainer: {
        flex: 1,
        zIndex: 1,
    },

    filterDistanceButton: {
        height: 45,
        width: '23%',
        borderWidth: 1,
        borderColor: Colors.lightGray,
        borderRadius: Sizes.radius,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    filterSubscribeButtonContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        paddingHorizontal: Sizes.padding * 1.5,
    },

    /********************
     **     @Store    **
     ********************/

    storeSectionHeaderContainer: {
        position: 'absolute',
        top: Sizes.padding,
        left: 0,
        width: '100%',
        paddingHorizontal: Sizes.padding,
    },

    storeIconbuttonStyle: {
        borderWidth: 1,
        borderColor: Colors.lightGray,
        width: 35,
        height: 35,
        marginRight: 5,
    },

    storeIconSubscribedButtonStyle: {
        borderWidth: 1,
        borderColor: Colors.primary,
        width: 35,
        height: 35,
        marginRight: 5,
    },

    storeDotsContainer: {
        position: 'absolute',
        bottom: -35,
        left: '46%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Sizes.padding / 2,
        marginBottom: Sizes.padding * 3,
        height: Sizes.padding,
    },
    storeDot: {
        borderRadius: Sizes.radius,
        backgroundColor: Colors.primary,
        marginHorizontal: Sizes.radius / 2,
    },

    storeAddressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    storeDealButtonContainer: {
        flexDirection: 'row',
        height: 80,
        borderWidth: 0.5,
        borderColor: Colors.lightGray,
        borderRadius: Sizes.radius,
        marginVertical: Sizes.padding,
    },

    storeBookingContainer: {
        paddingTop: Sizes.padding,
    },

    storeBookingDetailSelectionContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    storeBookingIconWrapper: {
        width: '30%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: Sizes.radius * 0.5,
        borderBottomLeftRadius: Sizes.radius * 0.5,
        backgroundColor: Colors.lightGray2,
    },

    storeBookingButtonWrapper: {
        height: 35,
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: Colors.lightGray,
        borderRadius: Sizes.radius * 0.5,
    },

    storeBookingDropDownPicker: {
        width: '70%',
        height: '100%',
        borderColor: 'transparent',
    },

    storeBookingInfoContainer: {
        width: '100%',
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    storeMenuBookingSelectContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 40,
        backgroundColor: Colors.lightGray2,
        borderRadius: Sizes.radius * 0.8,
    },
    storeMenuBookingSelectWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Sizes.radius * 0.8,
        height: 40,
        flex: 1,
    },

    /***************************
     **    @BookingDetail     **
     ***************************/

    bookingDetailSpecificInfoTextWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: Sizes.padding,
    },

    bookingDetailMessageTextWrapper: {
        paddingVertical: Sizes.padding,
    },

    bookingDetailRefernceContainer: {
        width: '100%',
        borderWidth: 0.5,
        borderColor: Colors.primary,
        borderRadius: Sizes.radius * 3,
    },
    bookingDetailRefernceContainerText: {
        ...Typography.body4,
        color: Colors.primary,
        paddingLeft: Sizes.padding * 2,
    },

    bookingDetailConfirmButtonContainer: {
        width: '100%',
        height: 50,
    },
    bookingDetailConfirmButtonWrapper: {
        width: Sizes.width * 0.425,
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: Colors.darkGray,
        borderRadius: Sizes.radius * 0.5,
    },

    /*****************
     **    @Deal    **
     *****************/

    dealBodyContainer: {
        flex: 1,
        backgroundColor: Colors.white,
    },

    dealInfoContainer: {
        paddingHorizontal: Sizes.padding * 0.75,
        paddingTop: Sizes.padding * 0.75,
    },

    dealInfoSummary: {
        width: '100%',
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.lightGray,
        borderRadius: Sizes.radius,
        paddingHorizontal: Sizes.padding * 1.25,
        paddingVertical: Sizes.padding * 1.25,
    },

    dealInfoImage: {
        width: 50,
        height: 50,
        borderRadius: Sizes.radius * 2,
        marginRight: Sizes.padding,
    },

    dealInfoTextWrapper: {
        maxHeight: 45,
    },

    dealInfoPeriodWrapper: {
        //width가 '100%'적용이 안되서 임의로 235을 넣어둠.
        width: 235,
    },

    dealInfoDDayWrapper: {
        width: 40,
        height: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: Colors.primary,
        borderRadius: Sizes.radius,
    },

    dealInfoSpecficTextWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingVertical: Sizes.padding,
    },

    dealInfoNoticeContainer: {
        width: '100%',
        paddingHorizontal: Sizes.base,
        paddingVertical: Sizes.padding,
    },
    dealListContainer: {
        paddingHorizontal: Sizes.padding * 1.5,
    },

    dealContainer: {
        zIndex: 1,
    },

    dealWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    /******************
     **   @MyPage   **
     ******************/

    myPageSubSectionHeaderContainer: {
        paddingHorizontal: Sizes.padding * 2.5,
        paddingBottom: Sizes.padding,
    },

    myPageUserName: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    myPageUserNameText: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    myPageUserDetailWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    myPageUserEmail: {
        ...Typography.body6,
        textAlign: 'left',
        color: Colors.darkGray,
    },

    myPageSelectionContainer: {
        paddingVertical: Sizes.padding,
        borderTopWidth: 1,
        borderColor: '#ccc',
    },

    myPageSelectionButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '32%',
    },

    myPageSelectionButtonWrapper: {
        marginTop: 5,
        width: '80%',
        height: 30,
        borderRadius: Sizes.radius,
        backgroundColor: Colors.white,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    myPageMessageContainer: {
        zIndex: 1,
    },

    myPageMessageWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    /******************
     ***  @MyStore  ***
     ******************/

    myStoreContainer: {
        zIndex: 1,
    },

    myStoreWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    /*****************
     ***  @MyDeal  ***
     ******************/
    StoreAddMoreImage: {
        width: 95,
        height: 95,
        borderRadius: Sizes.radius * 5,
        borderWidth: 1,
        borderColor: Colors.lightGray2,
    },
    StoreAddMoreMarker: {
        width: 30,
        height: 30,
        position: 'absolute',
        right: 0,
        top: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: Sizes.radius * 2,
        zIndex: 1,
    },
    /************************
     ***  @MyReservations  ***
     ************************/

    /*********************
     ***   @MyProfile   ***
     *********************/

    myProfileGenderContainer: {
        marginVertical: Sizes.base,
    },

    myProfileGenderButton: {
        width: 80,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Sizes.radius,
        borderWidth: 1,
        borderColor: Colors.primary,
    },

    /******************
     ***   @SignIn   ***
     ******************/

    /******************
     ***   @SignUp   ***
     ******************/
});

export default styles;
