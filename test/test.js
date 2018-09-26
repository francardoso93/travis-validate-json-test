var expect = require('expect.js');
var pathValidator = require('../lib/pathValidator.js');
var fs = require('fs');
var path = require('path');
var fileName = 'User_v1_000.json';
//var fileName = 'desunitizacaoCarga_2_000.json';
var pathValidatorResult;
var request = require('request');


openAPIPath = path.join("./", fileName);

//TODO: Único método que varre todos os paths, e pega as informações necessárias para validar nos testes
//Ideal seria isso para resolver uma questão de performance, mas só de ter o código + organizado já vai ajudar muito
//Já teria que colocar os TRUE, FALSE, dentro desse 'método único' de varredura, e na estrutura do teste só retorno se equals true

let parsedOpenAPI = JSON.parse(fs.readFileSync(openAPIPath, {
  encoding: 'utf-8'
}));

describe("OpenAPI ", function () {
  pathValidatorResult = pathValidator.runThroughPaths(parsedOpenAPI);
  describe(" - Filename: ", function () {
    it("should start with uppercase letter", function () {

    });

    it("should contain version", function () {

    });
  });

  describe(" - Content Format: ", function () {
    it("should be a valid JsonSchema'", function () {

    });

    it("should be complient with OpenAPI in version 3.0'", function () {
      expect(parsedOpenAPI).to.have.property("openapi");
      expect(parsedOpenAPI).to.not.have.property("swagger");
    });
  });

  describe(" - Servers: ", function () {
    it("should have a 'servers' property", function () {
      expect(parsedOpenAPI).to.have.property("servers");
      expect(parsedOpenAPI.servers[0]).to.have.property("variables");
      expect(parsedOpenAPI.servers[0]).to.have.property("url");
    });
    it("should have an URL consistent with our model", function () {
      //Todo: substrings based on '/' Validate "api" and "version"
    });
  });

  describe(" - Version: ", function () {
    it("should contain the same version on 'info' as in filename", function () {

    });
  });

  describe(" - Schemas: ", function () {
    it("shouldn't contain schemas", function () {
      if (parsedOpenAPI.components.schemas) {
        expect(parsedOpenAPI.components.schemas).to.eql({});
      } else {
        expect(parsedOpenAPI.components.schemas).to.be.an('undefined');
      }
    });  

    //TODO: Executar promisse que lê todos os arquivos e verifica se estão validos. APós executação, chama o 'done()'
  });

  describe(" - Parameters: ", function () {
    it("should have 'pagination', 'query' and 'orderby' for collection endpoints", function () {
      expect(pathValidatorResult.useAllRequiredParamsForCollection).to.equals(true);
    });

    it("should use common parameters", function () {
      expect(pathValidatorResult.useCommonParams).to.equals(true);
    });
  });

  describe(" - Errors: ", function () {
    it("should use common errors schema", function () {
      expect(pathValidatorResult.useErrorSchema).to.equals(true);
    });
  });

  describe(" - xtotvs: ", function () {
    it("should contain xtotvs/productinformation as an array on 'info'", function () {
      expect(parsedOpenAPI.info["x-totvs"].productInformation).to.be.an('array');
    });

    it("should contain xtotvs/productinformation as an array on 'paths'", function () {
      expect(pathValidatorResult.useProductInfoAsArray).to.equals(true);
    });
  });
});


//TODO: Later
schemaContetPath = path.join("./", 'User_3_000.json');
let parsedSchema = JSON.parse(fs.readFileSync(schemaContetPath, {
  encoding: 'utf-8'
}));
describe("Schema content", function () {
  describe(" - Content Format: ", function () {
    it("should be a valid JsonSchema'", function () {

    });
  });

  describe(" - Parameters: ", function () {
    it("shouldn't have common parameters", function () {

    })
  });

  //TODO: Arrumar
  describe(" - xtotvs: ", function () {
    it("should be an array ", function () {
      for (var definitionKey in parsedSchema.definitions) {
        if (parsedSchema.definitions[definitionKey].properties["x-totvs"]) {
          expect(parsedSchema.definitions[definitionKey].properties["x-totvs"]).to.be.an('array');
        }
        //TODO: Isolar isso em um método recursivo para varrer até o último nível possível
        //Check for LowerLevel
        if (parsedSchema.definitions[definitionKey].type == 'object') {
          //Chamar o mesmo loop acima
        }
      }
    });
  })

  describe(" - Enum: ", function () {
    it("must be a string ", function () {

    });
  })

  describe(" - Errors: ", function () {
    it("shouldn't contain error model", function () {

    });
  });
});