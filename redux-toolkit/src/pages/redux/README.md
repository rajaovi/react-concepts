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
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({ reducer: reducer });
```
#### Providers
Provider makes the Redux store available to any part of your app. This allows you to avoid passing the store as a prop to each component. 
Wrapp your app with provider and pass the store
'./store' contains your [reducers](#reducerseducers)
```
import { Provider } from "react-redux";
import reducer from "./store";
<Provider store={store}>
    <App />
</Provider>
```
#### Reducers
Reducer is a function that updates an application's state in response to user actions. Reducers are pure functions that are a key part of Redux state management
```

```