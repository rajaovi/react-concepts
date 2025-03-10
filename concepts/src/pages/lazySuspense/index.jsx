import React, { Suspense, lazy, useState } from 'react';
import Header from "../../components/header";

const Lazy = lazy(() => import('./lazyTest'));

const renderLoader = () => <p>Loading</p>;

export default function LazySuspense() {
  const [switchPage, setSwitchPage] = useState(true);
  return (
    <>
      <Header title="Lazy Suspense" />
      <button onClick={() => setSwitchPage(!switchPage)}>
        Switch Component
      </button>
      {switchPage ? (
        <Home />
      ) : (
        <Suspense fallback={renderLoader()}>
          <Lazy />
        </Suspense>
      )}
    </>
  );
}

function Home() {
  return <div>Lazy Test Home</div>;
}
