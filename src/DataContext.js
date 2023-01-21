import { createContext, useState, useEffect } from "react";
import axios from "axios";

//----- Food Context Start -----//

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

//----- Food Context End -----//

//----- Health Context Start -----//

export const HealthContext = createContext();

export const HealthProvider = (props) => {
  const [symptoms, setSymptoms] = useState({
    appetite: null,
    digestion: null,
    defecation: null,
    posture: null,
    lethargy: null,
    scratching: null,
    hd_shaking: null,
    crust_area: null,
    drooling: null,
    swollen_area: null,
    red_ears: null,
    balance: null,
    hd_lifting: null,
    sneezing: null,
    watery_eyes: null,
    runny_nose: null,
    breathing: null,
    hd_titl: null,
    peeing_frq: null,
    peeing_sludge: null,
    peeing_bloody: null,
    weght_loss: null,
    discharged_eyes: null,
    overgwn_teeth: null,
    lump: null,
    fur_lost: null,
  });

  return (
    <HealthContext.Provider value={[symptoms, setSymptoms]}>
      {props.children}
    </HealthContext.Provider>
  );
};

//----- Health Context End -----//



