# React Concepts With examples
This project Learning purpose for React Concepts 

## This repo was reference to React major concepts with example:
This will give you some quick idea & examples of React concepts.

### Table of Contents
- [Redux](concepts/src/pages/redux)
- [Lifting State Up](concepts/src/pages/liftingState/README.md)
- [React Hooks](concepts/src/pages/reactHooks)
- [React Context API](concepts/src/pages/reactContextAPI)
- [React Router](concepts/src/pages/reactRouter)

### Topics
- [Reconciliation:](#Reconciliation)

#### Reconciliation
When a component re-renders, React creates a new virtual DOM tree and compares it with the previous one. This comparison is done using a diffing algorithm. If there are differences, React calculates the minimal set of changes needed to update the actual DOM. This process is called reconciliation.

###### Reconciliation involves the following steps:
- Rendering:
    -- When a component's state or props change, React re-renders the component and creates a new virtual DOM tree.
- Diffing:
    -- React compares the new virtual DOM tree with the previous one to identify the differences. This process is called "diffing." 
- Patching:
    -- Based on the differences identified during the diffing process, React updates only the necessary parts of the actual DOM. This process is called "patching."