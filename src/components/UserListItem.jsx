import ExpandablePanel from "./ExpandablePanel"
import AlbumList from "./AlbumList"
import {GoTrash} from "react-icons/go"

import {useRemoveUserMutation} from "../redux"
import { CircularProgress } from "@mui/material"

function UserListItem({user}) {

  const [removeUser,results] = useRemoveUserMutation()

  const handleClick = ()=>{
    removeUser(user)
  }

  const header=(
    <>
    <button onClick={handleClick} className="deleteButton">
      {
        results.isLoading?(
          <CircularProgress style={{width:"15px",height:"15px"}}/>
        ):(
          <GoTrash />
        )
      }
    </button>
    {user.name}
    </>
  )
  
  
  return (
    <div>
        <ExpandablePanel header={header}> 
            <AlbumList user={user}/>
        </ExpandablePanel>
    </div>
  )
}

export default UserListItem