import React from "react";
import { ItemType } from "../Types/types";
import SingleItemCard from "./SingleItemCard";

interface Props {
  items: ItemType[];
}

const ItemCards: React.FC<Props> = ({ items }: Props) => {
  return (
    <div>
      {items.map((item) => (
        <SingleItemCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default ItemCards;
