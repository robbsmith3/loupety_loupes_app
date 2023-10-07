//Majority of code was found online from a YouTube video

import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  userGreeting: {
    fontFamily: FONT.regular,       //altered some of the design features of the repo found online
    fontSize: SIZES.xLarge,
    color: COLORS.secondary,
    textAlign: "center"
  },
  presetMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xxLarge,
    color: COLORS.primary,
    marginTop: 2,
    textAlign: "center"
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.xxLarge,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.large,
    paddingHorizontal: SIZES.large,
    borderRadius: SIZES.xxLarge,
    borderWidth: 2,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
  tabText: (activeJobType, item) => ({
    textAlign: "center",
    fontFamily: FONT.xLarge,
    color: activeJobType === item ? COLORS.secondary : COLORS.black,
  }),
});

export default styles;
