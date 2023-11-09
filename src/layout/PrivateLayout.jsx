import { useContext } from "react";
import { GlobalUserContext } from "../context";
import { Navigate, Outlet, useLocation } from "react-router-dom";
// Function to render a private route
export default function PrivateLayout() {
  // Get the current user from the global context
  const { user } = useContext(GlobalUserContext);
  // Get the current location of the user
  const location = useLocation();
  // If the user is not authenticated, redirect them to the sign-in page Otherwise, render the child component
  return user ? (
    <Outlet />
  ) : (
    <Navigate to={"/signin "} replace state={{ from: location }} />
  );
}
