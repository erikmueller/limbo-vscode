import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import { default as middleware, rootReducer  } from './store'
import * as sagas from './here'

const array = [item1, ...others]

export const store: EnhancedStore = configureStore({
  reducer: rootReducer,
  middleware
})

export const persistor = persistStore(store, null, () => {
  sagas.forEach((saga) => runSaga(saga, store.dispatch))

  return store
})

// Some interface
interface Shoe {
  size: number;
  name: string;
}

interface Food {
  type: 'fruit' | 'vegetable';
  name: string;
}

function generateSome<T>(howMany: number): T {
  return {
    size: 10,
    name: 'wes',
  };
}

const unusedVariable;
const used = true

export default async function unreachableCode() {
  return used ? 10 : 9;
}

const myShoe = generateSome<Shoe>(10);

const banana: Food = {
  type: 'fruit',
  name: 'Banana',
};
