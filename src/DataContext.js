import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const FoodContext = createContext();

export const FoodProvider = (props) => {
  const [data, setData] = useState();

  // Make API call and store in data
  useEffect(() => {
    axios
      .get("https://bunnyexpertapi.up.railway.app/food")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <FoodContext.Provider value={[data, setData]}>
      {props.children}
    </FoodContext.Provider>
  );
};
