export type Tile = { value: number; id: number; prevPosition?: [number, number]; merged?: boolean; slidePath?: [number, number][]; collisionId?: number }

export type Grid = (Tile | null)[][]

export interface Stats {
  highScore: number;
  gamesPlayed: number;
  wins: number;
}

export type Directions = 'up' | 'down' | 'left' | 'right'