export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: IOrigin;
  location: IOrigin;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface IOrigin {
  name: string;
  url: string;
}

export interface IInfo {
  count: number;
  pages: number;
  next: string;
  prev?: string | null;
}

export interface IServerResponse<K, T> {
  info: K;
  results: T[];
}
