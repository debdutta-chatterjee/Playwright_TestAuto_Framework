import {test} from '@playwright/test'

test('Test1 @Smoke',async()=>{
    console.log('Smoke test 1.')
})

test('Test2 @Smoke',async()=>{
    console.log('Smoke test 2.')
})

test('Test3 @Regression',async()=>{
    console.log('Regression test 1.')
})

test('Test1 @Sanity',async()=>{
    console.log('Sanity test 1.')
})

  // grep :[new RegExp("Smoke"), new RegExp("@Regression")],
  // grepInvert :[new RegExp("Smoke"), new RegExp("@Regression")],