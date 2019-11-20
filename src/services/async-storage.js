import AsyncStorage from '@react-native-community/async-storage';

export const setUserUid = async uid => {
  await AsyncStorage.setItem('uid', uid);
};

export const getUserUid = async () => {
  return await AsyncStorage.getItem('uid');
};

export const removeUserUid = async () => {
  return await AsyncStorage.removeItem('uid');
};
