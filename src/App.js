import './App.css';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux'
import { reducer } from './reducer'
import View from './View'
import {watchAgeUp} from './sagas/saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watchAgeUp)

function App() {
  return (
    <Provider store={store}>
      <View />
    </Provider>
  );
}

export default App;
