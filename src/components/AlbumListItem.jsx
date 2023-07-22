import { Button, CircularProgress } from "@mui/material";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrash } from "react-icons/go";
import { useAddPhotoMutation, useRemoveAlbumMutation } from "../redux";
import PhotoList from "./PhotoList";

function AlbumListItem({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();
  const handleClick = () => {
    removeAlbum(album);
  };

  const [addPhoto, results2] = useAddPhotoMutation();
  const handlePhotoAdd = () => {
    addPhoto(album);
  };

  const header = (
    <>
      <button onClick={handleClick} className="deleteButton">
        {results.isLoading ? (
          <CircularProgress style={{ width: "15px", height: "15px" }} />
        ) : (
          <GoTrash />
        )}
      </button>
      {album.title}
    </>
  );

  const addPhotoButton = (
    <>
      <div className="topArrangement">
        <Button onClick={handlePhotoAdd} variant="outlined" color="error">
          {results.isLoading ? <CircularProgress /> : <span>Add a Photo+</span>}
        </Button>
      </div>
    </>
  );

  return (
    <div>
      <ExpandablePanel header={header} addPhotoButton={addPhotoButton}>
        <PhotoList album={album} />
      </ExpandablePanel>
    </div>
  );
}

export default AlbumListItem;
