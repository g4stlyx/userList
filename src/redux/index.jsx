import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import {setupListeners} from "@reduxjs/toolkit/dist/query"
import {userApi} from "./apis/userApi"
import {albumApi} from "./apis/albumApi"
import { photoApi } from "./apis/photoApi"

export const store = configureStore({
    reducer:{
        [userApi.reducerPath]:userApi.reducer,
        [albumApi.reducerPath]:albumApi.reducer,
        [photoApi.reducerPath]:photoApi.reducer
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(userApi.middleware).concat(albumApi.middleware).concat(photoApi.middleware)
    }
})

setupListeners(store.dispatch)

export {
    useAddUsersMutation,
    useFetchUsersQuery,
    useRemoveUserMutation
} from "./apis/userApi"

export {
    useAddAlbumMutation,
    useFetchAlbumsQuery,
    useRemoveAlbumMutation
} from "./apis/albumApi"

export {
    useAddPhotoMutation,
    useFetchPhotosQuery,
    useRemovePhotoMutation
} from "./apis/photoApi"

