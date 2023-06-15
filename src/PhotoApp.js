import { StatusBar } from "expo-status-bar";
import Navigaiton from "./navigations/Navigation";
import { LogBox } from "react-native";

const PhotoApp = () => {
  LogBox.ignoreLogs(["AsyncStorage has been extracted from react-native core"]);
  return (
    <>
      <StatusBar style="dark" />
      <Navigaiton />
    </>
  );
};

export default PhotoApp;
