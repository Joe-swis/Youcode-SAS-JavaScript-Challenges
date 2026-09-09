let user = {
    username: "Ahmed",
    age: 22,
    city: "Marrakech",
    status: "student"
};

console.log(user.username);
console.log(user.age);
console.log('--------------------------------------------------------')
user.age = 25;
user.city = "Youssoufia";
user.status = "doctor";
user["email"] = "DoctorAhmed@gmail.com";
for(let member in user)
{
    console.log(user[member]);
}