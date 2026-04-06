export interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  variants: string[];
  image: string;
  specs?: {
    material: string;
    size: string;
    colorOptions: string;
    strength: string;
  };
}

export interface Industry {
  name: string;
  description: string;
  icon: string;
}
