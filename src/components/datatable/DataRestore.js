import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Chip from "@material-ui/core/Chip";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { useTheme } from "@material-ui/core/styles";
import useLoadjson from "../../hooks/useLoadJson";
import { useStyles, getStyles, MenuProps } from "./DataSelector.style";

const DataRestore = ({ restoreSymbols, onReloadSymbols }) => {
  const classes = useStyles();
  const theme = useTheme();

  const [selected, setSelected] = React.useState([]);

  const [defaultSymbols] = useLoadjson();
  console.log("defaultSymbols", defaultSymbols);

  const onRestoreSymbols = () => {
    restoreSymbols(selected);
    onReloadSymbols(selected);
  };

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <Grid item xs={8}>
      <FormControl className={classes.formControl}>
        <InputLabel id="symbols-mutiple-chip-label">Restore</InputLabel>
        <Select
          labelId="symbols-mutiple-chip-label"
          id="symbols-mutiple-chip"
          multiple
          value={selected}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {defaultSymbols.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, "", theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Fab
        size="small"
        color="secondary"
        aria-label="add"
        onClick={onRestoreSymbols}
        disabled={selected.length === 0}
        className={classes.addFab}
      >
        <AddIcon />
      </Fab>
    </Grid>
  );
};

DataRestore.propsTypes = {
  restoreSymbols: PropTypes.func.isRequired,
  onReloadSymbols: PropTypes.func.isRequired,
};

export default DataRestore;
