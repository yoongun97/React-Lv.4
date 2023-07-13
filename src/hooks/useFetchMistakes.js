import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetchMistakes() {
  const [mistakes, setMistakes] = useState([]);

  useEffect(() => {
    const fetchMistakes = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/errors`
        );
        setMistakes(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMistakes();
  }, []);

  return [mistakes, setMistakes];
}
