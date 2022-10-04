const TestIntern = require ('../lib/Intern');

//Testing Intern's object
describe ('TestIntern', () => {
    it ("should create a new Intern object", () => {
    const obj = new TestIntern();
    expect (typeof(obj)).toBe("object");
})
});


//Testing Intern's getSchool()
describe ("Test Intern's school", () => {
    it ("should create an object with intern's school", () => {
    const school = "School";
    const obj = new TestIntern("Employee Name", 10, "employee@gmail.com", school);
    expect (obj.school).toEqual(school);
})
});

// Testing Intern's Role
describe ("Test Intern's role", () => {
    it ("should select the Intern's role", () => {
    const Intern = "Intern";
    const obj = new TestIntern("Employee Name", 10, "employee@gmail.com", "School");
    expect (obj.getRole()).toEqual(Intern);
})
});