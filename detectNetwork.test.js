// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
/*
describe('Introduction to Mocha Tests - READ ME FIRST', function () {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail.
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out.
  // You will not be able to proceed with a failing test.

  // it('Throws an error so it fails', function() {
  // throw new Error('Delete me!');
  //});

  it('Doesn\'t throw an error, so it doesn\'t fail', function () {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function (num) {
      return num / 2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function () {
    var even = function (num) {
      return num / 2 === 0;
    }

    if (even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
*/
/*
describe('Diner\'s Club', function () {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function () {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function () {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });
});

describe('American Express', function () {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function (isTrue) {
    if (!isTrue) {
      throw new Error('Test failed');
    }

  };

  it('has a prefix of 34 and a length of 15', function () {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function () {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function () {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/



  it('has a prefix of 4 and a length of 13', function () {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function () {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function () {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function () {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/


  it('has a prefix of 51 and a length of 16', function () {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 52 and a length of 16', function () {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 53 and a length of 16', function () {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });


  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten
  // these tests to pass using should syntax, refactor your tests to
  // use either expect or should, but not both.


  it('has a prefix of 54 and a length of 16', function () {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function () {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })

});

describe('Discover', function () {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  it('has a prefix of 65 and a length of 16', function () {
    detectNetwork('6511345678901234').should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function () {
    detectNetwork('6511345678901234654').should.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 16', function () {
    detectNetwork('6011345678901234').should.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function () {
    detectNetwork('6011345678901234654').should.equal('Discover');
  });
  for (var prefix = 644; prefix <= 649; prefix++) {
    (function (prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function () {
        detectNetwork(prefix + '3456789012346').should.equal('Discover');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function () {
        detectNetwork(prefix + '8934567890123465').should.equal('Discover');
      });
    })(prefix)
  }
});

*/
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

describe('Diner\'s Club', function () {
  testGenerator('Diner\'s Club', 38, 39, 14, 14);
});

describe('American Express', function () {
  testGenerator('American Express', 34, 34, 15, 15);
  testGenerator('American Express', 37, 37, 15, 15);
});

describe('Visa', function () {
  testGenerator('Visa', 4, 4, 13, 13);
  testGenerator('Visa', 4, 4, 16, 16);
  testGenerator('Visa', 4, 4, 19, 19);
});

describe('MasterCard', function () {
  testGenerator('MasterCard', 51, 55, 16, 16);
});

describe('Discover', function () {
  testGenerator('Discover', 6011, 6011, 16, 16);
  testGenerator('Discover', 6011, 6011, 19, 19);
  testGenerator('Discover', 644, 649, 16, 16);
  testGenerator('Discover', 644, 649, 19, 19);
  testGenerator('Discover', 65, 65, 16, 16);
  testGenerator('Discover', 65, 65, 19, 19);
});

describe('Maestro', function () {

  testGenerator('Maestro', 5018, 5018, 12, 19);
  testGenerator('Maestro', 5020, 5020, 12, 19);
  testGenerator('Maestro', 5038, 5038, 12, 19);
  testGenerator('Maestro', 6304, 6304, 12, 19);

});

describe('China UnionPay', function () {

  testGenerator('China UnionPay', 622126, 622925, 16, 19);
  testGenerator('China UnionPay', 624, 626, 16, 19);
  testGenerator('China UnionPay', 6282, 6288, 16, 19);

});

describe('Switch', function () {

  testGenerator('Switch', 4903, 4903, 16, 16);
  testGenerator('Switch', 4905, 4905, 16, 16);
  testGenerator('Switch', 4911, 4911, 16, 16);
  testGenerator('Switch', 4936, 4936, 16, 16);
  testGenerator('Switch', 564182, 564182, 16, 16);
  testGenerator('Switch', 633110, 633110, 16, 16);
  testGenerator('Switch', 6333, 6333, 16, 16);
  testGenerator('Switch', 6759, 6759, 16, 16);

  testGenerator('Switch', 4903, 4903, 18, 18);
  testGenerator('Switch', 4905, 4905, 18, 18);
  testGenerator('Switch', 4911, 4911, 18, 18);
  testGenerator('Switch', 4936, 4936, 18, 18);
  testGenerator('Switch', 564182, 564182, 18, 18);
  testGenerator('Switch', 633110, 633110, 18, 18);
  testGenerator('Switch', 6333, 6333, 18, 18);
  testGenerator('Switch', 6759, 6759, 18, 18);

  testGenerator('Switch', 4903, 4903, 19, 19);
  testGenerator('Switch', 4905, 4905, 19, 19);
  testGenerator('Switch', 4911, 4911, 19, 19);
  testGenerator('Switch', 4936, 4936, 19, 19);
  testGenerator('Switch', 564182, 564182, 19, 19);
  testGenerator('Switch', 633110, 633110, 19, 19);
  testGenerator('Switch', 6333, 6333, 19, 19);
  testGenerator('Switch', 6759, 6759, 19, 19);

});

function testGenerator(bankName, prefixMin, prefixMax, lengthMin, lengthMax) {
  for (var prefix = prefixMin; prefix <= prefixMax; prefix++) {
    for (var length = lengthMin; length <= lengthMax; length++) {
      (function (length, prefix) {
        it('has a prefix of ' + prefix + ' and a length of ' + length, function () {
          console.log(length);
          var num = '1234567890123456789012';
          var cardNum = prefix + num;
          cardNum = cardNum.substring(0, length);
          console.log(cardNum);
          detectNetwork(cardNum).should.equal(bankName);
        });
      })(length, prefix);
    }
  }
}