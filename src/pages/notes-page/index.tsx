import "./styles.css";
import { Note } from "../../ui/note";
import { useNotes } from "../../modules/hooks/use-notes";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import {} from "@dnd-kit/utilities"

type NoteType = {
  id: string;
  title: string;
  description: string;
};

const NotesPage = () => {
  const { notes, setNotes } = useNotes();

  const handleDragEnd = (event: DragEndEvent) => {
    const {active, over} = event;

    if (over){
      setNotes((notes) => {
        const oldIndex = notes.findIndex(note => note.id === active.id)
        const newIndex = notes.findIndex(note => note.id === over.id)
        return arrayMove(notes, oldIndex, newIndex)
      })
    }

  }

  return (
    <div className="container-notes-page">
      <DndContext onDragEnd={handleDragEnd}>
        <SortableContext items={notes}>
        {notes.map((note: NoteType) => (
          <Note
          key={note.id}
          id={note.id}
          title={note.title}
          description={note.description}
          />
        ))}
      </SortableContext>
    </DndContext>
    </div>
  );
};

export { NotesPage };
