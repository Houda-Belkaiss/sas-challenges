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
];

function avgAge(){
    let somme = 0;
    let moyenne;
    for (let element of employees) {
        somme = somme + element.age;
        moyenne = somme / employees.length;
    }
    return moyenne;
}
console.log(avgAge());

 function countByDepartement(department, employees){
     let count =0;
       for (let element of employees) {
          if ( department === element.department){
               count = count + 1;
          } 
 }
  return count;
}
 console.log(countByDepartement("Marketing",employees));

function findMaxSalary(){
    let max = 0;
     for (let element of employees) {
        if ( element.salary > max) {
          max = element.salary; 
        }  
     }
      return max;
    } 
    console.log(findMaxSalary());
