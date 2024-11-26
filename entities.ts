export interface Product {
    id: bigint; // BIGINT
    name: string; // STRING(255)
    price: number; // NUMERIC(6,2)
    description?: string; // TEXT, opcional
    technical_description?: string; // TEXT, opcional
    sat_key?: string; // STRING(50), opcional
    data_sheet?: string; // STRING(255), opcional
    category_id?: bigint; // BIGINT, opcional
    inventory_id?: bigint; // BIGINT, opcional
    category?: Category; // Relación con Category (opcional)
  }
  
  export interface Category {
    id: bigint; // BIGINT
    name: string; // STRING(50)
    products?: Product[]; // Relación con múltiples productos (opcional)
  }
  
  export interface Inventory {
    id: bigint, 
    quantity: number,
    sold_quantity: number,
    bin_location_id: bigint,
    status_id: bigint,
    inventory?: Inventory;
  }
