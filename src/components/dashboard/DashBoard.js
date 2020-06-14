import React from "react";
import { PropTypes } from "prop-types";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import DataTable from "../datatable/DataTable";
import DataSelector from "../datatable/DataSelector";
import { useStyles } from "./Dashboard.style";

function DashBoard({ defaultSymbols, repoSymbols, quotes, symbol, setSymbol, removeSymbol, updateSymbol, restoreSymbols }) {
  const classes = useStyles();
  const symbolDetails = quotes.symbols.find((sy) => sy.symbol === symbol);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <DataSelector
          selected={symbol}
          setSymbol={setSymbol}
          removeSymbol={removeSymbol}
          updateSymbol={updateSymbol}
          restoreSymbols={restoreSymbols}
          defaultSymbols={defaultSymbols}
          repoSymbols={repoSymbols}
        />
      </Grid>
      {symbolDetails && (
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h4" component="h3">
              {symbolDetails.name}
            </Typography>
            <Typography variant="subtitle1" component="h3">
              {symbolDetails.description}
            </Typography>
          </Paper>
        </Grid>
      )}
      <Grid item xs={12}>
        {<DataTable quotes={quotes} />}
      </Grid>
    </Grid>
  );
}

DashBoard.propTypes = {
  defaultSymbols: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
  repoSymbols: PropTypes.arrayOf(
    PropTypes.shape({
      symbol: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string
    })
  ).isRequired,
  quotes: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        Date: PropTypes.string,
        Open: PropTypes.string,
        High: PropTypes.string,
        Low: PropTypes.string,
        Close: PropTypes.string,
        "Adj Close": PropTypes.string,
        Volume: PropTypes.string,
      })
    ),
    headers: PropTypes.arrayOf(PropTypes.string),
    symbols: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string,
        name: PropTypes.string,
        symbol: PropTypes.string,
      })
    ),
  }),
  symbol: PropTypes.string.isRequired,
  setSymbol: PropTypes.func.isRequired,
  removeSymbol: PropTypes.func.isRequired,
  updateSymbol: PropTypes.func.isRequired,
  restoreSymbols: PropTypes.func.isRequired,
};

DashBoard.defaultProps = {
  quotes: {
    data: [],
    headers: [],
    symbols: [],
  },
};

export default DashBoard;
