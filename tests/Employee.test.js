const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("Should check if it can store name", ()=>{
    const name = "Jose";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });
  it("Should check if it can store id", ()=>{
    const id = 1;
    const employee = new Employee("Jose", id);
    expect(employee.id).toBe(id);
    console.log("id: " + employee);
  });
  it("Should check if it can store email", ()=>{
    const email = "plotinusspascual@gmail.com";
    const employee = new Employee("Jose", 1, email);
    expect(employee.email).toBe(email);
  });

  describe("getName", () => {
    it("Should get name", () => {
        const name = "Jonas";
        const employee = new Employee(name);
        expect(employee.getName()).toBe(name);
    });
  });
  describe("getId", () => {
    it("Should get Id", () => {
        const id = 2;
        const employee  = new Employee("Jonas", id);
        expect(employee.getId()).toBe(id);
    });
  });
  describe("getEmail", () => {
    it("Should get Email", () => {
        const email = "plotinusspascual@gmail.com";
        const employee = new Employee("Jose", 2, email);
        expect(employee.getEmail()).toBe(email);
    });
  });
  describe("getRole", () => {
    it("Should get employee", () => {
        const role = "Employee";
        const employee = new Employee("Jose", 1, "plotinusspascual@gmail.com");
        expect(employee.getRole()).toBe(role);
    });
  });
});