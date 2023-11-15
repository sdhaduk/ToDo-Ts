import React, { useEffect } from "react";
import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { ItemType } from "../types/types";
import Loading from "../components/Loading";
import ItemCards from "../components/ItemCards";
import { Grid, Typography } from "@mui/material";
import CreateTaskForm from "../components/CreateTaskForm";

const Home: React.FC = () => {
  const [items, setItems] = useState<ItemType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/items/get-items")
      .then((response: AxiosResponse) => {
        setItems(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <Grid container sx={{ justifyContent: "center" }} spacing={2}>
      <Grid item sx={{ margin: 2 }}>
        <Typography variant="h2">To-Do List</Typography>
      </Grid>
      {loading ? <Loading /> : <ItemCards items={items} />}

      <Grid item sx={{ mt: 5 }}>
        <CreateTaskForm />
      </Grid>
    </Grid>
  );
};

export default Home;
