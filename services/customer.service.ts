import * as fs from "fs";
import * as path from 'path';
import { Customer } from "../models/customer";
import { Constants } from "../constants";
import { DCoordinates } from "../models/dcoordinates";
import { DistanceService } from "./distance.service";



export class CustomerService {

    allCustomerList: Array<Customer> = [];
    validCustomerList: Array<Customer> = [];

    distanceService: DistanceService = new DistanceService(); 

    // only returns customers with valid information and within 100km, eg. 100000 metres
    getValidCustomers(arrayText:Array<string>): Array<Customer>{
        var aArray: Array<Customer> = this.getAllCustomers(arrayText);
        var cArray: Array<Customer> = [];

        for (let customer of aArray){
            var distance: number = this.distanceService.getDistance(customer.location, Constants.fovLocation);
            if (isNaN(distance)){
                console.log("Warning! Customer " + customer.id + " contains unvalid location!")
            } else if (customer.id.length != 36){
                console.log("Warning! Customer " + customer.id + " contains unvalid id!")
            } else if (distance < 100000){
                cArray.push(customer);
            }
        }

        this.validCustomerList = cArray;
        return this.validCustomerList;
    }


    // returns all customers regardless of correctness or distance
    getAllCustomers(arrayText:Array<string>): Array<Customer>{
        var cArray: Customer[] = [];

        for (let entry of arrayText){
           var customer: Customer = this.mapValues(entry);
           cArray.push(customer);
        }

        this.allCustomerList = cArray;
        return this.allCustomerList;
    }

    // helper method to read in a txt file
    public readInput(txtPath: string): Array<string>{
        var text = fs.readFileSync(path.join(__dirname, txtPath)).toString('utf8');
        return text.split("\n").sort();
    }
    
    // helper method to map the value to a Customer object
    private mapValues(entry: string): Customer {
        var valueArray = entry.split(",");
        var id = valueArray[0].split(":")[1].replace(/\s/g, ""); //remove whitespace
        var lat = valueArray[1].split(":")[1]
        var long = valueArray[2].split(":")[1]
        return new Customer(id, new DCoordinates(+lat, +long))
    }


    // entry = entry.replace('id', '\"id\"');
    // entry = entry.replace('lat', '\"lat\"');
    // entry = entry.replace('long', '\"long\"');

    // var t = this.begin.concat(entry.substring(0, entry.length - 2));
    // t = t.concat(this.end);
    // var k = JSON.parse(t);


}