import { useContext } from "react";
import { GlobalUserContext } from "../context";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function PrivateLayout() {
  const { user } = useContext(GlobalUserContext);
  const location = useLocation();
  return user ? (
    <Outlet />
  ) : (
    <Navigate to={"/signin "} replace state={{ from: location }} />
  );
}
