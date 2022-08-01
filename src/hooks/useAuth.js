import { useSelector } from "react-redux/es/hooks/useSelector";

export const useAuth = () => {
  const { login } = useSelector((state) => state.user);

  return {
    isAuth: !!login,
    login,
  };
};
