const TestEmployee = require ('../lib/Employee');


//Testing Employee's object
describe ('TestEmployee', () => {
    it ("should create a new employee object", () => {
    const obj = new TestEmployee();
    expect (typeof(obj)).toBe("object");
})
});

//Testing Employee's name 
describe ("Test Employee's name", () => {
    it ("should create an object with name", () => {
    const name = "Employee Name"
    const obj = new TestEmployee(name);
    expect (obj.name).toEqual (name);
})
});

// Testing Employee's ID
describe ("Test Employee's ID", () => {
    it ("should create an object with ID", () => {
    const id = 10;
    const obj = new TestEmployee("Employee Name", id);
    expect (obj.id).toEqual (id);
})
});

// Testing Employee's email
describe ("Test Employee's email", () => {
    it ("should create an object with email", () => {
    const email = "employee@gmail.com";
    const obj = new TestEmployee("Employee Name", 10, "employee@gmail.com");
    expect (obj.email).toEqual (email);
})
});




