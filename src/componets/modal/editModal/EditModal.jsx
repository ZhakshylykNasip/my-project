import React, { useState } from "react";
import { Input } from "../../UI/input/Input";
import "../../modal/ModalOpen.css";
import { Button } from "../../UI/button/Button";

export const EditModal = ({saveEdit,editData,closeEditeModa }) => {
  const [inpunNameText, setInputNameText] = useState(editData.title);
  const [inpunUrlText, setInputUrlText] = useState(editData.img);
  const [inpunRating, setInputRating] = useState(editData.rating);

  const getInputNameValue = (e) => {
    setInputNameText(e.target.value);
  };

  const getInputUrlValue = (e) => {
    setInputUrlText(e.target.value);
  };

  const getInputRatingValue = (e) => {
    setInputRating(e.target.value);
  };

  const addMovie = (event) => {
    event.preventDefault();

    const product = {
      id: editData.id,
      title: inpunNameText,
      img: inpunUrlText,
      rating: inpunRating,
    };


    saveEdit(product);

    console.log(product);
    setInputNameText("");
    setInputUrlText("");
    setInputRating("");
  };

  return (
    <div className="wrapperModal">
      <form>
        <label>
          Movie title:
          <Input value={inpunNameText} onChange={getInputNameValue} />
        </label>
        <label>
          Image URL:
          <Input type={'url'} value={inpunUrlText} onChange={getInputUrlValue} />
        </label>
        <label>
          Your Rating:
          <Input
            type="number"
            value={inpunRating}
            onChange={getInputRatingValue}
          />
        </label>
        <div className="btns">
          <Button
            color="blue"
            width="80px"
            height="30px"
            onClick={closeEditeModa}
          >
            Cancel
          </Button>
          <Button
            color="white"
            width="80px"
            height="30px"
            bgColor="blue"
            onClick={addMovie}
          >
            ADD
          </Button>
        </div>
      </form>
    </div>
  );
};
