import type { StateCreator } from "zustand"
import type { Recipe } from "../types"
import { createNotificationSlice, type NotificationSliceType } from "./notificationSlice"


export type FavoritesSliceType = {
    favorites: Recipe[]
    handleClickFavorite: (recipie: Recipe) => void
    favoriteExists: (id: Recipe['idDrink']) => boolean
    loadFromStorage: () => void
}

export const createFavoriteSlice : StateCreator<FavoritesSliceType & NotificationSliceType, [], [], FavoritesSliceType> = (set, get, api) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        if(get().favorites.some(favorites => favorites.idDrink === recipe.idDrink)){
            // Existe
            // set({
            //     favorites: get().favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            // })
            set((state) => ({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            }))
            createNotificationSlice(set, get, api).showNotification({
                text: 'Se elimino de favoritos',
                error: false
            })
        }else {
            // No existe
            // set({
            //     favorites: [...get().favorites, recipe]
            // })
            set((state) => ({
                favorites: [...state.favorites, recipe]
            }))
            createNotificationSlice(set, get, api).showNotification({
                text: 'Se agrego a favoritos',
                error: false
            })

            localStorage.setItem('favorites', JSON.stringify(get().favorites))
        }
    },
    favoriteExists: (id) => {
        return get().favorites.some(favorites => favorites.idDrink === id)
    },
    loadFromStorage: () => {
        const storedFavorites = localStorage.getItem('favorites')
        if(storedFavorites){
            set({
                favorites: JSON.parse(storedFavorites)
            })
        }
    }
})