import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "../../redux/selectors";
import { getUsersThunk } from "../../redux/operations";
import { Filter } from "../../components/Filter/Filter";
import { Card } from "../../components/Card/Card";
import { LoadMoreButton } from "../../components/LoadMoreButton/LoadMoreButton";
import { Link, useLocation } from "react-router-dom";

export const CardsPage = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const location = useLocation();

  const cards = useSelector(selectUsers);

  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);

  const handleClickLoadMore = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <>
      <h2>CardsPage.jsx</h2>
      <Link to={location?.state?.from || "/"}>Go back</Link>
      {/* <button to={"/"}>Go back</button> */}

      <Filter />
      <Card cards={cards} />
      <LoadMoreButton handleClickLoadMore={handleClickLoadMore} />
    </>
  );
};
