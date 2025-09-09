import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#1E1E30",
    alignItems: "center",
    justifyContent: "center",
  },
  cameraBox: {
    position: "relative",
    width: 350,
    height: "90%",
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#ffffff",
    borderRadius: 15,
  },
  triangleCorner: {
    position: "absolute",
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderTopColor: "#ffffff",
    borderRightWidth: 20,
    borderRightColor: "transparent",
  },
  topRight: {
    top: 0,
    right: 0,
    transform: [{rotate: "90deg"}],
  },
  bottomLeft: {
    top: 0,
    right: 0,
    transform: [{rotate: "-90deg"}],
  },
  bottomRight: {
    top: 0,
    right: 0,
    transform: [{rotate: "180deg"}],
  }
})