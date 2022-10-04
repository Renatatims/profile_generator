const TestEmployee = require('../lib/Employee');

//Testing Employee's object
describe('TestEmployee', () => {
	it("should create a new employee object", () => {
		const obj = new TestEmployee();
		expect(typeof (obj)).toBe("object");
	})
});

//Testing Employee's name - Property
describe("Employee's name", () => {
	it("testing Employee's name", () => {
		const name = "Employee Name"
		const obj = new TestEmployee(name);
		expect(obj.name).toEqual(name);
	})
});

//Testing Employee's name - getName() - Method
describe("getName()", () => {
	it("should return employee's name", () => {
		const name = "Employee Name"
		const obj = new TestEmployee(name);
		expect(obj.getName()).toEqual(name);
	})
});


// Testing Employee's ID - Property
describe("Employee's ID", () => {
	it("testing ID", () => {
		const id = 10;
		const obj = new TestEmployee("Employee Name", id);
		expect(obj.id).toEqual(id);
	})
});

// Testing Employee's ID - getId() - Method
describe("getId()", () => {
	it("should return employee's ID", () => {
		const id = 10;
		const obj = new TestEmployee("Employee Name", id);
		expect(obj.getId()).toEqual(id);
	})
});

// Testing Employee's email - Property
describe("Employee's email", () => {
	it("testing email", () => {
		const email = "employee@gmail.com";
		const obj = new TestEmployee("Employee Name", 10, "employee@gmail.com");
		expect(obj.email).toEqual(email);
	})
});

// Testing Employee's email - getEmail() - Method
describe("getEmail()", () => {
	it("should return employee's email", () => {
		const email = "employee@gmail.com";
		const obj = new TestEmployee("Employee Name", 10, "employee@gmail.com");
		expect(obj.getEmail()).toEqual(email);
	})
});

//Testing Role - getRole()  - Method
describe("getRole()", () => {
	it("should return a Role", () => {
		const role = "Employee";
		const obj = new TestEmployee("Employee Name", 10, "employee@gmail.com");
		expect(obj.getRole()).toEqual(role);
	})
});




