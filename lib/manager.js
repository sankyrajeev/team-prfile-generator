 const Employee = require('./Employee');
 
 class manager extends Employee{
    constructor(id,email,officeNumber,name){
        super(id,email,name);
        this.officeNumber = officeNumber;
        
    }
    

 }

 module.exports = manager;