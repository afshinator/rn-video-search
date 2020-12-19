import * as React from "react";
import { StyleSheet, ImageBackground, Dimensions, Switch } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
// import CheckBox from "@react-native-community/checkbox";

const { width, height } = Dimensions.get("window");
const cardWidth = Math.floor(width * 0.82);

const initialState = {
  userSelections: {
    youtube: true,
    vimeo: true,
    bing: true,
  },
};

const reducer = (state, action) => {
  return state;
};

export default function TabOneScreen() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  // <View style={styles.container}>
  {
    /* <ImageBackground
        source={require("../assets/images/bg.png")}
        style={styles.backgroundImage}
      > */
  }
  return (
    <LinearGradient
      colors={["#3E434E", "#1A1C1F", "#34383E"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={{ ...styles.card, ...styles.transparent, marginTop: 40 }}>
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 15,
          }}
        >
          Select Providers
        </Text>
        <View style={{ ...styles.choiceEntry }}>
          <View style={{ ...styles.choiceBox }}>
            <Switch
              trackColor={{ false: "#2E3138", true: "#3E434E" }}
              thumbColor={"#7ADF8D"}
              ios_backgroundColor="#2E3138"
              // onValueChange={toggleSwitch}
              // value={isEnabled}
            />
          </View>
          <View style={{ ...styles.transparent }}>
            <Text style={{ ...styles.choiceName }}>Youtube</Text>
          </View>
        </View>
        <View style={{ ...styles.choiceEntry }}>
          <View style={{ ...styles.choiceBox }}>
            <Text>🎞</Text>
          </View>
          <View style={{ ...styles.transparent }}>
            <Text style={{ ...styles.choiceName }}>Vimeo</Text>
          </View>
        </View>
        <View style={{ ...styles.choiceEntry }}>
          <View style={{ ...styles.choiceBox }}>
            <Text>🎞</Text>
          </View>
          <View style={{ ...styles.transparent }}>
            <Text style={{ ...styles.choiceName }}>Bing</Text>
          </View>
        </View>
        <View
          style={{
            borderTopColor: "#474b51",
            borderBottomColor: "black",
            borderTopWidth: 1,
            borderBottomWidth: 1,
            marginVertical: 15,
          }}
        />
        <View style={{ ...styles.choiceEntry }}>
          <View style={{ ...styles.choiceBox }}>
            <Text>🎞</Text>
          </View>
          <View style={{ ...styles.transparent }}>
            <Text style={{ ...styles.choiceName }}>Filter Duplicates</Text>
          </View>
        </View>
      </View>

      {/* <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          /> */}

      <View
        style={{
          ...styles.card,
          ...styles.transparent,
          marginTop: 40,
          padding: 0,
        }}
      >
        <Text style={{ fontSize: 42, position: 'absolute', top: 0, zIndex:1}}>🔍</Text>
        <TextInput
          placeholder="SEARCH"
          placeholderTextColor="green"
          inlineImageLeft="search_icon"
          style={{
            height: 40,
            borderRadius: 5,
            backgroundColor: "#2E3138",
            borderColor: "gray",
            borderWidth: 1,
            color: "white",
            paddingLeft: 45,
          }}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  card: {
    backgroundColor: "transparent",
    width: cardWidth,
    alignSelf: "center",
    borderRadius: 15,
    borderColor: "#474b51",
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "column",
    // height: 100,
    marginTop: 2,
    padding: 15,
    // backgroundColor: "#ffeaae",
    shadowColor: "#1A1C1F",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    // elevation: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'stretch'
  },
  choiceBox: {
    backgroundColor: "transparent",
  },
  choiceEntry: {
    flexDirection: "row",
    // marginBottom: 5,
    backgroundColor: "transparent",
    padding: 10,
  },
  choiceName: {
    fontSize: 20,
    marginLeft: 15,
    color: "white",
  },
  transparent: {
    backgroundColor: "transparent",
  },
});
