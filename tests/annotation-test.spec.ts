import {test} from '@playwright/test'

//skip test
test.skip('Skip test',async()=>{
    console.log('Test skipped')    
})

//conditional skip
test('Conditional skip',async({page,browserName})=>{
    test.skip(browserName=== 'webkit','Webkit not supported')
        console.log('Test skipped on condition.')
    })

// Unconditionally marks a test as "should fail". 
// Playwright Test runs this test and ensures that it is 
// actually failing. This is useful for documentation purposes 
// to acknowledge that some functionality is broken until it is fixed.
test('Test not ready',async()=>{
    test.fail();
})

// Run only focused tests in the entire project.
// test.only('',async()=>{
//     console.log('Only test to execute')
// })

//Unconditionally marks a test as "slow". Slow test will be given triple the default timeout.
test('Slow Test', async()=>{
    console.log('I am a Slow test');
    test.slow();
})

//Conditionally mark a test as "slow" with an optional description. Slow test will be given triple the default timeout.
test('Slow Test with Condition', async({browserName})=>{
    test.slow(browserName === 'webkit', 'This feature is not implemented for Mac');
})

//Declares a test to be fixed, similarly to test.(call)(title, testFunction). This test will not be run.
test.fixme('Fix me Test', async()=>{
    console.log('I am a Fix me test');
})