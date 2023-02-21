export interface Products {
  [index: number]: Product;
}

export interface Product {
  id: number;
  name: string;
  description: string|null;
  image: string;
  price: number|null;
  sequence: number;
  active: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string|null;
}

export interface Events {
  [index: number]: Event;
}

export interface Event {
  id: number;
  name: string;
  description: string|null;
  image: string;
  price: number|null;
  sequence: number;
  active: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string|null;
}

export interface Members {
  [index: number]: Member;
}

export interface Member {
  id: number;
  name: string;
  description: string|null;
  image: string;
  sequence: number;
  active: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string|null;
}

