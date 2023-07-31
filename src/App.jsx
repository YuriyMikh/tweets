// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./components/Card/Card";
import { Filter } from "./components/Filter/Filter";
import { Homepage } from "./components/Homepage/Homepage";
import { LoadMoreButton } from "./components/LoadMoreButton/LoadMoreButton";
import { useDispatch, useSelector } from "react-redux";
import { getUsersThunk } from "./redux/operations";
import { selectUsers } from "./redux/selectors";

function App() {
  // const [count, setCount] = useState(0)
    const [page, setPage] = useState(1);

const dispatch = useDispatch();

const cards = useSelector(selectUsers);

useEffect(() => {
  dispatch(getUsersThunk());
}, [dispatch]);


  const handleClickLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <Homepage />
      <Filter />
      <Card cards={cards} />
      <LoadMoreButton handleClickLoadMore={handleClickLoadMore} />
    </>
  );
}

export default App;

/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */
