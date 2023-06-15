import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import Asset from "expo-asset";
import { initFirebase } from "../api/firebase";

const Navigaiton = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Asset.fromModule(
          require("C:/rn-photo/assets/cover.png")
        ).downloadAsync();
        const app = initFirebase();
      } catch (e) {
        console.log(e);
      } finally {
        setIsReady(true);
      }
    })();
  }, []);

  const onReady = async () => {
    await SplashScreen.hideAsync();
  };

  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer onReady={onReady}>
      <AuthStack />
    </NavigationContainer>
  );
};

export default Navigaiton;
