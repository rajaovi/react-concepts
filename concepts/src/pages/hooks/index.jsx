import React from "react";
import { Link } from "react-router-dom";

export const Hooks = () => {
  return (
    <>
      <h4>Built-in React Hooks</h4>
      <ul>
        <li>
          <h5>State Hooks</h5>
          <ul>
            <li>
              <Link>useState</Link>
            </li>
            <li>
              <Link>useReducer</Link>
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
              <Link>useEffect</Link>
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
      {/* <ul>
        <li>
          <Link to="/usememo">Use Memo</Link>
        </li>
        <li>
          <Link to="/usecallback">Use Callback</Link>
        </li>
        <li>
          <Link to="/usecontext">Use Context</Link>
        </li>
        <li>
          <Link to="/usetransition">Use Transition</Link>
        </li>
        <li>
          <Link to="/customhook">Custom Hook</Link>
        </li>
      </ul> */}
    </>
  );
};
