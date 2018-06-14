import { DCoordinates } from "./models/dcoordinates";

export class Constants {
   
    static readonly fovLocation: DCoordinates = new DCoordinates(52.493256,13.446082); //lat, lon

    static readonly earthRadius: number = 6371000; //meter

    static readonly txtCustomerPath: string = '../customers.txt' //path to txt customer file
}