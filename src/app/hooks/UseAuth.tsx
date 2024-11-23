import { useSelector } from "react-redux";
import { RootState } from "../store";

export const UseAuth = () => {
  const { email, token, id } = useSelector((state: RootState) => state.user);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}
