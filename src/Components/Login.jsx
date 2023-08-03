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
import { EmailRegexp } from '../Constants/constants';
import { useRef, useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [passVisibility, setPassVisibility] = useState(false);
  const [inputFocus, setInputFocus] = useState('');

  const refInputEmail = useRef();
  const refInputPass = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    if (EmailRegexp.test(email) === false) {
      alert('Електронна пошта не валідна');
      return;
    }
    if (password.length < 8) {
      alert('Пароль повинен мати мін 8 символів');
      return;
    }
    const validForm = { email, password };
    console.log('form:', validForm);
    refInputEmail.current.clear();
    refInputPass.current.clear();
    setEmail('');
    setPassword('');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        keyboardVerticalOffset="-260"
      >
        <View style={styles.inner}>
          <Text style={styles.header}>Увійти</Text>
          <TextInput
            ref={refInputEmail}
            style={
              inputFocus === 'email'
                ? [styles.input, styles.inputActive]
                : styles.input
            }
            onChangeText={(e) => setEmail(e)}
            value={email}
            autoComplete="email"
            autoCapitalize="none"
            placeholder="Адреса електронної пошти"
            keyboardType="email-address"
            onFocus={() => {
              setInputFocus('email');
            }}
            onBlur={() => {
              setInputFocus('');
            }}
            onSubmitEditing={() => {
              refInputPass.current.focus();
            }}
          />
          <TextInput
            ref={refInputPass}
            style={
              inputFocus === 'password'
                ? [styles.input, styles.inputActive]
                : styles.input
            }
            onChangeText={(e) => setPassword(e)}
            value={password}
            autoComplete="password"
            placeholder="Пароль"
            keyboardType="default"
            onFocus={() => {
              setInputFocus('password');
            }}
            onBlur={() => {
              setInputFocus('');
            }}
            secureTextEntry={!passVisibility}
          />
          <TouchableOpacity onPress={() => setPassVisibility(!passVisibility)}>
            <Text style={styles.btnPass}>
              {passVisibility ? 'Приховати' : 'Показати'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              !email || !password
                ? styles.btnContainer
                : [styles.btnContainer, styles.btnContainerActive]
            }
            disabled={!email || !password}
            onPress={onSubmit}
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
    paddingBottom: 145,
    paddingTop: 32,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#ffffff',
  },
  header: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 33,
  },
  input: {
    position: 'relative',
    height: 50,
    borderWidth: 1,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6',
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  inputActive: {
    borderColor: '#FF6C00',
    backgroundColor: '#ffffff',
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
    backgroundColor: '#999999',
  },
  btnContainerActive: { backgroundColor: '#FF6C00' },
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
