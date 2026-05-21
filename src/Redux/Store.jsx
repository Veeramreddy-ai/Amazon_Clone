import { createStore, combineReducers } from 'redux';
import cartReducer from './Reducer/Reducer';


const rootReducer = combineReducers({
    cart: cartReducer
  });
  
  const Store = createStore(rootReducer);
  
export default Store;
  