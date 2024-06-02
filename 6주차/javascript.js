/*var name = 'bathingape';
console.log(name);
var name = 'javascript';
console.log(name);*/

/*const array = [273, 'String', true, function () {}, { }, [273, 103]];
console.log(array);
for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}*/

let user = {
    name: "Dongeun",
    age: 20,// null도 가능
    password: 'dongeun1234'
};
console.log(user);

/*const userstringfy = JSON.stringify(user);
console.log(userstringfy);

const userparse = JSON.parse(userstringfy);
console.log(userparse);*/

user.name = 'dongseob';
console.log(user);

user["age"] = 24;
console.log(user);