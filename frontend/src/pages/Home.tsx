import React, { useEffect } from "react";
import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import SingleItemCard from "../components/SingleItemCard";
import { ItemType } from "../types/types";
import Loading from "../components/Loading";
import ItemCards from "../components/ItemCards";

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

  return <div>{loading ? <Loading /> : <ItemCards items={items} />}</div>;
};

export default Home;
