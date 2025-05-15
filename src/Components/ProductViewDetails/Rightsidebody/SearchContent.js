import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

const SearchContent = () => {
  const [bestMatch, setBestMatch] = useState("BestMatch");

  const handleChange = (event) => {
    setBestMatch(event.target.value);
  };

  return (
    <div>
      <FormControl
        className="search_content"
        placeholder="Best Match"
        sx={{
          width: "150px",
          padding: { xs: "0px 10px 0px 0px", md: "0px 10px " },
        }}
      >
        <Select value={bestMatch} onChange={handleChange}>
          <MenuItem value={bestMatch}>Best Match</MenuItem>
          <MenuItem value="Best Goal">Best Goal</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
export default SearchContent;
