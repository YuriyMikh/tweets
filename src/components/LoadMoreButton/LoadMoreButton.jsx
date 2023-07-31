import PropTypes from "prop-types";

export const LoadMoreButton = ({ handleClickLoadMore }) => {
  return (
    <div>
      <button type="button" onClick={handleClickLoadMore}>
        Load more
      </button>
    </div>
  );
};

LoadMoreButton.propTypes = {
  handleClickLoadMore: PropTypes.func.isRequired
};