import { useCallback, useContext, useEffect, useMemo } from "react";
import { StarWarsContext } from "../context";
import { useSearchParams } from "react-router-dom";
import { signoutLogic } from "../authentication/signout";

export default function TestPrivate() {
  const logout = () => {
    signoutLogic();
  };
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <button className="px-4 py-2 bg-secondary" onClick={() => logout()}>
        Logout
      </button>
    </div>
  );
}
