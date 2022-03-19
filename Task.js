import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

const Task = (props) => {
  return (
    <View
      style={{
        backgroundColor: props.complete ? "red" : "#ffffff",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
      }}
    >
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text
          style={{ maxWidth: "80%", color: props.check ? "black" : "white" }}
        >
          {props.text}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.check && (
          <>
            <TouchableWithoutFeedback
              onPress={() => props.handlePress(props.index)}
            >
              <Image
                style={{ height: 20, width: 20 }}
                source={require("../assets/check.png")}
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => props.handleRemoveTask(props.index)}
            >
              <Image
                style={{ height: 16, width: 16, marginLeft: 20 }}
                source={require("../assets/close.png")}
              />
            </TouchableWithoutFeedback>
          </>
        )}
        {!props.check && (
          <TouchableWithoutFeedback
            onPress={() => props.handlePress(props.index)}
          >
            <Image
              style={{ height: 16, width: 16 }}
              source={require("../assets/close.png")}
            />
          </TouchableWithoutFeedback>
        )}
        <View style={styles.circular}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
    marginLeft: 20,
  },
});

export default Task;
