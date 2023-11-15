import { useLocalStorage } from "./localStrongeKullan";

export const useGeceModu = (initialValue) => {
  //const [geceModu, setGeceModu] = useState(initialValue);
  const [geceModu, setGeceModu] = useLocalStorage("geceModu", initialValue);

  const toggleMode = (e) => {
    e.preventDefault();
    setGeceModu(!geceModu);
  };

  return [geceModu, toggleMode];
};
