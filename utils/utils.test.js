const expect = require('expect');
const utils = require('./utils');

// first arument - string what should happen
// second arguemnt -  function
it('should add two numbers',() => {
  var results = utils.add(33,11);

  expect(results).toBe(44).toBeA('number'); //Using Expect lib

});

it('should async add 2 numbers', (done) => {
  utils.asyncAdd(4,3, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  });
});

if('should async square a number', (done) => {
  utils.asyncSquare(8, (squared) => {
    expect(squared).toBe(64).toBeA('number');
    done();
  });
});


it('should square the number', () => {
  var results = utils.square(8);

  expect(results).toBe(64).toBeA('number');

});

it('should verify first and last names are set', () => {
  var user = {
    location: 'Seattle',
    age: 32
  };
  var response = utils.setName(user, 'Brent Stone');

  expect(user).toEqual(response);

  expect(user).toInclude({
    firstName: 'Brent',
    lastName: 'Stone'
  });
});


// it('should expect some values', () => {
//
//   //expect(12).toNotBe(11);
//   //to equal
//   //checks equality of array or objects
//   //expect({name: 'Andrew'}).toEqual({name: 'Andrew' });
//   //expect([2,3,4]).toExclude(2);
//   expect({
//     name: 'Brent',
//     age: 32,
//     location: 'Seattle'
//   }).toInclude({
//     age: 32
//   })
//
// });
