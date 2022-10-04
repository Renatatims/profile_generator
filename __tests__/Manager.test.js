const TestManager = require ('../lib/Manager');

//Testing Manager's object
describe ('TestManager', () => {
    it ("should create a new Manager object", () => {
    const obj = new TestManager();
    expect (typeof(obj)).toBe("object");
})
});


//Testing Manager's getOfficeNumber()
describe ("Test Manager's OfficeNumber property", () => {
    it ("should return a Number ", () => {
    const officeNumber = 111-111-1111;
    const obj = new TestManager("Employee Name", 10, "employee@gmail.com", officeNumber);
    expect (obj.officeNumber).toEqual(officeNumber);
})
});

//Testing Manager's getOfficeNumber()
describe ("getOfficeNumber() Method", () => {
    it ("should return an Office Number", () => {
    const officeNumber = 111-111-1111;
    const obj = new TestManager("Employee Name", 10, "employee@gmail.com", officeNumber);
    expect (obj.getOfficeNumber()).toEqual(officeNumber);
})
});


// Testing Manager's Role
describe ("Test Manager's role", () => {
    it ("should select the Manager's role", () => {
    const manager = "Manager";
    const obj = new TestManager("Employee Name", 10, "employee@gmail.com", 111-111-1111);
    expect (obj.getRole()).toEqual(manager);
})
});
