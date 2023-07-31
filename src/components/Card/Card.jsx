// import { useEffect } from "react";
// import { selectUsers } from "../../redux/selectors";
// import { useDispatch, useSelector } from "react-redux";
// import { getUsersThunk } from "../../redux/operations";

export const Card = (cards) => {
  // const dispatch = useDispatch();

  // const users = useSelector(selectUsers);

  // useEffect(() => {
  //   dispatch(getUsersThunk());
  // }, [dispatch]);

  return (
    <>
      <h3>Card.jsx:</h3>
      <ul>
        {cards.map((el) => (
          <li key={el.id}>
            {el.user}, {el.tweets}, {el.followers}{" "}
            <img src={el.avatar} alt={el.user} />
          </li>
        ))}
      </ul>
    </>
  );
};
