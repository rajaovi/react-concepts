import React from 'react';
import BackToHome from "../../../components/backToHome";
import useFetch from './useFetch';
import Title from "../../../components/title";

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
      <BackToHome />
      <Title title="Custom Hook" />
      <div>
        {data.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))}
      </div>
    </>
  );
}