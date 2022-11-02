const Employee = require('./Employee');
 
class manager extends Employee{
   constructor(id,email,school,name){
       super(id,email,name);
       this.school = school;
       
   }
   

}

module.exports = manager;