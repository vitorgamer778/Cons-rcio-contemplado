export type ListingStatus = 'Disponível' | 'Reservado';

export interface PropertyListing {
  id: string;
  title: string;
  category: 'Casa' | 'Planta';
  price: number;
  location: string;
  area: number;
  bedrooms: number;
  status: ListingStatus;
}
