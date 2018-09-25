var expect = require('expect.js');
var request = require('request');
var httpUtils = require('request-mocha')(request);

var fs = require('fs'),
path = require('path');
// var fileName = 'User_v1_000.json';
var fileName = 'desunitizacaoCarga_2_000.json';
 openAPIPath = path.join("./", fileName);

//TODO: Único método que varre todos os paths, e pega as informações necessárias para validar nos testes
//Ideal seria isso para resolver uma questão de performance, mas só de ter o código + organizado já vai ajudar muito
//Já teria que colocar os TRUE, FALSE, dentro desse 'método único' de varredura, e na estrutura do teste só retorno se equals true

let parsedOpenAPI = JSON.parse(fs.readFileSync(openAPIPath,{encoding: 'utf-8'}));

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
          if(parsedOpenAPI.components.schemas) {
            expect(parsedOpenAPI.components.schemas).to.eql({});
          }
          else{
            expect(parsedOpenAPI.components.schemas).to.be.an('undefined');
          }
        });

        it("should have responses with valid $ref for schema files", function(){
          //TODO Asap.
        });

      describe(" - Parameters: ", function(){
        it("should have 'pagination', 'query' and 'orderby' for collection endpoints", function(){
          //TODO Later. Check if parent is 'GET' without '{'(pathParam) on the URL
        });

        it("should use common parameters", function(){ //Melhoria: Um teste para cada parametro
          for (var pathkey in parsedOpenAPI.paths){
              for(var httpVerbkey in parsedOpenAPI.paths[pathkey]) {
                var parameters = parsedOpenAPI.paths[pathkey][httpVerbkey].parameters;
                  for(var parameterKey in parameters) {                
                    if(parameters[parameterKey].$ref) {
                      //References for this file
                      expect(parameters[parameterKey].$ref).to.not.have.string("#/components/parameters/Authorization")
                      expect(parameters[parameterKey].$ref).to.not.have.string("#/components/parameters/Order")
                      expect(parameters[parameterKey].$ref).to.not.have.string("#/components/parameters/Page")
                      expect(parameters[parameterKey].$ref).to.not.have.string("#/components/parameters/PageSize")
                      expect(parameters[parameterKey].$ref).to.not.have.string("#/components/parameters/AcceptLanguage")
                      expect(parameters[parameterKey].$ref).to.not.have.string("#/components/parameters/Fields")
                      expect(parameters[parameterKey].$ref).to.not.have.string("#/components/parameters/Expand")                                    
                    }
                    if(parameters[parameterKey].name) {
                      expect(parameters[parameterKey].name).to.not.have.string("Authorization")
                      expect(parameters[parameterKey].name).to.not.have.string("Order")
                      expect(parameters[parameterKey].name).to.not.have.string("Page")
                      expect(parameters[parameterKey].name).to.not.have.string("PageSize")
                      expect(parameters[parameterKey].name).to.not.have.string("AcceptLanguage")
                      expect(parameters[parameterKey].name).to.not.have.string("Fields")
                      expect(parameters[parameterKey].name).to.not.have.string("Expand")
                    }
                  }
                }            
            }          
        });
      })

      describe(" - Errors: ", function(){
        it("should use common errors schema", function(){

        });
      })

      describe(" - xtotvs: ", function(){
        it("should contain xtotvs/productinformation as an array on 'info'", function(){
          expect(parsedOpenAPI.info["x-totvs"].productInformation).to.be.an('array');
        });

        it("should contain xtotvs/productinformation as an array on 'paths'", function(){
          for (var pathkey in parsedOpenAPI.paths){
            for(var httpVerbkey in parsedOpenAPI.paths[pathkey]) {
              expect(parsedOpenAPI.paths[pathkey][httpVerbkey]["x-totvs"].productInformation).to.be.an('array');
            }
          }                
        });
      })
    });
  });


    //TODO: Later
    schemaContetPath = path.join("./", 'User_3_000.json');
    let parsedSchema = JSON.parse(fs.readFileSync(schemaContetPath,{encoding: 'utf-8'}));
    describe("Schema content", function() {
      describe(" - Content Format: ", function(){
        it("should be a valid JsonSchema'", function(){

        });
      });

      describe(" - Parameters: ", function(){       
        it("shouldn't have common parameters", function(){
                       
        })
      });          

      //TODO: Arrumar
      describe(" - xtotvs: ", function(){
        it("should be an array ", function(){
          for (var definitionKey in parsedSchema.definitions){
              if(parsedSchema.definitions[definitionKey].properties["x-totvs"]) {
                expect(parsedSchema.definitions[definitionKey].properties["x-totvs"]).to.be.an('array');
              }
              //TODO: Isolar isso em um método recursivo para varrer até o último nível possível
              //Check for LowerLevel
              if (parsedSchema.definitions[definitionKey].type == 'object'){
                //Chamar o mesmo loop acima
              }
          }            
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