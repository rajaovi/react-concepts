# useTransition Hook
`useTransition` hook in React is a built-in hook introduced in React 18 that allows you to manage state transitions in a way that improves the user experience during updates. It helps you differentiate between urgent and non-urgent updates, allowing you to keep the UI responsive while performing potentially time-consuming state updates.

#### Key Features of useTransition
- **Concurrent Mode:** useTransition is part of React's concurrent features, which allow React to work on multiple tasks at once. This helps in keeping the UI responsive even when there are heavy updates.
- **Transition State:** The hook returns an array containing a boolean value indicating whether the transition is pending and a function to start the transition. This allows you to manage loading states or spinners while the transition is in progress.
- **User Experience:** By marking certain updates as transitions, you can ensure that the UI remains interactive and responsive, even when performing updates that might take some time.

#### When to Use useTransition
- **Slow Updates:** When you have updates that might take a noticeable amount of time, such as fetching data or rendering large lists, you can use useTransition to keep the UI responsive.
- **User Interactions:** When you want to provide a better user experience during interactions that involve state changes, such as filtering or sorting large datasets.

#### Example
```
const [isPending, startTransition] = useTransition();
<input type="text" value={name} onChange={handleChange} />
{
    isPending ? (
        <h4>Loading</h4>
    ) : (
    list.map((item, index) => <div key={index}>Item: {item}</div>)
)}
```

#### Refer Code
- [index](./index.jsx)