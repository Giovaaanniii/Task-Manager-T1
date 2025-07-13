

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

export const Status = () => {
  const [status, setStatus] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  };
  return (
    <>
      <FormControl sx={{minWidth: 150 }} size="small">
        <InputLabel>Статус</InputLabel>
        <Select
          value={status}
          label="Статус"
          onChange={handleChange}
        >
          <MenuItem value={"To Do"}>To Do</MenuItem>
          <MenuItem value={"In Progress"}>In Progress</MenuItem>
          <MenuItem  value={"Done"}>Done</MenuItem>

        </Select>
      </FormControl>
    </>
  );
};
