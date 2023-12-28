import {expect, test} from '@playwright/test'

var userId;

test('GET API',async({request})=>{

    var response = await request.get('https://reqres.in/api/users?page=2');
    var responseJson = await response.json()
    expect(response.status()).toBe(200);
    expect(responseJson.data[0].id).toBe(7);
})

test('POST API',async({request})=>{
var postData = {
    "name": "morpheus",
    "job": "leader"
}
var response = await request.post('https://reqres.in/api/users',{
    data: postData,
    headers: {"ACCEPT":"application/JSON"}

});
    var responseJson = await response.json()
    expect(response.status()).toBe(201);    
    expect(responseJson.name).toBe("morpheus");
    userId = responseJson.id;
})

test('PUT API',async({request})=>{
    var postData = {
        "name": "morpheus-update",
        "job": "leader"
    }
    var response = await request.put('https://reqres.in/api/users/'+userId,{
        data: postData,
        headers: {"ACCEPT":"application/JSON"}
    
    });
        const responseJson = await response.json()
        expect(response.status()).toBe(200);    
        expect(responseJson.name).toBe("morpheus-update");

})

test('DELETE API',async({request})=>{
    const response = await request.delete('https://reqres.in/api/users/'+userId)
    expect(response.status()).toBe(204);    

});
        