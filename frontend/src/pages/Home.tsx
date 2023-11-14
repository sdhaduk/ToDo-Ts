import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

interface Item {
  _id: string;
  title: string;
  description: string;
}

const Home = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/items/get-items")
      .then((response: AxiosResponse) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return <div>Home</div>;
};

export default Home;
