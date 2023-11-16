import React from "react";
import { Grid, Typography, Button, ButtonGroup } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DeletePage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const deleteItem = () => {
    axios
      .delete(`http://localhost:3000/items/delete-item/${id}`)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Grid container sx={{ justifyContent: "center", mt: 50 }}>
      <Grid item sx={{ mt: 1 }}>
        <Typography variant="h2">Confirm</Typography>
        <ButtonGroup sx={{ ml: 1 }}>
          <Button color="error" size="large" variant="outlined" sx={{ mt: 1 }} onClick={deleteItem}>
            Delete
          </Button>
    
          <Button
            color="primary"
            size="large"
            variant="outlined"
            sx={{ mt: 1 }}
            to="/"
            component={Link}
          >
            Back
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

export default DeletePage;
