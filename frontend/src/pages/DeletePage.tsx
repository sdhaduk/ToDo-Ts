import React from "react";
import { Grid, Typography, Button, ButtonGroup } from "@mui/material";

const DeletePage: React.FC = () => {

  return (
    <Grid container sx={{ justifyContent: 'center', mt: 50}}>
      <Grid item sx={{ mt: 1 }}>
        <Typography variant="h2">
          Confirm
        </Typography>
        <ButtonGroup sx={{ml: 1}}>
        <Button color="error" size="large" variant="outlined" sx={{mt: 1}}>
          Delete
        </Button>
        <Button color="primary" size="large" variant="outlined" sx={{mt: 1}}>
          Back
        </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

export default DeletePage;
