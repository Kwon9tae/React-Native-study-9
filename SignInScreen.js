import { Image, StyleSheet, View } from 'react-native';
import Input from '../components/Input';

const SignInScreen = () => {
  return (
    <View>
      <Image
        source={require('C:/rn-todo/ch4_assets/main.png')}
        style={styles.image}
      />

      <Input title={'이메일'} placeholder="your@email.com" />
      <Input title={'비밀번호'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default SignInScreen;
