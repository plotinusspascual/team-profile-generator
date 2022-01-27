const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("Should check if it can store name", ()=>{
    const name = "Jose";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  })
});