import * as React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  Switch,
  Button,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

const { width, height } = Dimensions.get("window");
const cardWidth = Math.floor(width * 0.82);

type SelectEntryProps = {
  title: string;
  value: boolean;
  dispatch: Function;
};

function SelectEntry({ title, value, dispatch }: SelectEntryProps) {
  const thumbColor = value ? "#7adf8d" : "#3e6d47";
  return (
    <View style={{ ...styles.choiceEntry }}>
      <View style={{ ...styles.choiceBox }}>
        <Switch
          trackColor={{ false: "#111", true: "#000" }}
          thumbColor={thumbColor}
          ios_backgroundColor="#2E3138"
          onValueChange={() => {
            dispatch({ type: "setSelection", data: title });
          }}
          value={value}
        />
      </View>
      <View style={{ ...styles.transparent }}>
        <Text style={{ ...styles.choiceName }}>{title}</Text>
      </View>
    </View>
  );
}

const initialState = {
  userSelections: {
    youtube: true,
    vimeo: true,
    bing: true,
    filter: true,
  },
};

const reducer = (state, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  const which = action.data.toLowerCase();

  switch (action.type) {
    case "setSelection":
      newState.userSelections[which] = !newState.userSelections[which];
      console.log("reducer setSelection ", newState.userSelections[which]);
      return newState;

    default:
      throw new Error();
  }
};

export default function TabOneScreen() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const onSearchPress = () => {
    console.log("search pressed");
  };

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
        <SelectEntry
          title={"youtube"}
          value={state.userSelections.youtube}
          dispatch={dispatch}
        />
        <SelectEntry
          title={"vimeo"}
          value={state.userSelections.vimeo}
          dispatch={dispatch}
        />
        <SelectEntry
          title={"bing"}
          value={state.userSelections.bing}
          dispatch={dispatch}
        />
        <View
          style={{
            borderTopColor: "#474b51",
            borderBottomColor: "black",
            borderTopWidth: 1,
            borderBottomWidth: 1,
            marginVertical: 15,
          }}
        />
        <SelectEntry
          title={"filter"}
          value={state.userSelections.filter}
          dispatch={dispatch}
        />
      </View>

      <View
        style={{
          ...styles.card,
          ...styles.transparent,
          marginTop: 40,
          padding: 0,
        }}
      >
        <Text
          style={{
            fontSize: 52,
            position: "absolute",
            left: -15,
            top: -15,
            zIndex: 1,
          }}
        >
          🔍
        </Text>
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
      <View
        style={{
          ...styles.card,
          ...styles.transparent,
          marginTop: 40,
          padding: 0,
        }}
      >
        <Button
          title="Go Search"
          onPress={onSearchPress}
          color="#1DB584"
          accessibilityLabel="Do the search for term entered"
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
    padding: 7,
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
