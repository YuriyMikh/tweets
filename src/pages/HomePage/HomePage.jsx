import { Link } from "react-router-dom";

export const Homepage = () => {
  return (
    <div>
      Hello. This is the Homepage.jsx. Для перехода к твитам нажми на
      <Link to="/tweets"> ссылку</Link>
    </div>
  );
};
