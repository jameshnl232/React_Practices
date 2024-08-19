import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <>
      <Navbar
        headerStyle={
          "top-0 bg-opacity-10 "
        }
      />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Root;
