import { lazy } from "react";
// Public Pages
const HomePage = lazy(() => import("./public/HomePage"));
const SigupPage = lazy(() => import("./public/Signup"));
const SigninPage = lazy(() => import("./public/Signin"));
const Error404 = lazy(() => import("./public/Error404"));
// Private Pages
const AccountSetup = lazy(() => import("./private/AccountSetup"));
const ResetPassword = lazy(() => import("./private/ResetPassword"));
const Characters = lazy(() => import("./private/Characters"));
const CharacterDetails = lazy(() => import("./private/CharactersDetails"));
const Planets = lazy(() => import("./private/Planets"));
const PlanetsDetails = lazy(() => import("./private/PlanetsDetails"));
const Starships = lazy(() => import("./private/Starships"));
const StarshipDetails = lazy(() => import("./private/StarshipsDetails"));
const Settings = lazy(() => import("./private/Settings"));

export {
  HomePage,
  SigupPage,
  SigninPage,
  AccountSetup,
  ResetPassword,
  Characters,
  CharacterDetails,
  Planets,
  PlanetsDetails,
  Starships,
  StarshipDetails,
  Settings,
  Error404,
};
