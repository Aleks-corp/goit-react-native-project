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

import { useRef, useState } from 'react';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passVisibility, setPassVisibility] = useState(false);

  const [inputFocus, setInputFocus] = useState('');

  const refInputEmail = useRef();
  const refInputPass = useRef();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        keyboardVerticalOffset="-240"
      >
        <View style={styles.inner}>
          <Text style={styles.header}>Увійти</Text>
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
                backgroundColor: !email || !password ? '#999999' : '#FF6C00',
              },
            ]}
            disabled={!email || !password}
            onPress={() => {
              refInputEmail.current.clear();
              refInputPass.current.clear();
              setEmail('');
              setPassword('');
            }}
          >
            <Text style={styles.btnText}>Увійти</Text>
          </TouchableOpacity>
          <Text style={styles.linkText}>Немає акаунту? Зареєструватися</Text>
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
    paddingBottom: 133,
    paddingTop: 32,
    borderRadius: 25,
    backgroundColor: '#ffffff',
  },
  header: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 33,
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
    padding: 16,
    marginTop: 43,
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
