var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('Product Api Controllers', function () {
    it('should get all products /api/products GET', function (done) {
        chai.request(server)
            .get("/api/product")
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.have.property('success');
                res.body.success.should.be.a('boolean');
                res.body.success.should.equal(true);
                res.body.should.have.property('products');
                res.body.products.should.be.a('array');
                done();
            });
    });
});