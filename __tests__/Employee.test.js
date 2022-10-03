const TestEmployee = require ('../lib/Employee');

describe ('TestEmployee', () => {
    it ("should create an object with name, id, email and office number", () => {
    const name = "Employee Name"
    const obj = new TestEmployee(name);
    expect (obj.name).toEqual (name);
})
});