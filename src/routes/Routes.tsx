import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Navbar } from "../components/general/Navbar";
import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { MainContext } from "../providers/MainContext";

export const RoutesMain = () => {
  const { NavbarDrawerRef } = useContext(MainContext);
  const location = useLocation();

  useEffect(() => {
    if (NavbarDrawerRef.current) {
      NavbarDrawerRef.current.checked = false;
    }
  }, [location]);

  return (
    <Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Navbar>
  );
};
