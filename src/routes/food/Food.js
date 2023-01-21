import { useContext, useEffect, useState } from "react";
import { FoodContext } from "../../DataContext";
import GlassCard from "../../components/card/GlassCard";
import SearchBar from "../../components/input/SearchBar";

import "./styles.scss";

export default function Food() {
  const [data, setData] = useContext(FoodContext);
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const newFilteredData = data?.filter((food) => {
      return food.food.toLocaleLowerCase().includes(query);
    });
    setFilteredData(newFilteredData);
  }, [data, query]);

  const onSearch = (event) => {
    setQuery(event.target.value.toLocaleLowerCase());
  };

  return (
    <div className="food">
      <h1>Food</h1>
        <p className="description">
          <span className="special-text">Moderate</span> - These foods can be given to your rabbit on a daily basis in moderate amounts.<br/>
          <span className="special-text">Limited</span> - These foods can be given to your rabbit 1-3 times per week in small amounts.<br/>
          <span className="special-text">None</span> - These foods should not be given to your rabbit at all.
        </p>
      
      <SearchBar onChange={onSearch} placeholder="What are you looking for?" />
      <div className="cards">
        {filteredData?.map((food) => {
          return <GlassCard key={food._id} food={food} />;
        })}
      </div>
    </div>
  );
}
