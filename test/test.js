var expect = require('expect.js');

var fs = require('fs'),
    path = require('path'),    
    filePath = path.join("./", 'sera.json');
    let parsedData = JSON.parse(fs.readFileSync(filePath,{encoding: 'utf-8'}));

    describe("OpenAPI ", function() {       
      describe(" - Filename: ", function(){   
        it("should start with uppercase letter", function(){

        });
  
        it("should contain version", function(){
  
        });
      });      
      
      describe(" - Content Format: ", function(){   
        it("should be a valid JsonSchema'", function(){

        });

        it("should be complient with OpenAPI in version 3.0'", function(){

        });
      });

      describe( " - Version: ", function() {
        it("should contain the same version on 'info' as in filename", function(){

        });
      });

      describe(" - Schemas: ", function(){
        it("shouldn't contain schemas", function(){

        });
  
        it("should have responses with valid $ref for schema files", function(){
  
        });
      })

      describe(" - Parameters: ", function(){
        it("should have 'pagination', 'query' and 'orderby' for collection endpoints", function(){

        });
  
        it("should use common parameters", function(){
  
        });  
      })

      describe(" - Errors: ", function(){ 
        it("should use common errors schema", function(){
  
        });  
      })

      describe(" - xtotvs: ", function(){
        it("should contain xtotvs/productinformation as an array on 'info'", function(){

        });
  
        it("should contain xtotvs/productinformation as an array on 'paths'", function(){
  
        });  
      })              
    });

    describe("Schema content", function() {
      describe(" - Content Format: ", function(){   
        it("should be a valid JsonSchema'", function(){

        });
      });

      describe(" - xtotvs: ", function(){
        it("should be an array ", function(){

        });  
      })   

      describe(" - Enum: ", function(){
        it("must be a string ", function(){

        });  
      })   

      describe(" - Errors: ", function(){ 
        it("shouldn't contain error model", function(){

        });
      });      
    });


describe("FirstTest POC - JSON Schema", function() {
  it("should have prop1 as 'provalue'", function(){
    expect(parsedData.prop1).to.equal('provalue');
  });
});

