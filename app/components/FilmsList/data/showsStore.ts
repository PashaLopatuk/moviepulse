import { create } from "zustand";
import { ShowType, ServerResponse, showsStoreType } from './types'
import fetchShows from "./fetch";


const useShowsStore = create<showsStoreType>( (set) => ({
    shows: [],
    isLoading: false,
    errors: [],
    
    loadShows: async ( search: string ) => {
        const result: ServerResponse = await fetchShows( search )
        const shows: ShowType[] = result.d
        set({ shows: shows })
    }
    

}))

export default useShowsStore