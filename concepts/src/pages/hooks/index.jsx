import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header";

export const Hooks = () => {
  return (
    <>
      <Header title="Built-in React Hooks" />
      <ul>
        <li>
          <h5>State Hooks</h5>
          <ul>
            <li>
              <Link to="/useState">useState</Link>
            </li>
            <li>
              <Link to="/usereducer">useReducer</Link>
            </li>
          </ul>
        </li>
        <li>
          <h5>Context Hooks</h5>
          <ul>
            <li>
              <Link to="/usecontext">! Use Context</Link>
            </li>
          </ul>
        </li>
        <li>
          <h5>Ref Hooks</h5>
          <ul>
            <li>
              <Link>useRef</Link>
            </li>
            <li>
              <Link>useImperativeHandle</Link>
            </li>
          </ul>
        </li>
        <li>
          <h5>Effect Hooks</h5>
          <ul>
            <li>
              <Link to="/useeffect">useEffect</Link>
            </li>
            <li>
              <Link>useLayoutEffect</Link>
            </li>
            <li>
              <Link>useInsertionEffect</Link>
            </li>
          </ul>
        </li>
        <li>
          <h5>Performance Hooks</h5>
          <ul>
            <li>
              <Link to="/usememo">! Use Memo</Link>
            </li>
            <li>
              <Link to="/usecallback">! Use Callback</Link>
            </li>
            <li>
              <Link to="/usetransition">! Use Transition</Link>
            </li>
            <li>
              <Link>useDeferredValue</Link>
            </li>
          </ul>
        </li>
        <li>
          <h5>Other Hooks</h5>
          <ul>
            <li>
              <Link>useDebugValue</Link>
            </li>
            <li>
              <Link>useId</Link>
            </li>
            <li>
              <Link>useSyncExternalStore</Link>
            </li>
            <li>
              <Link>useActionState</Link>
            </li>
          </ul>
        </li>
        <li>
          <h5>Custom Hooks</h5>
          <ul>
            <li>
              <Link to="/customhook">! Custom Hook</Link>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};
