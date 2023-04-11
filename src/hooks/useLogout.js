import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { projectAuth } from "../firebase/config";

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    // sign out
    try {
      await projectAuth.signOut();

      // dispatch logout action

      dispatch({ type: "LOGOUT" });
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (error) {
      if (!isCancelled) {
        setError(error.message);
        setIsPending(false);
        console.log(error.message);
      }
    }
  };
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { error, isPending, logout };
};
