import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {faker} from "@faker-js/faker"


// const pause = duration=>{
//     //tüm işlemlere 1 sn pause koyduk çalışıyorlar mı görmek için
//     return new Promise(resolve=>{
//         setTimeout(resolve,duration)
//     })
// }

const userApi = createApi({
    reducerPath:"users",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3000",
        // fetchFn: async (...args)=>{
        //     await pause(1000)
        //     return fetch(...args)
        // }
        
    }),
    endpoints(builder){
        return {
            // get:query post,put,delete:mutation
            fetchUsers:builder.query({
                providesTags:["User"],
                query:()=>{
                    return{
                        url:"/users",
                        method:"GET"
                    }
                }
            }),
            addUsers:builder.mutation({
                invalidatesTags:()=>{
                    return [{type:"User"}]
                },
                query:()=>{
                    return{
                        url:"/users",
                        method:"POST",
                        body:{
                            name: faker.name.fullName()
                        }
                    }
                }
            }),
            removeUser:builder.mutation({
                invalidatesTags:()=>{
                    return [{type:"User"}]
                },
                query:user=>{
                    return{
                        url:`/users/${user.id}`,
                        method:"DELETE"
                    }
                }
            }),
        }
    }
})
export const {useFetchUsersQuery,useAddUsersMutation,useRemoveUserMutation} = userApi
export {userApi}