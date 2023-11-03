import { useNavigate } from "react-router-dom";
import { signoutLogic } from "../authentication/signout";
import { useContext } from "react";
import { GlobalUserContext } from "../context";

export default function TestPrivate() {
  const navigate = useNavigate();
  const { user } = useContext(GlobalUserContext);
  console.log(user);

  const signoutSubmit = async () => {
    const success = await signoutLogic();
    if (success) {
      navigate("/", { replace: true });
    } else {
      console.log("erorrr");
    }
  };
  return (
    <div>
      <h1 className="font-author text-6xl font-medium">
        Test Page {user.email ? user.email : "user"}
      </h1>
      <button className="bg-secondary p-4" onClick={() => signoutSubmit()}>
        Signout
      </button>
    </div>
  );
}
