let employee = {
    firstName: "Sara",
    lastName: "Amrani",
    salary: 7000,
    bonus: 1000,
    absenceDays: 2
};
console.log("Salaire de base:",employee.salary);
console.log("Bonus",employee.bonus);


let penalite = 200;
let salaireFinal = 0;
if(employee.absenceDays != 0){
    penalite = employee.absenceDays * penalite;
    console.log("Les pénalités:",penalite);
    
    salaireFinal = employee.salary + employee.bonus - penalite;
    console.log("Le salaire final est:",salaireFinal);
    
}