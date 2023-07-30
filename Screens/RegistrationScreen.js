import {
  View,
  ImageBackground,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import Svg, { Circle, Path, Rect } from 'react-native-svg';
import BGImage from '../Image/PhotoBG.png';
import { useState } from 'react';

export default function RegistrationScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passVisibility, setPassVisibility] = useState(true);

  return (
    <View style={styles.container}>
      <ImageBackground source={BGImage} style={styles.image}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
          keyboardVerticalOffset="-190"
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
              <View style={styles.svgContainer}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="132"
                  height="120"
                  viewBox="0 0 132 120"
                  fill="none"
                >
                  <Rect width="120" height="120" rx="16" fill="#F6F6F6" />
                  <Circle
                    cx="119.5"
                    cy="93.5"
                    r="12"
                    fill="white"
                    stroke="#FF6C00"
                  />
                  <Path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M120 87H119V93H113V94H119V100H120V94H126V93H120V87Z"
                    fill="#FF6C00"
                  />
                </Svg>
              </View>
              <Text style={styles.header}>Реєстрація</Text>
              <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
                placeholder="Логін"
              />
              <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Адреса електронної пошти"
                keyboardType="email-address"
              />
              <View>
                <TextInput
                  style={[styles.input, styles.inputPass]}
                  onChangeText={setPassword}
                  value={password}
                  placeholder="Пароль"
                  keyboardType="default"
                  secureTextEntry={passVisibility}
                />
                <TouchableOpacity
                  onPress={() => setPassVisibility(!passVisibility)}
                >
                  <Text style={styles.btnPass}>
                    {passVisibility ? 'Показати' : 'Приховати'}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnContainer}>
                <TouchableOpacity onPress={() => null}>
                  <Text style={styles.btnText}>Зареєстуватися</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.linkText}>Вже є акаунт? Увійти</Text>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    height: '100%',
  },
  inner: {
    position: 'relative',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingBottom: 66,
    paddingTop: 92,
    borderRadius: '25px 25px 0px 0px',
    backgroundColor: '#ffffff',
  },
  header: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 33,
  },
  svgContainer: {
    position: 'absolute',
    height: 120,
    width: 132,
    top: -60,
    left: '50%',
    transform: [{ translateX: -45 }],
  },
  input: {
    height: 50,
    borderWidth: 1,
    paddingHorizontal: 16,
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6',
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  inputPass: { position: 'relative' },
  btnPass: {
    position: 'absolute',
    top: -52,
    right: 16,
    color: '#1B4371',
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  btnContainer: {
    backgroundColor: '#FF6C00',
    padding: 16,
    marginTop: 27,
    borderRadius: '100px',
  },
  btnText: {
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  linkText: {
    color: '#1B4371',
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    marginTop: 16,
  },
});
