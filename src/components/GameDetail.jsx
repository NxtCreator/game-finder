import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchGameById } from "../data/fetchData";

const GameDetail = () => {
  const [game, setGame] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchGameById(id)
      .then((fetchedGame) => {
        setGame(fetchedGame);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);
  return (
    <div>
      GameDetail:
      {id}
    </div>
  );
};
export default GameDetail;
