class Worker{
    constructor(fName, lName, rate, days){
        this.fName = fName;
        this.lName = lName;
        this.rate = rate;
        this.days = days;
    }
    getSalary(){
        return this.rate * this.days;
    }
}

const WORKER_ONE = new Worker('Ivan', 'Ivanov', 10, 31);
console.log(WORKER_ONE.fName); 
console.log(WORKER_ONE.lName);
console.log(WORKER_ONE.rate); 
console.log(WORKER_ONE.days);
console.log('salary=> '+WORKER_ONE.getSalary()); 

const WORKER_TWO = new Worker('Petor', 'Petriv', 20, 25);
console.log(WORKER_TWO.fName); 
console.log(WORKER_TWO.lName);
console.log(WORKER_TWO.rate); 
console.log(WORKER_TWO.days);
console.log('salary=> '+WORKER_TWO.getSalary()); 

const WORKERS_SALARY =  WORKER_TWO.getSalary() + WORKER_ONE.getSalary();

console.log('all money=> '+WORKERS_SALARY);