import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../component/header'

const NewHooks = () => {
  return (
    <>
      <Header title="New Hooks" page="Home" toPage="/" />
      <ul>
        <li>
          <Link to="/useactionstate">Use Action State</Link>
        </li>
        <li>
          <Link to="/usetransition">New Transition</Link>
        </li>
      </ul>
    </>
  );
}

export default NewHooks