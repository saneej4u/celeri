export interface Order 
{
    OrderId?: string;
    OrderCode?: string;

    DentistFirstName: string;
    DentistLastName: string;
    
    PracticeName: string;
    PracticeAddressLine1: string;
    PracticeAddressLine2?: string;
    PracticeStreet: string;
    PracticeCityOrTown: string;
    PracticePostcode: string;
    PracticeCounty?: string;
    PracticeCountry?: string;
    PracticeDeliveryDate?: any;
 
    PatientRef: string;
    PatientFirstName: string;
    PatientLastName: string;

    ServiceLevel?:string;
    PromoCode?:string;
    
  }