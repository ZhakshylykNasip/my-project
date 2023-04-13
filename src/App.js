import "./App.css";
import { Header } from "./componets/Header.jsx";
import { MainContent } from "./componets/MainContent.jsx";
import { useState } from "react";
import { ModalOpen } from "./componets/modal/ModalOpen";
import { EditModal } from "./componets/modal/editModal/EditModal";

function App() {
  const [items, setItems] = useState([
    {
      title: "avatar",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxyP-EPxLLd1DhWIGHhl-JhFJRZofodmmeU1Du2dTjMw&s",
      rating: 4,
      id: 2,
    },
  ]);
 
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editData, setEditData] = useState();

  const addMovies = (data) => {
    const saveMovie = [...items, data];
    setItems(saveMovie);
  };

  function openModalHendler(event) {
    event.preventDefault();
    setModal((prev) => !prev);
  }

  const dataEdit = (id) => {
    items.map((el) => {
      if (el.id === id) {
        const newEditData = {
          ...el,
          id: el.id,
          title: el.title,
          img: el.img,
          rating: el.rating,
        };
        setEditData(newEditData);
      }
    });
    setEditModal(true);
  };

  const saveEdit = (data) => {
    const {id, title, img, rating} = data
    items.map((el) => {
      if (el.id === id) {
        el.id = id;
        el.title = title;
        el.img = img;
        el.rating = rating;
      }
    });



    
    setEditModal(false);
  };

  const closeEditeModa = () => {
    setEditModal(false);
  };

  return (
    <div className="App">
      <Header openModalHendler={openModalHendler} />
      {modal ? (
        <ModalOpen
          openModalHendler={openModalHendler}
          setModal={setModal}
          addMovies={addMovies}
        />
      ) : null}
      {editModal ? (
        <EditModal
          closeEditeModa={closeEditeModa}
          saveEdit={saveEdit}
          editData={editData}
        />
      ) : null}

      {items.map((el) => {
        return (
          <MainContent
            key={el.id}
            title={el.title}
            id={el.id}
            image={el.img}
            rating={el.rating}
            items={items}
            setItems={setItems}
            dataEdit={dataEdit}
          />
        );
      })}
    </div>
  );
}

export default App;
