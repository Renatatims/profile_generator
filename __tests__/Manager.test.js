const TestManager = require ('../lib/Manager');

describe ('TestManager', () => {
    it ("should create an object with name, id, email and office number", () => {
    const name = "Manager Name"
    const obj = new TestManager(name);
    expect (obj.name).toEqual (name);
})
});