import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import type { CategoryType } from "../app/types/Task";

interface CategoryProps {
  value: CategoryType;
  onChange: (value: CategoryType) => void;
}
export const Category = ({ value, onChange }: CategoryProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as CategoryType);
  };
  return (
    <>
      <FormControl sx={{ minWidth: 150 }} size="small">
        <InputLabel>Категория</InputLabel>
        <Select value={value} label="Категория" onChange={handleChange}>
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
