'use strict';

const mocha = require('mocha');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const should = chai.should();
chai.use(sinonChai);

const Foo = require('../lib/foo');

describe('Foo', () => {

  let testObject;


  beforeEach(() => {
    testObject = new Foo();
  });

  describe('echo', () => {
    it('echos the input', () => {
      const input = 'blah';
      testObject.echo(input).should.eql(input);
    });
  });
});
