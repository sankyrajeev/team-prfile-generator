const Employee = require('../lib/Employee');

describe("Test Employee Class",()=>{

    it('should create a new employee object',()=>{
        const me = new Employee(1,'sanky@hack.com','sanky');

        expect(typeof me).toBe('object');

    })

    it('can set a name via constructor',() =>{
        const me = new Employee(1,'sanky@hack.com','sanky');

        expect(me.name).toEqual('sanky');
    })

    it('can set a id via constructor',() =>{
        const me = new Employee(1,'sanky@hack.com','sanky');

        expect(me.id).toEqual(1);
    })

    it('can set a email via constructor',() =>{
        const me = new Employee(1,'sanky@hack.com','sanky');

        expect(me.email).toEqual('sanky@hack.com');
    })



    it('can get email via getEmail() method',() =>{
        const me = new Employee(1,'sanky@hack.com','sanky');

        expect(me.getEmail()).toEqual('sanky@hack.com');
    })

    it('can get name via getName() method',() =>{
        const me = new Employee(1,'sanky@hack.com','sanky');

        expect(me.getName()).toEqual('sanky');
    })

    it('can get id via getId() method',() =>{
        const me = new Employee(1,'sanky@hack.com','sanky');

        expect(me.getId()).toEqual(1);
    })

    it('can get role via getRole() method',() =>{
        const me = new Employee(1,'sanky@hack.com','sanky');

        expect(me.getRole()).toEqual('Employee');
    })
})