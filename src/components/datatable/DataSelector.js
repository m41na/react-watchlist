import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import useSymbolContext from "../../hooks/useSymbolContext";
import DashDialog from "../alerts/DashDialog";
import Switch from "@material-ui/core/Switch";
import { useStyles } from "./DataSelector.style";

const DataSelector = ({ selected, setSymbol, removeSymbol, updateSymbol }) => {
  const classes = useStyles();

  const [listing, dropdown, onSelectSymbol, onRemoveSymbol] = useSymbolContext(
    selected
  );
  const [dialog, setDialog] = useState(false);
  const [refresh, setRefresh] = React.useState(false);

  const handleDialog = (ok) => {
    setDialog(false);
    if (ok) {
      onRemoveSymbol(selected, removeSymbol);
      //toggle refresh off
      setRefresh(false);
      updateSymbol(selected, false);
    }
  };

  const toggleRefresh = (event) => {
    const checked = event.target.checked;
    setRefresh(checked);
    updateSymbol(selected, checked, 5000);
  };

  const confirmDialog = () => {
    setDialog(true);
  };

  const handleChange = (event) => {
    const selected = event.target.value;
    onSelectSymbol(selected);
    setSymbol(selected);
    //toggle refresh off
    setRefresh(false);
    updateSymbol(selected, false);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={1} className={classes.fab}>
        <Fab
          size="small"
          color="secondary"
          aria-label="add"
          onClick={confirmDialog}
        >
          <DeleteIcon />
        </Fab>
      </Grid>
      <Grid item xs={8}>
        <FormControl component="fieldset" className={classes.paper}>
          <RadioGroup
            row
            aria-label="position"
            name="position"
            value={selected}
            onChange={handleChange}
          >
            {listing.map((symbol) => (
              <FormControlLabel
                key={symbol}
                value={symbol}
                control={<Radio color="primary" />}
                label={symbol}
                labelPlacement="end"
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={3} className={classes.dropdown}>
        <FormControlLabel
          control={
            <Switch
              checked={refresh}
              onChange={toggleRefresh}
              name="toggleRefresh"
              color="primary"
              disabled={listing.length === 0 && dropdown.length === 0}
            />
          }
          label="Realtime"
        />
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-placeholder-label-label">
            Add Symbol
          </InputLabel>
          <Select
            labelId="demo-simple-select-placeholder-label-label"
            id="demo-simple-select-placeholder-label"
            value={""}
            onChange={handleChange}
            displayEmpty
          >
            {dropdown.map((symbol) => (
              <MenuItem value={symbol} key={symbol}>
                {symbol}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <DashDialog
        show={dialog}
        accept="Yes"
        decline="No"
        message={`Are you sure you want to remove the symbol ${selected}`}
        onAccept={handleDialog}
      />
    </Grid>
  );
};

DataSelector.propTypes = {
  selected: PropTypes.string.isRequired,
  setSymbol: PropTypes.func.isRequired,
  removeSymbol: PropTypes.func.isRequired,
  updateSymbol: PropTypes.func.isRequired,
};

export default DataSelector;
