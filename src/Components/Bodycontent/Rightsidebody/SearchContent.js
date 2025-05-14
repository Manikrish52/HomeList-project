import react from "react";
const SearchContent = () => {
  return (
    <div>
      <select
        className="search_content"
        name="Best Match"
        style={{ fontSize: "14px", fontWeight: "500" }}
      >
        <option value="BestMatch" style={{ fontSize: "14px" }}>
          Best Match
        </option>
        <option style={{ fontSize: "14px" }} value="Bestcollection">
          Best collection
        </option>
      </select>
    </div>
  );
};
export default SearchContent;
