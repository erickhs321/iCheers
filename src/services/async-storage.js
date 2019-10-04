import AsyncStorage from '@react-native-community/async-storage';

export const setUserToken = async token => {
  await AsyncStorage.setItem('token', token);
};

export const getUserToken = async () => {
  return await AsyncStorage.getItem('token');
};
