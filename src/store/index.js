import '../config/reactotron';
import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import reducers from './modules/rootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const middlewaresEnchancer = applyMiddleware(thunk);

const reactotron = __DEV__ && console.tron.createEnhancer();

const composedMidlewares = __DEV__
  ? compose(middlewaresEnchancer, reactotron)
  : compose(middlewaresEnchancer);

export const store = createStore(persistedReducer, composedMidlewares);
export const persistor = persistStore(store);
