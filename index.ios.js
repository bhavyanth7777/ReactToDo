// Registers the app 
import {
  AppRegistry,
  View
} from 'react-native';


// Step 1. React-Redux 
import {createStore} from 'redux';
import {Provider} from 'react-redux';

// Step 2. Import reducer
import { reducer } from './src/todoListRedux'; 

// Step 3. Create Store 
const store = createStore(reducer)

// Import the app container component - Smart container
import ReactToDo from './src/ReactToDo';

// Step 4. Wrap the app with provider 
const AppWithStore = () => (
  <Provider store={store}>
    <ReactToDo />
  </Provider>
)

AppRegistry.registerComponent('ReactToDo', () => AppWithStore);
