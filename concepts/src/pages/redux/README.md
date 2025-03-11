# React Redux 

### What is Redux
React Redux is a tool that helps manage and share data (state) across different parts of a React application. It acts like a central storage, making it easier to handle complex data flows, especially in larger apps. Instead of passing data directly between components, they can access and update it through the Redux store. 

### How to use it:
#### Package Install
- npm: `npm install redux react-redux`
- Yarn: `yarn add redux react-redux`

#### Create Store
Create store in main / index root file
```
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({ reducer: reducer });
```