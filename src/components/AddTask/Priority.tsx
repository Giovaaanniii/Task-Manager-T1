

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

export const Priority = () => {
  const [priority, setPriority] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setPriority(event.target.value);
  };
  return (
    <>
      <FormControl sx={{minWidth: 150 }} size="small">
        <InputLabel>Приоритет</InputLabel>
        <Select
          value={priority}
          label="Приоритет"
          onChange={handleChange}
        >
          <MenuItem value={"Low"}>Low</MenuItem>
          <MenuItem value={"Medium"}>Medium</MenuItem>
          <MenuItem  value={"High"}>High</MenuItem>

        </Select>
      </FormControl>
    </>
  );
};
