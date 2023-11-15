import React from "react";
import {
  FormControl,
  TextField,
  Grid,
  Button
} from "@mui/material";

const CreateTaskForm: React.FC = () => {
  return (
    <Grid container>
      <FormControl>
        <Grid item>
          <TextField
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
        <Button sx={{mt:1}} variant="outlined">Create New Task</Button>
      </FormControl>
    </Grid>
  );
};

export default CreateTaskForm;
