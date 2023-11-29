import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import {
  HomePage,
  SigupPage,
  SigninPage,
  TestPrivate,
  AccountSetup,
  ResetPassword,
  Characters,
  CharacterDetails,
  Planets,
  PlanetsDetails,
  Starships,
  StarshipDetails,
} from "./pages";
import { FormProvider } from "./context";
import PrivateLayout from "./layout/PrivateLayout";
import { EmptyError } from "./components";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="signup"
          element={
            <FormProvider>
              <SigupPage />
            </FormProvider>
          }
        />
        <Route path="signin">
          <Route
            index
            element={
              <FormProvider>
                <SigninPage />
              </FormProvider>
            }
          />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>

        <Route element={<PrivateLayout />}>
          <Route path="test" element={<TestPrivate />} />
          <Route path="account-setup" element={<AccountSetup />} />
          <Route path="characters">
            <Route index element={<Characters />} />
            <Route
              path=":id"
              element={<CharacterDetails />}
              errorElement={<EmptyError data={"character"} />}
            />
          </Route>
          <Route path="planets">
            <Route index element={<Planets />} />
            <Route
              path=":id"
              element={<PlanetsDetails />}
              errorElement={<EmptyError data={"planet"} />}
            />
          </Route>
          <Route path="starships">
            <Route index element={<Starships />} />
            <Route
              path=":id"
              element={<StarshipDetails />}
              errorElement={<EmptyError data={"starship"} />}
            />
          </Route>
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
