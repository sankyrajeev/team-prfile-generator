const Employee = require('./Employee');
 
class Engineer extends Employee{
   constructor(name,id, email,gitHub){
       super(id,email,name);
       this.gitHub = gitHub;
       
   }
   getGitHub(){
    return this.gitHub;
   }
   

}

module.exports = Engineer;