export interface Order 
{
    OrderId?: string;
    OrderCode?: string;

    LabId?: string;
    LabName?: string;

    DentistId: string;
    DentistName?: string;

    ProductName?: string;

    PracticeName?: string;
    PracticeAddressLine1?: string;
    PracticeAddressLine2?: string;
    PracticeCityOrTown?: string;
    PracticePostcode?: string;
    PracticeCounty?: string;
    PracticeCountry?: string;
    PracticeDeliveryDate?: any;
 
    PatientRef: string;
    PatientFirstName: string;
    PatientLastName: string;

    ServiceLevel?:string;
    PromoCode?:string;
    
  }