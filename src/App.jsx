import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import {
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
} from "./pages";
import { FormProvider, StarWarsProvider } from "./context";
import PrivateLayout from "./layout/PrivateLayout";
import { EmptyError, FormLoader } from "./components";
import { Suspense } from "react";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<FormLoader />}>
              <HomePage />
            </Suspense>
          }
        />
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
              <Suspense fallback={<FormLoader />}>
                <FormProvider>
                  <SigninPage />
                </FormProvider>
              </Suspense>
            }
          />
          <Route
            path="reset-password"
            element={
              <Suspense fallback={<FormLoader />}>
                <ResetPassword />
              </Suspense>
            }
          />
        </Route>

        <Route element={<PrivateLayout />}>
          <Route
            path="account-setup"
            element={
              <Suspense fallback={<FormLoader />}>
                <AccountSetup />
              </Suspense>
            }
          />
          <Route
            path="characters"
            element={
              <StarWarsProvider>
                <Outlet />
              </StarWarsProvider>
            }
          >
            <Route
              index
              element={
                <Suspense fallback={<FormLoader />}>
                  <Characters />
                </Suspense>
              }
            />
            <Route
              path=":id"
              element={
                <Suspense fallback={<FormLoader />}>
                  <CharacterDetails />
                </Suspense>
              }
              errorElement={<EmptyError data={"character"} />}
            />
          </Route>
          <Route
            path="planets"
            element={
              <StarWarsProvider>
                <Outlet />
              </StarWarsProvider>
            }
          >
            <Route
              index
              element={
                <Suspense fallback={<FormLoader />}>
                  <Planets />
                </Suspense>
              }
            />
            <Route
              path=":id"
              element={
                <Suspense fallback={<FormLoader />}>
                  <PlanetsDetails />
                </Suspense>
              }
              errorElement={<EmptyError data={"planet"} />}
            />
          </Route>
          <Route
            path="starships"
            element={
              <StarWarsProvider>
                <Outlet />
              </StarWarsProvider>
            }
          >
            <Route
              index
              element={
                <Suspense fallback={<FormLoader />}>
                  <Starships />
                </Suspense>
              }
            />
            <Route
              path=":id"
              element={
                <Suspense fallback={<FormLoader />}>
                  <StarshipDetails />
                </Suspense>
              }
              errorElement={<EmptyError data={"starship"} />}
            />
          </Route>
        </Route>
        <Route
          path="settings"
          element={
            <Suspense fallback={<FormLoader />}>
              <Settings />
            </Suspense>
          }
        />
        <Route path="*" element={<Error404 />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
