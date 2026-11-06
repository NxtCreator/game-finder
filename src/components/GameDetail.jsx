import { useParams } from "react-router";

const GameDetail = () => {
  const { id } = useParams();
  return (
    <div>
      GameDetail:
      {id}
    </div>
  );
};
export default GameDetail;
