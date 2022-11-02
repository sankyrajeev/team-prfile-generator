const Employee = require('./Employee');
 
class manager extends Employee{
   constructor(id,email,gitHub,name){
       super(id,email,name);
       this.gitHub = gitHub;
       
   }
   

}

module.exports = manager;