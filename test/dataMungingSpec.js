const should = require("chai").should(),
expect = require("chai").expect,
sinon = require('sinon'),
readline = require("readline"),
fs=require("fs"),
agecon = require("../js/ageconverter");

describe("A series of test for Converting  CSV to JSON",
	function(err){
		it('should fail if year is notprovided', function(done){
        expect(agecon).to.throw(Error, "Not a number");
        done();
    });

  it('should fail if year is not a number', function(done){
        expect(agecon.bind(undefined, {})).to.throw(Error, "Not a number");
        done();
    });

   it('should fail if year is NaN', function(done){
        expect(agecon.bind(undefined, NaN)).to.throw(Error, "Not a number");
        done();
    });

   it('should not fail if the year is a literal number', function(done){
        expect(agecon.bind(undefined, '1960')).to.throw(Error, "Not a number");
        done();
    });

   it('should not fail if the year is a Number object', function(done){
        expect(agecon.bind(undefined, Number(1960))).to.throw(Error, "Not a number");
        done();
    });
});


// describe("Test createInterface method of readline", function(err){
// 		it("should be called only once", function() {
//             var spyCreateInterface = sinon.spy(readline, 'createInterface');
//             agecon(2016);
//             readline.createInterface.restore();
//             sinon.assert.calledOnce(spyCreateInterface);
//     });
//   });
//     describe("Test on method of Interface for line event", function(err){
//     it("should be called", function() {
//            var stub = sinon.stub(readline.Interface.prototype, 'on');
//            agecon(2016);
//            sinon.assert.called(stub);
//            readline.Interface.prototype.on.restore();
//            sinon.assert.calledWith(stub,"line");
//
//     });
//    });
//
//     describe("Test on method of Interface for close event", function(err){
//     it("should be called", function() {
//            var stub = sinon.stub(readline.Interface.prototype,'on');
//            agecon(2016);
//            readline.Interface.prototype.on.restore();
//            sinon.assert.calledWith(stub,"close");
//     });
//
//  	});
