
import { Button, CircularProgress, Divider, Skeleton } from "@mui/material"
import {useAddAlbumMutation, useFetchAlbumsQuery} from "../redux"
import AlbumListItem from "./AlbumListItem"

function AlbumList({user}) {
  
  const {data,isError,isFetching} = useFetchAlbumsQuery(user)
  const [addAlbum,results] = useAddAlbumMutation()

  const handleAlbumAdd = ()=>{
    addAlbum(user)
  }

  let content
    if(isFetching){ 
      content=(
      <Skeleton variant="rectangular" sx={{width:"100%",height:"100px"}} />
    )}
    else if(isError){
      content=(
        <div>An Error Occured.</div>
      )
    }
    else{
      content= data.map(album=>{
        return <AlbumListItem key={album.id} album={album} />
      })
    }
    

  return (
    <div>
      <div className="topArrangement">
        <h2>Albums of {user.name}</h2>
        <Button onClick={handleAlbumAdd} variant="outlined" color="success">     
          {
          results.isLoading
          ?<CircularProgress />
          :<span>Add an Album+</span>
          }
        </Button>
      </div>
      <Divider />
      <div>
        {content}
      </div>

    </div>
  )
}

export default AlbumList