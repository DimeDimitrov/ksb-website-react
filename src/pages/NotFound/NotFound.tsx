import { Navigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <div>404 NotFound</div>
      <Navigate to="/" />
    </>
  );
};

export default NotFound;
