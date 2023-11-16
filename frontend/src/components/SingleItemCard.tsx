import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ItemType } from "../types/types";
import { Link } from "react-router-dom";

interface Props {
  item: ItemType;
}

const SingleItemCard: React.FC<Props> = ({ item }: Props) => {
  const id = item._id

  return (
    <Card sx={{ minWidth: 275, display: "inline-block"}}>
      <CardContent>
        <Typography variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" color="primary" variant="outlined">
          View
        </Button>
        <Button size="small" color="success" variant="outlined" to={`/update/${id}`} component={Link}>
          Update
        </Button>
        <Button size="small" color="error" variant="outlined" to={`/delete/${id}`} component={Link}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default SingleItemCard;
