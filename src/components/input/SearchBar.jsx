import "./styles.scss";

export default function SearchBar({onChange, placeholder}) {
  return (
    <div className="search">
      <input
        type="search"
        className="searchTerm"
        placeholder={placeholder}
        onChange={onChange}
      />
      <button type="submit" className="searchButton">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}
