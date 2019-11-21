import AsyncStorage from '@react-native-community/async-storage';

export const saveItemAsyncStorage = async (name, value) => {
  await AsyncStorage.setItem(name, value);
};

export const getItemAsyncStorage = async name => {
  return await AsyncStorage.getItem(name);
};

export const removeItemAsyncStorage = async name => {
  await AsyncStorage.removeItem(name);
};
