const TestIntern = require ('../lib/Intern');

describe ('TestIntern', () => {
    it ("should create an object with name, id, email and office number", () => {
    const name = "Intern Name"
    const obj = new TestIntern(name);
    expect (obj.name).toEqual (name);
})
});