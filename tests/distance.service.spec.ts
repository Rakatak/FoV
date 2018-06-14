
import { DistanceService } from '../services/distance.service';
import { DCoordinates } from '../models/dcoordinates';
import { expect } from 'chai';
import 'mocha';

describe('getDistance function', () => {

  it('should return 665847.9292522067', () => {
    var distanceService = new DistanceService;
    var coord1 = new DCoordinates(50.113314, 50.249802);
    var coord2 = new DCoordinates(52.442321, 41.422112);

    const result = distanceService.getDistance(coord1, coord2);

    expect(result).to.equal(665847.9292522067);
  });

  it('should return 0.0', () => {
    var distanceService = new DistanceService;
    var coord1 = new DCoordinates(50.113314, 50.249802);
    var coord2 = new DCoordinates(50.113314, 50.249802);

    const result = distanceService.getDistance(coord1, coord2);

    expect(result).to.equal(0.0);
  });

  it('should return NaN', () => {
    var distanceService = new DistanceService;
    var coord1 = new DCoordinates(1.113314, 3.249802);
    var coord2 = new DCoordinates(Number("0.2412a24"), 50.249802);

    const result = distanceService.getDistance(coord1, coord2);

    expect(result).is.NaN;
  });
});