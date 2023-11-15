import React, { useState } from "react";
import { FormControl, TextField, Grid, Button } from "@mui/material";
import axios from "axios";

interface Props {
  getData: () => void;
}

const CreateTaskForm: React.FC<Props> = ({getData} : Props) => {

  const [title, setTitle] = useState<string | null>(null)
  const [description, setDescription] = useState<string | null>(null)

  const saveItem = () => {
    const data = {
      title,
      description
    };

    axios
    .post("http://localhost:3000/items/create-item", data)
    .then(() => {
      getData();
    })
    .catch((error) => {
      console.log(error)
    });
  };



  return (
    <Grid container>
      <FormControl>
        <Grid item>
          <TextField
            onChange={(e) => setTitle(e.target.value)} 
            id="title"
            variant="outlined"
            label="Title"
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
            label="Description"
            sx={{
              width: { sm: 200, md: 300 },
              "& .MuiInputBase-root": {
                height: 55,
              },
            }}
          />
        </Grid>
        <Button sx={{ mt: 1 }} variant="outlined" onClick={saveItem}>
          Create New Task
        </Button>
      </FormControl>
    </Grid>
  );
};

export default CreateTaskForm;
