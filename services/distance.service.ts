import { DCoordinates } from "../models/dcoordinates";
import { Constants } from "../constants";


export class DistanceService {

    // returns distance in metres, utilizing the global distance function
    // takes two 2D-Coordinates as inputs
    public getDistance(location1: DCoordinates, loction2: DCoordinates): number {
            
        var φ1 = this.toRadians(location1.latitude);
        var φ2 = this.toRadians(loction2.latitude);
        var Δφ = this.toRadians(loction2.latitude-location1.latitude);
        var Δλ = this.toRadians(loction2.longitude-location1.longitude);
        
        var a: number = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ/2) * Math.sin(Δλ/2);
        var c: number = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        
        let distance = Constants.earthRadius * c;

        return distance;
    }

    // helper method to convert degrees to radians
    private toRadians(degrees: number): number {
        return degrees * Math.PI / 180;
    }
}