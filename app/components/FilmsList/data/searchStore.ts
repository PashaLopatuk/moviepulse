import { create } from 'zustand'
import { searchStoreType } from './types'

const useSearchStore = create<searchStoreType>((set) => ({
    search: 'pulp fiction',
    setSearch: (search: string) => set(state => ({
        search: search
    }))
}))

export default useSearchStore