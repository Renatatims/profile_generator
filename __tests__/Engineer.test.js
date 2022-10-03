const TestEngineer = require ('../lib/Engineer');

describe ('TestEngineer', () => {
    it ("should create an object with name, id, email and office number", () => {
    const name = "Engineer Name"
    const obj = new TestEngineer(name);
    expect (obj.name).toEqual (name);
})
});