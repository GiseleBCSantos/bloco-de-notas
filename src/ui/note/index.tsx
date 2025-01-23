import { Link } from "react-router-dom";
import { useState } from "react";
import { Modal } from "../modal";
import editIcons from "/icons/editar.png";
import deleteIcons from "/icons/excluir.png";
import "./styles.css";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type NoteProps = {
  id: string;
  title: string;
  description: string;
};

const Note = ({ id, title, description }: NoteProps) => {
  const [showModal, setShowModal] = useState(false);

  
  const note = {
    id,
    title,
    description,
  };

  const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id: note.id})
  
  const handleDelete = () => {
    setShowModal((prevState) => !prevState);
  };

  const style = {
    transform: CSS.Translate.toString(transform),
    transition
  }

  return (
    <>
      {showModal && <Modal modalChange={handleDelete} />}
      <div className="container-nota" ref={setNodeRef} {...attributes} {...listeners} style={style}>
        <div className="dados-nota">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="container-botoes">
            <Link to="/editar" state={note}>
              <button>
                <img src={editIcons} alt="Editar" />
              </button>
            </Link>

            <Link to="/" state={note}>
              <button onClick={handleDelete}>
                <img src={deleteIcons} alt="Excluir" />
              </button>
            </Link>
        </div>
      </div>
    </>
  );
};

export { Note };
