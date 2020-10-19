import React from "react";
import {
  Paper,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
const useStyles = makeStyles({
  container: {
    minWidth: 150,
    display: "flex",
    gap: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function CustomPagination({
  page = 0,
  setPage,
  hasMore = true,
}) {
  const styles = useStyles();

  const incrementPage = () => {
    setPage((page) => (hasMore ? page + 1 : page));
  };
  const decrementPage = () => {
    setPage((page) => (page > 0 ? page - 1 : 0));
  };

  if (page > 0 || hasMore)
    return (
      <Paper className={styles.container}>
        {page > 0 && (
          <Button onClick={decrementPage}>
            <KeyboardArrowLeft fontSize="large" />
          </Button>
        )}
        <Typography variant="h5"> {page + 1}</Typography>
        {hasMore && (
          <Button onClick={incrementPage}>
            <KeyboardArrowRight fontSize="large" />
          </Button>
        )}
      </Paper>
    );

  return null;
}