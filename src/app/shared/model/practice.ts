export interface Practice 
{
    PracticeId?: string;
    DentistId: string;
    Name: string;
    AddressLine1: string;
    AddressLine2?: string;
    CityOrTown?: string;
    Postcode: string;
    County?: string;
    Country?: string;
    Telephone: string;
  }