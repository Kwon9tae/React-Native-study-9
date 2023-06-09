import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import SignInScreen from './screens/SignInScreen';

const ToDoApp = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SignInScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ToDoApp;
