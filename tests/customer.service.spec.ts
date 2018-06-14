
import { CustomerService } from '../services/customer.service';
import { expect } from 'chai';
import 'mocha';

describe('getAllCustomers function', () => {

  const filePath: string = "../tests/test.txt";

  it('should return a Customer Arry of Size 7', () => {
    var customerService: CustomerService = new CustomerService();
    var aArray = customerService.readInput(filePath);

    const result = customerService.getAllCustomers(aArray);

    expect(result).to.have.lengthOf(7);;
  });

});

describe('getValidCustomers function', () => {

  const filePath: string = "../tests/test.txt";

  it('should return a Customer Arry of Size 2', () => {
    var customerService: CustomerService = new CustomerService();
    var aArray = customerService.readInput(filePath);

    const result = customerService.getValidCustomers(aArray);

    expect(result).to.have.lengthOf(2);
  });

});