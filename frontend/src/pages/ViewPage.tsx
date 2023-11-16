import React, { useState, useEffect } from "react";
import { Grid, Typography, Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { ItemType } from "../types/types";

const ViewPage: React.FC = () => {
  const { id } = useParams();
  const [item, setItem] = useState<ItemType | null>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/items/get-item/${id}`)
      .then((response) => {
        setItem(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Grid container sx={{ justifyContent: "center", mt: 2 }}>
      <Grid item>
        <Typography variant="h2" sx={{ mt: 1 }}>
          {item?.title}
        </Typography>
        <Typography variant="h4" sx={{ mt: 1 }}>
          {item?.description}
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 1 }}>
          {item?._id}
        </Typography>
        <Button
          sx={{ mt: 2 }}
          color="error"
          variant="outlined"
          to="/"
          component={Link}
        >
          Back
        </Button>
      </Grid>
    </Grid>
  );
};

export default ViewPage;
