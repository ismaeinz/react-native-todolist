import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Task({ text }) {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <Text style={styles.itemText}>{text}</Text>
        <View style={styles.square}></View>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "blue",
    opacity: 0.4,
  },
  itemText: {
    maxWidth: "80%",
    margin: 10,
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "brown",
    borderWidth: 2,
    borderRadius: 5,
  },
});
