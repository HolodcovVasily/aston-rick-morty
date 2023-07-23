import { useAppSelector } from "./redux";
import { getAuth, signOut } from "firebase/auth";

export function useAuth() {
  const { email, id, token } = useAppSelector((state) => state.user.user);
  const auth = getAuth();
  const logAuthOut = () => signOut(auth);
  return {
    isAuth: !!email,
    email,
    id,
    token,
    logAuthOut,
    auth,
  };
}
