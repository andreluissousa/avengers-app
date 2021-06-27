import { NativeModules } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

if (__DEV__) {
  const { scriptURL } = NativeModules.SourceCode;
  const hostName = scriptURL.split('://')[1].split(':')[0];
  const tron = Reactotron.configure({
    host: hostName,
    name: 'Tron APP',
  })
    .useReactNative()
    .use(reactotronRedux())
    .setAsyncStorageHandler(AsyncStorage)
    .connect();

  tron.clear();

  console.tron = tron;
}
