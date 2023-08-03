import { ThreeCircles } from "react-loader-spinner";
import { Spinner } from "./Loader.styled";

export const Loader = () => {
  return (
    <>
      <Spinner>
        <ThreeCircles
          height="100"
          width="100"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
        <h1>Loading...</h1>
      </Spinner>
    </>
  );
};
