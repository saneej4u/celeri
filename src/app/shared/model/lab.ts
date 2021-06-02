import { Product } from './product';

export interface Lab {
    LabId: string;
    Name: string;
    Description: string;
    Products : Product[];
  }