import { create } from "zustand";
import { createRecipesSlice, type RecipesSliceType } from "./recipeSlice";
import { devtools } from "zustand/middleware";
import { createFavoriteSlice, type FavoritesSliceType } from "./favoritesSlice";
import { createNotificationSlice, type NotificationSliceType } from "./notificationSlice";
import { createAISlice, type AISliceType } from "./aiSlice";


export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType & AISliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoriteSlice(...a),
    ...createNotificationSlice(...a),
    ...createAISlice(...a)
})))