
interface Image {
  height: number;
  imageUrl: string;
  width: number;
}

interface Video {
  i: Image;
  id: string;
  l: string;
  s: string;
}

export interface ShowType {
  i: Image;
  id: string;
  l: string;
  q: string;
  rank: number;
  s: string;
  v: Video[];
  vt: number;
  y: number;
  yr?: string;
}

export interface ServerResponse {
  d: Show[];
  q: string;
  v: number;
}

export interface showsStoreType { 
    shows: Show[]
    isLoading: boolean,
    errors: [],

    loadShows: (search: string) => void
}

export interface searchStoreType {
    search: string,
    setSearch: (search: string) => void
}