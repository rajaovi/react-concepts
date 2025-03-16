# React Concepts With examples
This project Learning purpose for React Concepts 

[Check here for simple explantion conctps](README_SIMPLE.MD)

## This repo was reference to React major concepts with example:
This will give you some quick idea & examples of React concepts.

### Topics
- [Reconciliation:](#Reconciliation)
- [React Fiber](#react-fiber)

### Reconciliation
When a component re-renders, React creates a new virtual DOM tree and compares it with the previous one. This comparison is done using a diffing algorithm. If there are differences, React calculates the minimal set of changes needed to update the actual DOM. This process is called reconciliation.

##### Reconciliation involves the following steps:
- Rendering - When a component's state or props change, React re-renders the component and creates a new virtual DOM tree.
- Diffing - React compares the new virtual DOM tree with the previous one to identify the differences. This process is called "diffing." 
- Patching - Based on the differences identified during the diffing process, React updates only the necessary parts of the actual DOM. This process is called "patching."

#### Fiber Reconciliation
Priorities:
- Discrete Event: input, click
- user blocking: scroll
- normal prio: data fetch
- low prio: Root change
- lowest prio: pre-render

### React Fiber
[Refrence](https://github.com/acdlite/react-fiber-architecture)
React Fiber significantly enhances the performance and flexibility of React applications, making it easier to build complex UIs while maintaining a smooth user experience.

Fiber is the reconciliation algorithm and rendering engine for React, introduced in React 16. It was a complete rewrite of the original React reconciliation algorithm, which was known as the "stack reconciler." The primary goals of Fiber were to improve the performance and capabilities of React, particularly in handling complex user interfaces and animations.

Here are some key features and improvements that Fiber brought to React:

- **Incremental Rendering:** Fiber allows React to pause and resume work on rendering. This means that React can break rendering work into chunks, which can be spread out over multiple frames. This is particularly useful for keeping the UI responsive during heavy computations or rendering tasks.

- **Prioritization of Updates:** Fiber introduces a more sophisticated scheduling mechanism that allows React to prioritize updates based on their importance. This means that more critical updates (like user interactions) can be processed before less critical ones (like background data fetching).

- **Concurrency:** With Fiber, React can handle multiple tasks at once, making it more efficient in managing updates and rendering. This is a step towards enabling concurrent rendering, which allows React to work on multiple tasks simultaneously without blocking the main thread.

- **Error Boundaries:** Fiber introduced the concept of error boundaries, which allows developers to catch JavaScript errors in their component tree and display a fallback UI instead of crashing the entire application.

- **Support for Suspense:** Fiber laid the groundwork for features like Suspense, which allows components to "wait" for something (like data fetching) before rendering. This helps in managing asynchronous operations more effectively.

- **Improved Component Lifecycles:** Fiber provides a more consistent and predictable lifecycle for components, making it easier for developers to manage component state and side effects.

### How it different from virtual dom
Fiber is a new intermediate strcture that alows us to pause and prioritize the render process to make it asynchronus.

Earlier we having React element that would create a virtual dom and that will be translated into an actual DOM with reconiliation.
But the problem here with this is that it's a very synchronus process

in version 16 fiber node was introduced which is an intermediate structure and bascially all the work of rendering component is dome by fiber node.
once we are done we can then compute the Virtual dom from the fibre tree


### Diffing Algo
- if diff type redo
- assume keys are stable & unique
- if same type, diff children
    - Don't use index as key - if we add or delete index will get change,

### Concurent React


- [React Context](concepts/src/pages/reactContextAPI)


- [event handling in react](#event-handling-in-react)
- [jsx in react](#jsx-in-react)
- [hooks in react](#hooks-in-react)
- [react router](#react-router)
- [react hooks](#react-hooks)
- [react context](#react-context)
- [react state](#react-state)
- [react props](#react-props)
- [react event handling](#react-event-handling)
- [react components](#react-components)
- [react stateless components](#react-stateless-components)
- [react stateful components](#react-stateful-components)
- [react lifecycle methods](#react-lifecycle-methods)
- [react context api](#react-context-api)
- [Key in Rect]

1. [Components](#components)
2. [JSX](#jsx)
3. [State](#state)
4. [Props](#props)
5. [Event Handling](#event-handling)
6. [Conditional Rendering](#conditional-rendering)
7. [Lists and Keys](#lists-and-keys)
8. [Forms](#forms)
9. [State Updater](#state-updater)
10. [Context](#context)
11. [Hooks](#hooks)
12. [Higher-Order Components](#higher-order-components)
13. [Render Props](#render-props)
14. [Portals](#portals)
15. [Error Boundaries](#error-boundaries)
16. [Lifecycle Methods](#lifecycle-methods)
17. [React Router](#react-router)
18. [Redux](#redux)
19. [React Query](#react-query)
20. [React Hook Form](#react-hook-form)
21. [React Select](#react-select)
22. [React Virtualized](#react-virtualized)
23. [React Transition Group](#react-transition-group)
24. [React Query DevTools](#react-query-devtools)
25. [React DevTools](#react-devtools)
26. [React Hot Loader](#react-hot-loader)
27. [React Storybook](#react-storybook)
28. [React Testing Library](#react-testing-library)
29. [React Jest](#react-jest)
30. [React Enzyme](#react-enzyme)
31. [React Mocha](#react-mocha)
32. [React Chai](#react-chai)
33. [React Sinon](#react-sinon)
34. [React Cypress](#react-cypress)
35. [React Code Splitting](#react-code-splitting)