import React from "react";
import { ItemType } from "../types/types";
import SingleItemCard from "./SingleItemCard";
import { Grid } from "@mui/material";

interface Props {
  items: ItemType[];
}

const ItemCards: React.FC<Props> = ({ items }: Props) => {
  return (
    <Grid container spacing={1} sx={{justifyContent: "center"}}>
      {items.map((item) => (
        <Grid item>
          <SingleItemCard key={item._id} item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemCards;
