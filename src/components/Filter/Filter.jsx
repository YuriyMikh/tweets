export const Filter = () => {
  return (
    <>
      <h3>component-Filter.jsx</h3>
      <label htmlFor=""> Filter your card:
        <select name="filter" aria-label="select">
          <option value="all">show all</option>
          <option value="follow">follow</option>
          <option value="followings">followings</option>
        </select>
      </label>
    </>
  );
};
