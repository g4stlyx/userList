
import {Skeleton } from "@mui/material"
import { useFetchPhotosQuery} from "../redux"
import PhotoListItem from "./PhotoListItem"

function PhotoList({album}) {
  
  const {data,isError,isFetching} = useFetchPhotosQuery(album)

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
      content= data.map(photo=>{
        return <PhotoListItem key={photo.id} photo={photo} />
      })
    }
    

  return (
    <div>
      
      <div className="photoList">
        {content}
      </div>

    </div>
  )
}

export default PhotoList

