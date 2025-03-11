# React Redux 

### What is Redux
React Redux is a tool that helps manage and share data (state) across different parts of a React application. It acts like a central storage, making it easier to handle complex data flows, especially in larger apps. Instead of passing data directly between components, they can access and update it through the Redux store. 

### How to use it:
#### Package Install
- npm: `npm install redux react-redux`
- Yarn: `yarn add redux react-redux`

#### What is a Store
Store is a JavaScript object that stores an application's state. It's the central hub for an app's state, and is considered the single source of truth for that state.
Create store in main / index root file
```
import { createStore } from "redux";
const store = createStore(reducer, undefined);
```
#### Providers
Provider makes the Redux store available to any part of your app. This allows you to avoid passing the store as a prop to each component. 
Wrapp your app with provider and pass the store
'./store' contains your [reducers](#reducerseducers)
```
import { Provider } from "react-redux";
import reducer from "./store/reducers";
<Provider store={store}>
    <App />
</Provider>
```
#### Reducers
Reducer is a function that updates an application's state in response to user actions. Reducers are pure functions that are a key part of Redux state management
- combineReucer -  combine all your reducer and returns a single combined reducer function
```
import { combineReducers } from "redux";
import posts from "./posts";
import users from "./users";

export default combineReducers({
  posts,
  users,
});

// posts reducer
const initialState = {
  posts: [],
};

export default function reducer(state = initialState) {
  return state;
};

// user reducer
const initialState = {
  data: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER": {
      return { ...state, data: [...state.data, action.payload] };
    }
    default:
      return state;
  }
};

export default reducer;

```

#### How to use Redux inside functional component
- useSelector - allows you to access the state in your functional component
- useDispatch - allows you to dispatch an action in your functional component

```
import { useDispatch, useSelector } from "react-redux";

// Here you can access you redux state from store
const users = useSelector((state) => state.users.data);

// Update your state using dispatch method.
const dispatch = useDispatch();
const addUser = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_USER", payload: userName });
};

<button onClick={addUser} type="submit">Add User</button>

```

[Refer Code Here](./index.jsx)