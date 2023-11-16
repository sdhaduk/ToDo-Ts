import {
  Grid,
  Typography,
  Button,
  ButtonGroup,
  FormControl,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdatePage: React.FC = () => {
  const { id } = useParams();
  const [title, setTitle] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const navigate = useNavigate();


  const updateItem = () => {
    const data = {
        title,
        description
    };

    axios
    .put(`http://localhost:3000/items/update-item/${id}`, data)
    .then(() => {
        navigate("/")   
    })
    .catch((error) => {
        console.log(error)
    });
  };

  return (
    <Grid container sx={{ justifyContent: "center", mt: 2 }}>
      <Grid item>
        <Typography variant="h2">Update</Typography>

        <FormControl sx={{ mt: 5 }}>
          <Grid item>
            <TextField
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              variant="outlined"
              label="New Title"
              sx={{
                width: { sm: 200, md: 300 },
                "& .MuiInputBase-root": {
                  height: 55,
                },
              }}
            />
          </Grid>

          <Grid item sx={{ mt: 1 }}>
            <TextField
              onChange={(e) => setDescription(e.target.value)}
              id="desc"
              variant="outlined"
              label="New Description"
              sx={{
                width: { sm: 200, md: 300 },
                "& .MuiInputBase-root": {
                  height: 55,
                },
              }}
            />
          </Grid>
          <ButtonGroup sx={{ mt: 1 }}>
            <Button sx={{ mt: 1 }} variant="outlined" onClick={updateItem}>
              Update
            </Button>
            <Button
              sx={{ mt: 1 }}
              variant="outlined"
              color="error"
              to="/"
              component={Link}
            >
              Back
            </Button>
          </ButtonGroup>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default UpdatePage;
