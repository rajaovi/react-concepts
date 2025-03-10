import React from "react";
import useFetch from "./useFetch";
import Header from "../../../components/header";

export default function CustomHook() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No data yet...</p>;

  return (
    <>
      <Header title="Custom Hook" page="Hooks" toPage="/hooks" />
      <div>
        {data.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))}
      </div>
    </>
  );
}
