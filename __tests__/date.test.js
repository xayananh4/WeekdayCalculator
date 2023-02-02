import Date from './../src/date';

describe('Triangle', () => {

  test('should correctly create a date object with month day year', () => {
    const date = new Date();
    
    expect(date.checkDate(1,2,2023)).toEqual('January 2 2023CE is a Tuesday.\nIt is week 1 of January.\nIt is day 2 with 363 days left in the year.\nIt is not a leap year.');

  });
});