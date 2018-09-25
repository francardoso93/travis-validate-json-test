var simple = require('../lib/script');
var expect = require('expect.js');


var fs = require('fs'),
    path = require('path'),    
    filePath = path.join("./", 'sera.json');
    let parsedData = JSON.parse(fs.readFileSync(filePath,{encoding: 'utf-8'}));


describe("JSON Schema", function() {
  it("should have prop1 as 'provalue'", function(){
    expect(parsedData.prop1).to.equal('provalue');
  });
});

describe("simple", function(){
  it("should return true", function(){
    expect(simple.math(1)).to.equal(true);
  });
  it("should return false", function(){
    expect(simple.math(0)).to.equal(false);
  });
});
