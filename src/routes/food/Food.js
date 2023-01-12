import { useContext, useEffect, useState } from "react";
import { FoodContext } from "../../DataContext";
import CardList from "../../components/card/CardList";
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
      <SearchBar onChange={onSearch} placeholder="What are you looking for?" />
      {data && <CardList data={filteredData} />}
    </div>
  );
}
