const TestEngineer = require ('../lib/Engineer');

//Testing Engineer's object
describe ('TestEngineer', () => {
    it ("should create a new engineer object", () => {
    const obj = new TestEngineer();
    expect (typeof(obj)).toBe("object");
})
});


//Testing Engineer's gitHub - Property
describe ("Test Engineer's gitHub", () => {
    it ("should create a GitHub account", () => {
    const github = "engineerGitHub";
    const obj = new TestEngineer("Employee Name", 10, "employee@gmail.com", github);
    expect (obj.github).toEqual(github);
})
});

//Testing Engineer's getGitHub() - Method
describe ("Test Engineer's getGitHub()", () => {
    it ("should return a GitHub account", () => {
    const github = "engineerGitHub";
    const obj = new TestEngineer("Employee Name", 10, "employee@gmail.com", github);
    expect (obj.getGithub()).toEqual(github);
})
});


// Testing Engineer's Role
describe ("Test Engineer's role", () => {
    it ("should select the Engineer's role", () => {
    const engineer = "Engineer";
    const obj = new TestEngineer("Employee Name", 10, "employee@gmail.com", "engineerGitHub");
    expect (obj.getRole()).toEqual(engineer);
})
});
