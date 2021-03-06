export const COFFEE_STATUS_ARRAY = [
  'sell',
  'suspend',
  'be_sold',
  'sold_out',
] as const;

export interface Option {
  id: number;
  name_en: string;
  name_ko: string;
  sort: number;
  thumbnail: string;
}

export interface Coffee {
  id: number;
  is_delete: number;
  name_en: string;
  name_ko: string;
  slug: string;
  sort: number;
  star: number;
  status: typeof COFFEE_STATUS_ARRAY[number];
  thumbnail: string;
  comments: string;
  options: Option[];
}

export interface CoffeeList {
  id: number;
  name_en: string;
  name_ko: string;
  slug: string;
  parents?: number;
  created_at: string;
  updated_at: string;
  products: Coffee[];
}
