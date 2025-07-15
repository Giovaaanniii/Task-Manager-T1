import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import type { PriorityType } from "../app/types/Task";

interface PriorityProps {
  value: PriorityType;
  onChange: (value: PriorityType) => void;
}
export const Priority = ({ value, onChange }: PriorityProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as PriorityType);
  };
  return (
    <>
      <FormControl sx={{ minWidth: 150 }} size="small">
        <InputLabel>Приоритет</InputLabel>
        <Select value={value} label="Приоритет" onChange={handleChange}>
          <MenuItem value={"Low"}>Low</MenuItem>
          <MenuItem value={"Medium"}>Medium</MenuItem>
          <MenuItem value={"High"}>High</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
