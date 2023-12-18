import {test} from  '@playwright/test'

//Group1
test.describe('Smoke tests',()=>{

    test.beforeAll(async () => {
        console.log("Group 1 : Suite Setup")
      });
      
      test.beforeEach(async () => {
        console.log("Group 1 : Test Setup")
      });
      
      test.afterEach(async () => {
        console.log("Group 1 : Test Cleanup")
      });
      
      test.afterAll(async () => {
        console.log("Group 1 : Suite Cleanup")
      });
      
      test('Test 1', async () => {
        console.log("Group 1 : Test 1 Block")
      });
      
      test('Test 2', async () => {
        console.log("Group 1 : Test 2 Block")
      });  

})

//Group2
test.describe('Regression tests',()=>{

    test.beforeAll(async () => {
        console.log("Group 2 : Suite Setup")
      });
      
      test.beforeEach(async () => {
        console.log("Group 2 : Test Setup")
      });
      
      test.afterEach(async () => {
        console.log("Group 2 : Test Cleanup")
      });
      
      test.afterAll(async () => {
        console.log("Group 2 : Suite Cleanup")
      });
      
      test('Group 2 Test 1', async () => {
        console.log("Group 2 : Test 1 Block")
      });
      
      test('Group 2 Test 2', async () => {
        console.log("Group 2 : Test 2 Block")
      }); 
})

test('Test 3', async () => {
    console.log("Test 3 Block")
  });
  
  test('Test 4', async () => {
    console.log("Test 4 Block")
  });