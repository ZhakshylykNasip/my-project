import "../componets/MainContent.css";
import { Button } from "./UI/button/Button";

export const MainContent = ({ image, title, rating, id, setItems, items ,dataEdit}) => {
  const deleteItem = (id) => {
    const filterItem = items.filter((el) => el.id !== id);
    setItems(filterItem);
    console.log(id);
  };

 

  return (
    <div className="main-movie">
      <div className="main">
        <img src={image} alt="photo" />
      </div>

      <div className="block-two">
        <h4>{title}</h4>
        <span className="rating">{rating}/5 stars</span>
        <Button
          onClick={() => deleteItem(id)}
          bgColor={"red"}
          width={"100px"}
          height={"40px"}
        >
          DELETE
        </Button>
        <Button
          onClick={() => dataEdit(id)}
          bgColor={"blue"}
          width={"80px"}
          height={"40px"}
        >
          EDIT
        </Button>
      </div>
    </div>
  );
};
