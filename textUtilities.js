var expect = require('chai').expect;


expect(true).to.be.true;


function titleCase(title){
    return title;
}


expect(titleCase('The Great Mouse Detective')).to.be.a('string');