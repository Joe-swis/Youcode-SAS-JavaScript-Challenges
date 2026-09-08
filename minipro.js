const employees = [
  {
    "name": "Alice Johnson",
    "age": 29,
    "department": "Engineering",
    "salary": 75000
  },
  {
    "name": "Bob Smith",
    "age": 34,
    "department": "Marketing",
    "salary": 68000
  },
  {
    "name": "Carol Williams",
    "age": 41,
    "department": "Finance",
    "salary": 82000
  },
  {
    "name": "David Brown",
    "age": 26,
    "department": "Human Resources",
    "salary": 61000
  }
]

function avgAge(listemploy)
{
    let len = listemploy.length;
    let i = 0;
    let Mage = 0;
    while(i < len && listemploy[i])
    {
        Mage += listemploy[i].age
        i++;
    }
    return Mage/len;
}
console.log("Moyen Age = ",avgAge(employees));
//console.log(employees[1].name)

function countByDep(arryemp, name)
{
    let len = arryemp.length;
    let count = 0;
    let i = 0;
    while()
    
    return name;
}
console.log(countByDep(employees , employees[0].department));
//console.log(employees.department)