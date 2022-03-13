import { MenuItem, Select } from "@material-ui/core";
import React, { useContext } from "react";

import { TargetContext } from "../../../contexts/TargetContext";
import SearchInput from "./SearchInput";
import useStyles from "./styles";

const FilterSide = () => {
  const { target, setTarget } = useContext(TargetContext);
  const classes = useStyles();

  const handleChange = (e, v) => {
    let target = e.target.value;
    setTarget((c) => target);
  };

  return (
    <>
      <Select value={target} onChange={handleChange} className={classes.select}>
        <MenuItem value={"women"}>Women</MenuItem>
        <MenuItem value={"men"}>Men</MenuItem>
      </Select>
      <SearchInput className={classes.search} />
    </>
  );
};

export default FilterSide;
