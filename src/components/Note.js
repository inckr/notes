import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <DeleteForeverIcon
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
        />
      </div>
    </div>
  );
};

export default Note;
