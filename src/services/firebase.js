import firebase from 'react-native-firebase';

export async function authWithEmailAndPassword(email, password) {
  let res;

  try {
    res = await firebase
      .auth()
      .signInWithEmailAndPassword(email.trim(), password);
  } catch (error) {
    res = { error };
  }

  return res;
}
