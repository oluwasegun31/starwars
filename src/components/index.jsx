import { lazy } from "react";
// components to load on first mount
import FeaturedHeading from "./FeaturedHeading";
import FormError from "./FormError";
import FormLoader from "./FormLoader";
import EmptyError from "./EmptyError";
import FormSuccess from "./FormSuccess";
import SearchInput from "./SearchInput";
// component to lazy load
const FormInput = lazy(() => import("./FormInput"));
const CharacterCard = lazy(() => import("./CharacterCard"));
const CharacterDetailsCard = lazy(() => import("./CharacterDetailsCard"));
const PlanetCard = lazy(() => import("./PlanetCard"));
const PlanetDetailsCard = lazy(() => import("./PlanetDetailsCard"));
const StarshipCard = lazy(() => import("./StarshipCard"));
const StarshipDetailsCard = lazy(() => import("./StarshipDetailsCard"));
const PublicSettings = lazy(() => import("./PublicSettings"));

export {
  FeaturedHeading,
  FormInput,
  FormError,
  FormLoader,
  EmptyError,
  CharacterCard,
  CharacterDetailsCard,
  SearchInput,
  PlanetCard,
  PlanetDetailsCard,
  StarshipCard,
  StarshipDetailsCard,
  PublicSettings,
  FormSuccess,
};
