import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store/store';

import Loading from './src/components/Loading/Loading';
import { Navigation } from './src/navigation/Navigation';

const App: React.FunctionComponent = () => (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Navigation/>
      </PersistGate>
    </Provider>
);

export default App;
