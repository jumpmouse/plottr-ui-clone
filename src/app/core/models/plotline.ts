export interface Scene {
  id: string;
  description: string;
}

export interface Plotline {
  id: string;
  name: string;
  scenes: Record<string, Scene[]>;
}
