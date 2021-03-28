let { Repository } = require("./solution.js");
const { describe } = require('mocha');
const { expect } = require('chai');

describe("Tests", function () {

    let repo;
    let validEntity;
    beforeEach(() => {
        repo = new Repository({
            name: "string",
            age: "number",
            birthday: "object"
        });
        validEntity = {
            name: "Pesho",
            age: 22,
            birthday: new Date(1998, 0, 7)
        };
    })

    describe("constructor", function () {
        it("correct initialization", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            expect(new Repository(properties)).to.not.throw;

            let repository = new Repository(properties);
            expect(repository).to.have.property('props');
            expect(repository.props).to.deep.equal(properties);
            expect(typeof repository.props).to.equal('object');
            expect(repository).to.have.property('data');
            expect(typeof repository.data).to.equal('object');
            expect(repository).to.have.property('nextId');
            expect(typeof repository.nextId).to.equal('function');
            expect(repository.nextId()).to.equal(0);
        });
    });

    describe("get count", function () {
        it('returns data size', () => {
            expect(repo.count).to.equal(0);

            repo.add(validEntity);
            expect(repo.count).to.equal(1);
            repo.add(validEntity)
            expect(repo.count).to.equal(2);
        });
    });

    describe("add", function () {
        it("adds correctly", function () {
            expect(repo.add(validEntity)).to.equal(0);
            expect(repo.add(validEntity)).to.equal(1);
        });

        it("throws error for missing prop", function () {
            let entity1 = {
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let entity2 = {
                name: "Pesho",
                birthday: new Date(1998, 0, 7)
            };
            let entity3 = {
                name: "Pesho",
                age: 22,
            };
            let entity4 = {
                name1: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            expect(() => repo.add(entity1)).to.throw(Error, 'Property name is missing from the entity!');
            expect(() => repo.add(entity2)).to.throw(Error, 'Property age is missing from the entity!');
            expect(() => repo.add(entity3)).to.throw(Error, 'Property birthday is missing from the entity!');
            expect(() => repo.add(entity4)).to.throw(Error, 'Property name is missing from the entity!');
        });

        it("throws error for wrong prop type", function () {
            let entity1 = {
                name: 1,
                age: 22,
                birthday: new Date(1998, 0, 7)
            };
            let entity2 = {
                name: "Pesho",
                age: '22',
                birthday: new Date(1998, 0, 7)
            };
            let entity3 = {
                name: "Pesho",
                age: 22,
                birthday: '1998, 0, 7'
            };

            expect(() => repo.add(entity1)).to.throw(TypeError, 'Property name is not of correct type!');
            expect(() => repo.add(entity2)).to.throw(TypeError, 'Property age is not of correct type!');
            expect(() => repo.add(entity3)).to.throw(TypeError, 'Property birthday is not of correct type!');
        });
    });

    describe('get ID', () => {
        it('works', () => {
            repo.add(validEntity);
            repo.add(validEntity);

            expect(repo.getId(0)).to.deep.equal(validEntity);
            expect(repo.getId(1)).to.deep.equal(validEntity);
        });

        it('throws error', () => {
            repo.add(validEntity);
            repo.add(validEntity);

            expect(() => repo.getId(2)).to.throw(Error, 'Entity with id: 2 does not exist!');
            expect(() => repo.getId('test')).to.throw(Error, 'Entity with id: test does not exist!');
            expect(() => repo.getId(-3.2)).to.throw(Error, 'Entity with id: -3.2 does not exist!');
        })
    });

    describe('update', () => {
        it('throws error if id does not exist', () => {
            let newEntity = {
                name: "Gosho",
                age: 25,
                birthday: new Date(1998, 0, 7)
            };

            repo.add(validEntity);
            repo.add(validEntity);

            expect(() => repo.update(2, newEntity)).to.throw('Entity with id: 2 does not exist!');
        });

        it('throws error if new entity is not valid', () => {
            let newEntity = {
                name1: "Gosho",
                age: 25,
                birthday: new Date(1998, 0, 7)
            };

            repo.add(validEntity);
            repo.add(validEntity);

            expect(() => repo.update(0, newEntity)).to.throw(Error, 'Property name is missing from the entity!');
        });

        it('updates correctly', () => {
            let newEntity = {
                name: "Gosho",
                age: 25,
                birthday: new Date(1998, 0, 7)
            };

            repo.add(validEntity);
            repo.add(validEntity);

            expect(repo.getId(0)).to.deep.equal(validEntity);
            repo.update(0, newEntity);
            expect(repo.getId(0)).to.deep.equal(newEntity);
        });
    });

    describe('delete', () => {
        it('throws error if id does not exist', () => {
            repo.add(validEntity);
            repo.add(validEntity);

            expect(() => repo.del(2)).to.throw('Entity with id: 2 does not exist!');
        });

        it('throws error if id is non-number', () => {
            repo.add(validEntity);
            repo.add(validEntity);

            expect(() => repo.del('test')).to.throw('Entity with id: test does not exist!');
        });

        it('deletes correctly', () => {
            repo.add(validEntity);
            repo.add(validEntity);

            expect(repo.count).to.equal(2);
            repo.del(1);
            expect(repo.count).to.equal(1);
            repo.del(0);
            expect(repo.count).to.equal(0);
            expect(() => repo.del(0)).to.throw('Entity with id: 0 does not exist!');
        });
    });
});
