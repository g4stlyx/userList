import React from 'react'
import { useRemovePhotoMutation } from '../redux'
import { CircularProgress } from '@mui/material'
import { GoTrash } from 'react-icons/go'

function PhotoListItem({photo}){
  
  const [removePhoto,results] = useRemovePhotoMutation()
  const handleRemovePhoto= ()=>{
    removePhoto(photo)
  }  
  
  
  return (
    <div className='imgAndButton'>
        <img src={photo.url} />
        <button className='deleteButton' onClick={handleRemovePhoto}>
        {
            results.isLoading?(
              <CircularProgress style={{width:"15px",height:"15px"}}/>
            ):(
              <GoTrash />
            )
        }
        </button>
    </div>
  )
}

export default PhotoListItem