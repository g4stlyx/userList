import { Button, Skeleton,CircularProgress } from "@mui/material";
import {useFetchUsersQuery,useAddUsersMutation} from "../redux"
import UserListItem from "./UserListItem";


function UserList() {
  const {data,isError,isFetching} = useFetchUsersQuery()

  const [addUser,results] = useAddUsersMutation()

  const handleUserAdd = ()=>{
    addUser()
  }

  let content;
  //ilk data çekilişinde çalışır; kare,gri bir taslak gösterir
  if(isFetching){ 
    content=(
    <Skeleton variant="rectangular" sx={{width:"100%",height:"600px"}} />
  )}
  else if(isError){
    content=(
      <div>An Error Occured.</div>
    )
  }
  else{
    content= data.map(user=>{
      return <UserListItem key={user.id} user={user} />
    })
  }

  return (
    <div>
      <div className="topArrangement">
        <h1 style={{fontSize:"30px"}}>Users</h1>
        <Button onClick={handleUserAdd} variant="outlined">     
          {
          results.isLoading
          ?<CircularProgress />
          :<span>Add a User+</span>
          }
        </Button>
      </div>

      <div className="mainPanel">
      {content}
      </div>
    </div>
  )
}

export default UserList