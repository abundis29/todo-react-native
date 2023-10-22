// App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store/store';
import { Navigation } from './src/navigation/Navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { styles } from './AppStyles';
import Loading from './src/components/Loading/Loading';

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
        <GestureHandlerRootView style={styles.gestureHandlerRootView}>
          <Navigation />
        </GestureHandlerRootView>
    </PersistGate>
  </Provider>
);

export default App;
