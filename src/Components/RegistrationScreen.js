import {
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  TouchableOpacity,
} from 'react-native';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

import { useRef, useState } from 'react';

export default function RegistrationScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passVisibility, setPassVisibility] = useState(false);

  const [inputFocus, setInputFocus] = useState('');

  const refInputName = useRef();
  const refInputEmail = useRef();
  const refInputPass = useRef();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        keyboardVerticalOffset="-170"
      >
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
            ref={refInputName}
            style={styles.input}
            onChangeText={setName}
            value={name}
            placeholder="Логін"
            onFocus={() => {
              setInputFocus('name');
            }}
            onBlur={() => {
              setInputFocus('');
            }}
            borderColor={inputFocus === 'name' ? '#FF6C00' : '#E8E8E8'}
            onSubmitEditing={() => {
              refInputEmail.current.focus();
            }}
          />
          <TextInput
            ref={refInputEmail}
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            autoComplete="email"
            placeholder="Адреса електронної пошти"
            keyboardType="email-address"
            onFocus={() => {
              setInputFocus('email');
            }}
            onBlur={() => {
              setInputFocus('');
            }}
            borderColor={inputFocus === 'email' ? '#FF6C00' : '#E8E8E8'}
            onSubmitEditing={() => {
              refInputPass.current.focus();
            }}
          />
          <TextInput
            ref={refInputPass}
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Пароль"
            keyboardType="default"
            onFocus={() => {
              setInputFocus('password');
            }}
            onBlur={() => {
              setInputFocus('');
            }}
            borderColor={inputFocus === 'password' ? '#FF6C00' : '#E8E8E8'}
            secureTextEntry={!passVisibility}
          />
          <TouchableOpacity onPress={() => setPassVisibility(!passVisibility)}>
            <Text style={styles.btnPass}>
              {passVisibility ? 'Приховати' : 'Показати'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.btnContainer,
              {
                backgroundColor:
                  !name || !email || !password ? '#999999' : '#FF6C00',
              },
            ]}
            disabled={!name || !email || !password}
            onPress={() => {
              refInputName.current.clear();
              refInputEmail.current.clear();
              refInputPass.current.clear();
              setName('');
              setEmail('');
              setPassword('');
            }}
          >
            <Text style={styles.btnText}>Зареєстуватися</Text>
          </TouchableOpacity>
          <Text style={styles.linkText}>Вже є акаунт? Увійти</Text>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  inner: {
    position: 'relative',
    paddingHorizontal: 16,
    paddingBottom: 66,
    paddingTop: 92,
    borderRadius: 25,
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
    position: 'relative',
    height: 50,
    borderWidth: 1,
    paddingHorizontal: 16,

    backgroundColor: '#F6F6F6',
    borderBottomWidth: 1,
    marginBottom: 16,
  },

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
    padding: 16,
    marginTop: 27,
    borderRadius: 100,
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
