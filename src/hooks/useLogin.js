import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { projectAuth } from "../firebase/config";

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    // sign in
    try {
      const response = await projectAuth.signInWithEmailAndPassword(
        email,
        password
      );

      // dispatch login action

      dispatch({ type: "LOGIN", payload: response.user });
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

  return { error, isPending, login };
};
