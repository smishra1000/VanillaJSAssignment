//prototype inheritance in javascript


function Person(firstName, lastName) {
    this.FirstName = firstName
    this.LastName = lastName           
}

Person.prototype.getName = function () {
    return this.FirstName + " " + this.LastName;
}
function Employee(firstName, lastName, company, salary)
{
    Person.call(this, firstName, lastName);

    this.company = company
    this.salary = salary
}
//Employee.prototype = Person.prototype;
Employee.prototype = new Person();
// reset the constructor, otherwise it will point to Person constructor
Employee.prototype.constructor = Employee;

var emp = new Employee("sameer","mishra", "XYZ", 1000);
            
console.log(emp.getName()); // sameer mishra
console.log(emp instanceof Employee); // true
console.log(emp instanceof Person); // true
