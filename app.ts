import { CustomerService } from "./services/customer.service";
import { Constants } from "./constants";

class App {

    public static main() {
        var cs: CustomerService = new CustomerService;

        var arrayText: Array<string> = cs.readInput(Constants.txtCustomerPath);

        
       // console.log("-------- Get All Customers --------")
       // cs.getAllCustomers(arrayText);
       // console.log(cs.allCustomerList);


        console.log("-------- Get Valid Customers --------\n");
        cs.getValidCustomers(arrayText);

        console.log("\n-------- Show Valid Customers --------\n");
        console.log(cs.validCustomerList);

    }
}

App.main();