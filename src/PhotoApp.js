import { StatusBar } from "expo-status-bar";
import Navigaiton from "./navigations/Navigation";
import { LogBox } from "react-native";
import { UserProvider } from "./contexts/UserContext";

const PhotoApp = () => {
  LogBox.ignoreLogs(["AsyncStorage has been extracted from react-native core"]);
  return (
    <UserProvider>
      <StatusBar style="dark" />
      <Navigaiton />
    </UserProvider>
  );
};

export default PhotoApp;
