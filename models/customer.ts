import { DCoordinates } from "./dcoordinates";

export class Customer {
    
    id: string;
    location: DCoordinates;

    constructor(id: string, location: DCoordinates) {
        this.id = id;
        this.location = location;
    }
}