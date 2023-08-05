// import { useEffect } from "react";
// import { selectUsers } from "../../redux/selectors";
// import { useDispatch, useSelector } from "react-redux";
// import { getUsersThunk } from "../../redux/operations";
import PropTypes from "prop-types";

export const Card = ({ cards }) => {
  // const dispatch = useDispatch();

  // const users = useSelector(selectUsers);

  // useEffect(() => {
  //   dispatch(getUsersThunk());
  // }, [dispatch]);

  return (
    <>
      <h3>component-Card.jsx:</h3>
      <ul style={{
        display: "flex",
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        {cards.map((el) => (
          <li key={el.id} style={{border: "1px solid black"}}>
            <img src={el.avatar} alt={el.user} />
            <p>{el.tweets}</p>
            <p>{el.followers}</p>
            <button onClick={()=>{console.log('click to button follow');}}>follow</button>
          </li>
        ))}
      </ul>
    </>
  );
};

Card.propTypes = {
  cards: PropTypes.array.isRequired,
};
