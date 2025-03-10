## Portals

createPortal is a function that allows to render React children into a different part of the DOM tree, outside of the parent component's hierarchy

For example by using   portals we can create like modal, tooltips, notification

- createPortal takes two arguments: the React children to render and the DOM node where you want to render them. 


- It Optimize the performance of your React application by memoizing expensive computations. Memoization is the process of caching the results of a function call based on its input parameters.
- The useMemo hook takes two arguments: A function that performs the calculation and An array of dependencies.
- The hook will only recalculate the value when one of the dependencies has changed. Otherwise, it will return the cached value from the previous render.

### How to use it:

#### Portal Page
Here we created a Modal component - on click of the button we are going to open the dialog
```
<div>
  <button onClick={() => setIsModalOpened(true)}>Open Model</button>
  <Modal isOpened={isModalOpened} onClose={() => setIsModalOpened(false)}>
    <form className="loginForm" onSubmit={() => setIsModalOpened(false)}>
      <section>
        <label>Email:</label>
        <input type="text" name="username" />
      </section>
      <section>
        <label>Password:</label>
        <input type="password" name="username" />
      </section>
    </form>
  </Modal>
</div>
```
#### Main Index Page
Add a new div[modal] to the body of the index.html file
```
<body>
  <div id="root"></div>
  <div id="modal"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
```
#### Modal Component
In return of the Modal component we are going to use the createPortal to render the children into the modal div
```
import { createPortal } from 'react-dom';
const Modal = ({isOpened, children, onClose}) => {
  if(!isOpened) {
      return null
  }
  return createPortal (
    <div>
      <div className="overlay">
        <div className="modal">
          <div>
            <span className='closeButton' onClick={onClose}>X</span>
            <div className='modalContent'>{children}</div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  )
}
```
