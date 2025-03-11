# React Hooks
React Hooks are a feature introduced in React 16.8 that allow you to use state and other React features without writing a class. Hooks provide a more functional approach to managing state and side effects in React components, making it easier to share logic between components and manage component lifecycle events.

**Hooks follow two main rules:**
- They can only be called inside React functional components or custom Hooks.
- They must be called at the top level of the component, not within loops, conditions, or nested functions.

#### Hooks available in React
* **State Hooks**
  * [useState](useState/)
  * [useReducer](useReducer/)
* **Context Hooks**
  * [useContext](useContext/)
* **Ref Hooks**
  * [useRef](useRef/)
  * useImperativeHandle
* **Effect Hooks**
  * [useEffect](useEffect/)
  * [useLayoutEffect](useLayoutEffect/)
  * useInsertionEffect
* **Performance Hooks**
  * useMemo
  * [useCallback](useCallback/)
  * [useTransition](useTransition/)
  * useDeferredValue
* **Other Hooks**
  * useDebugValue
  * useId
  * useSyncExternalStore
  * useActionState
* **Custom Hooks**
  * `use` keyword in from of a function name - Example `useFetch, useTodopComponent`

