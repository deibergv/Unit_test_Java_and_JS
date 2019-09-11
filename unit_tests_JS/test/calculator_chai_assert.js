var assert    = require("chai").assert;
var calculator = require("../app/calculator");

describe("Calcultator tests using ASSERT interface from CHAI module: ",
/* /////////////////// HOOKS////////////////////
  before(function() {
    // Se ejecuta antes de todas las pruebas del bloque
  }));

  after(function() {
    // Se ejecuta después de todas las pruebas del bloque
  });

  beforeEach(function() {
    // Se ejecuta antes de cada prueba del bloque
  });

  afterEach(function() {
    // Se ejecuta después de cada prueba del bloque
  });
  */
   function() {
	describe("Check addTested Function: ", function() {
		it("Check the returned value using: assert.equal(value,'value'): ", function() {
			result   = calculator.addTested("text");
			assert.equal(result, "text tested");
		});		
		it("Check the returned value using: assert.typeOf(value,'value'): ", function() {
			result   = calculator.addTested("text");
			assert.typeOf(result, "string");
		});		
		it("Check the returned value using: assert.lengthOf(value,'value'): ", function() {
			result   = calculator.addTested("text");
			assert.lengthOf(result, 11);
		});				
	});		
});

/* /////////////////// Exclusive Test ////////////////////
// CASO 1 //
describe.only('bloque con llamada a función only', function() {
    it.('test1, function() {
      // ...
    });
   it.('test2, function() {
      // ...
    });
 });

 // CASO 2 //
 describe('bloque que incluye un test con llamada a función only', function() {
    it.only('test1, function() {
      // …
    it.('test2, function() {
      // …
    });
 });
*/

/* /////////////////// Inclusive Test //////////////////// 
// CASO 1//
describe.skip('bloque con llamada a función skip', function() {
    it.('test1, function() {
      // ...
    });
   it.('test2, function() {
      // ...
    });
 });

 // CASO 2 //
 describe('bloque que incluye un test con llamada a función skip', function() {
    it.skip('test1, function() {
      // …
    it.('test2, function() {
      // …
    });
 });
*/