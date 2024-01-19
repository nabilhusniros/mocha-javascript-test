describe('Mocha Hooks', function() {
    before('Execute All Test', function() {
        console.log("This is a test to see if Mocha runs this hook.");
    })

    beforeEach('Execute before each Test', function() {
        console.log('Execute before eact test')
    })

    after('Execute after all test', function() {
        console.log('Execute after all test')
    })

    afterEach('Execute after eact test', function() {
        console.log('Execute after each test')
    })

    it('Mocha Hooks Test', function() {
        console.log('This is a test mocha hooks')
    })
})