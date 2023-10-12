import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
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