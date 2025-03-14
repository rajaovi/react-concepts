import React, { memo, useEffect, useState, useTransition } from "react";
import Header from "../../../component/header";

export default function UseTransition() {
  const [tab, setTab] = useState("home");
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState([]);

  function switchTabs(tab) {
    startTransition(() => {
      setTab(tab);
    });
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/photos"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchData();
  },[]);

  function setStyles(thisTab) {
    return {
      backgroundColor: tab === thisTab ? "#262626" : "#fff",
      color: tab === thisTab ? "#fff" : "#262626",
    };
  }

  return (
    <>
      <Header title="Use Hook" page="Hooks" toPage="/hooks" />
      <div>
        <button style={setStyles("home")} onClick={() => switchTabs("home")}>
          Home
        </button>
        <button
          style={setStyles("product")}
          onClick={() => switchTabs("product")}
        >
          Product
        </button>
        <button style={setStyles("about")} onClick={() => switchTabs("about")}>
          About
        </button>
      </div>
      <div>
        {isPending ? <div>Loading...</div> : ""}
        {!isPending && tab === "home" && <Home />}
        {!isPending && tab === "product" && <Products data={data} />}
        {!isPending && tab === "about" && <About />}
      </div>
    </>
  );
}

function Home() {
  return <h3>Home</h3>;
}

const Products = memo(({ data }) => {
  console.log("Pro", data);
  return (
    <>
      <h4>Product</h4>
      {data && data.length > 0 ? (
        <ul>
          {data.map((product, ind) => {
            return <SlowProduct key={ind} product={product} />;
          })}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
});

function About() {
  return <h3>About</h3>;
}

function SlowProduct({ product }) {
  return <li>Product {product.title}</li>;
}
