"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var asset_api_service_1 = require("./asset-api.service");
describe('AssetAPIService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(asset_api_service_1.AssetAPIService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
