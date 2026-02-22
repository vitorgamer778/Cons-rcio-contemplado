export type CardStatus = 'Disponível' | 'Vendido';

export interface CreditCard {
  id: string;
  type: 'Imóvel' | 'Veículo' | 'Pesados' | 'Serviços';
  creditValue: number;
  downPayment: number;
  installments: string;
  status: CardStatus;
}
