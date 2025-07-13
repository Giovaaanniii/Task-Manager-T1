import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

export const Category = () => {
  const [category, setCategory] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };
  return (
    <>
      <FormControl sx={{minWidth: 150 }} size="small">
        <InputLabel>Категория</InputLabel>
        <Select
          value={category}
          label="Категория"
          onChange={handleChange}
        >
          <MenuItem value={"Bug"}>Bug</MenuItem>
          <MenuItem value={"Feature"}>Feature</MenuItem>
          <MenuItem value={"Documentation"}>Documentation</MenuItem>
          <MenuItem value={"Refactor"}>Refactor</MenuItem>
          <MenuItem value={"Test"}>Test</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};