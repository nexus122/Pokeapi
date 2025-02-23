export interface PokeResult {
  name: string;
  url: string;
}

export interface PokeResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokeResult[];
}
