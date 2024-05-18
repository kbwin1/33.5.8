const myClass = require('./markov.js');


describe('test MarkovMachine', function(){
    let testClass

    beforeAll(function(){
        testClass= new myClass.MarkovMachine("test this words oractice this")
    })

    test('Expect strings', function(){
        expect(testClass.makeText(10)).toEqual(expect.any(String))
    })

    test('Expect contain word', function(){
        expect(testClass.makeText(10)).toContain('this')
    })

})
