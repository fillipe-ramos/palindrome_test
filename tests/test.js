var supertest = require('supertest'),
assert = require('assert'),
palindrome = require('../lib/palindrome'),
app = require('../app');

exports.shouldAcceptPalindrome_aba = function(done){
  supertest(app)
  .get('/?palindrome=aba')
  .expect(200)
  .end(done);
};

exports.shouldRejectPalindrome_macaco = function(done){
  supertest(app)
  .get('/?palindrome=macaco')
  .expect(400)
  .end(done);
};

exports.shouldAcceptPalindrome_a_man_a_plan_a_canal_panama = function(done){
  supertest(app)
  .get('/?palindrome=A MAN A PLAN A CANAL PANAMA')
  .expect(200)
  .end(done);
};

exports.shouldRejectPalindrome_abac = function(done){
  supertest(app)
  .get('/?palindrome=abac')
  .expect(400)
  .end(done);
};

exports.shouldAcceptPalindrome_aba = function(done){
  var result = palindrome('aba');
  assert.ok(result === true);
  return done();
};

exports.shouldRejectPalindrome_macaco = function(done){
  var result = palindrome('macaco');
  assert.ok(result === false);
  return done();
};

exports.shouldAcceptPalindrome_a_man_a_plan_a_canal_panama = function(done){
  var result = palindrome('A MAN A PLAN A CANAL PANAMA');
  assert.ok(result === true);
  return done();
};

exports.shouldRejectPalindrome_abra_kadabra = function(done){
  var result = palindrome('abra kadabra');
  assert.ok(result === false);
  return done();
};


// ABA	
// MACACO
// A MAN A PLAN A CANAL PANAMA