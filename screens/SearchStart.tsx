import * as React from "react";
import {
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  Switch,
  Button,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { FunctionComponent } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { DrawerOneParamList } from "../types";

const { width, height } = Dimensions.get("window");
const cardWidth = Math.floor(width * 0.82);

type SelectEntryProps = {
  who: string;
  value: boolean;
  dispatch: Function;
};

const SelectEntry: FunctionComponent<SelectEntryProps> = ({
  who,
  value,
  dispatch,
  children,
}) => {
  const thumbColor = value ? "#20bf55" : "#3e6d47";
  return (
    <View style={{ ...styles.choiceEntry }}>
      <View style={{ ...styles.choiceBox }}>
        <Switch
          trackColor={{ false: "#111", true: "#000" }}
          thumbColor={thumbColor}
          ios_backgroundColor="#2E3138"
          onValueChange={() => {
            dispatch({ type: "setSelection", data: who });
          }}
          value={value}
        />
      </View>
      <View style={{ ...styles.transparent }}>{children}</View>
    </View>
  );
};

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

type Props = StackScreenProps<DrawerOneParamList, "SearchStart">;

export default function SearchStart({ navigation }: Props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const onSearchPress = () => {
    console.log("search pressed");
  };

  return (
    // <LinearGradient
    //   colors={["#3E434E", "#1A1C1F", "#34383E"]}
    //   start={{ x: 0, y: 0 }}
    //   end={{ x: 1, y: 1 }}
    //   style={styles.container}
    // >
    <LinearGradient
      colors={["#537895", "#09203f"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View
        style={{
          backgroundColor: "rgba(0,0,0,0.4)",
          flexDirection: "row",
          marginTop: 40,
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../assets/images/vidsearch1.png")}
          style={{ width: 100, resizeMode: "contain" }}
        />
        <View
          style={{
            backgroundColor: "transparent",
            marginLeft: 20,
            marginTop: 25,
          }}
        >
          <Text
            style={{
              color: "#d5573b",
              fontSize: 42,
              fontWeight: "bold",
              lineHeight: 42,
            }}
          >
            Video
          </Text>
          <Text
            style={{
              color: "#f6f1d1",
              fontSize: 42,
              fontWeight: "bold",
              lineHeight: 42,
            }}
          >
            Search
          </Text>
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

      <View
        style={{
          ...styles.card,
          ...styles.transparent,
          marginTop: 20,
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
          placeholder="Enter your search term(s)"
          placeholderTextColor="#88bb92"
          inlineImageLeft="search_icon"
          style={{
            height: 40,
            borderRadius: 5,
            backgroundColor: "#2E3138",
            borderColor: "gray",
            borderWidth: 1,
            color: "#f6f1d1",
            paddingLeft: 45,
            fontSize: 20,
          }}
        />
      </View>

      {/* <LinearGradient
        colors={["#2a2e33", "#25282c"]}
        style={{ ...styles.card, marginTop: 20 }}
      > */}
      <LinearGradient
        colors={["#4b6f8c", "#284563"]}
        style={{ ...styles.card, marginTop: 30 }}
      >
        <Text
          style={{
            color: "#f6f1d1",
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 15,
          }}
        >
          Select Providers
        </Text>
        <SelectEntry
          who={"youtube"}
          value={state.userSelections.youtube}
          dispatch={dispatch}
        >
          <Text style={{ ...styles.choiceName }}>Youtube</Text>
        </SelectEntry>

        <SelectEntry who={"vimeo"} value={state.userSelections.vimeo}>
          <Text style={{ ...styles.choiceName }}>Vimeo</Text>
        </SelectEntry>
        <SelectEntry
          who={"bing"}
          value={state.userSelections.bing}
          dispatch={dispatch}
        >
          <Text style={{ ...styles.choiceName }}>Bing</Text>
        </SelectEntry>
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
          who={"filter"}
          value={state.userSelections.filter}
          dispatch={dispatch}
        >
          <Text style={{ ...styles.choiceName }}>filter duplicates</Text>
        </SelectEntry>
      </LinearGradient>
      {/* </View> */}

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
          onPress={() => navigation.navigate("SearchStats")}
          color="#20bf55"
          accessibilityLabel="search providers from above for term you entered"
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

    elevation: 1,
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
    marginLeft: 20,
    backgroundColor: "transparent",
    padding: 7,
  },
  choiceName: {
    fontSize: 20,
    marginLeft: 15,
    color: "#f6f1d1",
  },
  transparent: {
    backgroundColor: "transparent",
  },
});
