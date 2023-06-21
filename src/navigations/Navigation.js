import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { Asset } from "expo-asset";
import { initFirebase } from "../api/firebase";
import { useUserState } from "../contexts/UserContext";
import MainStack from "./MainStack";
import { onAuthStateChanged } from "../api/auth";

const ImageAssets = [
  require("C:/rn-photo/ch7_assets/ch7_assets/cover.png"),
  require("C:/rn-photo/ch8_assets/home-clock.png"),
  require("C:/rn-photo/ch8_assets/home-map.png"),
  require("C:/rn-photo/ch7_assets/ch7_assets/icon.png"),
];

const Navigaiton = () => {
  const [user, setUser] = useUserState();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();

        await Promise.all(
          ImageAssets.map((image) => Asset.fromModule(image).downloadAsync())
        );
        await Asset.fromModule(
          require("C:/rn-photo/assets/cover.png")
        ).downloadAsync();
        const app = initFirebase();
        const unsubscrible = onAuthStateChanged((user) => {
          if (user) {
            setUser(user);
          }
          setIsReady(true);

          unsubscrible();
        });
      } catch (e) {
        console.log(e);
        setIsReady(true);
      }
    })();
  }, [setUser]);

  const onReady = async () => {
    await SplashScreen.hideAsync();
  };

  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer onReady={onReady}>
      {user.uid ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigaiton;
