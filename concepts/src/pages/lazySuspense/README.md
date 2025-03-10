## Lazy Suspense

Lazy Suspense is a technique for improving application performance by deferring the loading of components until they are needed.

### How to use it:

#### Component Page:
create a lazy component and pass the component to it [ const Lazy = lazy(() => import('./lazyTest')) ]
- And wrapy your component with `Suspense` component from `react-suspense` library.
- `Suspense` component will render a fallback component while the lazy component is loading.

```
import React, { Suspense, lazy, useState } from 'react';

const Lazy = lazy(() => import('./lazyTest'));

<Suspense fallback={renderLoader()}>
  <Lazy />
</Suspense>
```
#### Component:

```
export default function LazyTest() {
  return (
    <>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut
      dolor sit amet nulla sollicitudin elementum. Maecenas et auctor libero,
      ut convallis velit. Etiam egestas imperdiet dignissim. Vivamus gravida
      suscipit ligula ut gravida. Phasellus id tortor sed lectus viverra
      auctor id id arcu. Pellentesque hendrerit est ac erat blandit molestie.
      Mauris tortor urna, ullamcorper vitae ipsum a, tincidunt scelerisque
      ante. Ut a dapibus quam, eu dapibus dui
      </p>
    </>
)}
```