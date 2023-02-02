import Date from './../src/date';

describe('Triangle', () => {

  test('should correctly create a date object with month day year', () => {
    const date = new Date();
    
    expect(date.checkDate(1,1,2020)).toEqual(1,1,2020);

  });
});