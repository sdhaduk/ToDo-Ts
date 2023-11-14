import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ItemType } from "../types/types";

interface Props {
  item: ItemType;
}

const SingleItemCard: React.FC<Props> = ({ item }: Props) => {
  return (
    <Card sx={{ minWidth: 275, display: "inline-block"}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {item._id}
        </Typography>
        <Typography variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="error" variant="outlined">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default SingleItemCard;
