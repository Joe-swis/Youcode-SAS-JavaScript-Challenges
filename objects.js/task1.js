let student = {
    firstName : "Ysssine",
    lastName : "Amrani",
    age : 21,
    city : "Youssoufia",
    school : "Youcode"
};

for(let member in student)
{
    console.log(member +':'+ student[member]);
}
console.log(student.firstName +' '+ student.lastName + ' a ' + student.age + ' ans et habite à '+ student.city);