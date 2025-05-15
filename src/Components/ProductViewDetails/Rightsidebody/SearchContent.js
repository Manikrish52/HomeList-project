import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
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
        sx={{ width: "150px", padding: "0px 10px " }}
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
