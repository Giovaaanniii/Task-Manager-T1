import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import type { StatusType } from "../app/types/Task";

interface StatusProps {
  value: StatusType;
  onChange: (value: StatusType) => void;
}
export const Status = ({ value, onChange }: StatusProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as StatusType);
  };
  return (
    <>
      <FormControl sx={{ minWidth: 150 }} size="small">
        <InputLabel>Статус</InputLabel>
        <Select value={value} label="Статус" onChange={handleChange}>
          <MenuItem value={"To Do"}>To Do</MenuItem>
          <MenuItem value={"In Progress"}>In Progress</MenuItem>
          <MenuItem value={"Done"}>Done</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
