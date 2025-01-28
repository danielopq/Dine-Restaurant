import { useNavigate } from "react-router-dom";

const NavigateTo = (path: string) => {
  const navigate = useNavigate();
  return () => navigate(path);
};

export default NavigateTo;