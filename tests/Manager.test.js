const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("Should check if it can store office number", ()=>{
    const testOffNumber = 19;
    const manager = new Manager("Jose", 1, "plotinusspascual@gmail.com", testOffNumber);
    expect(manager.officeNumber).toBe(testOffNumber);
  });

  describe("getRole", () => {
    it("Should return Manager instead of Employee", () => {
        const role = "Manager";
        const manager = new Manager("Jose", 1, "plotinusspascual@gmail.com", 19);
        expect(manager.getRole()).toBe(role);
    });
  });
  describe("getOfficeNumber", () => {
    it("Should get Office Number", () => {
        const testOffNumber = 20;
        const manager = new Manager("Jose", 1, "plotinusspascual@gmail.com", testOffNumber);
        expect(manager.getOfficeNumber()).toBe(testOffNumber);
    });
  });  
});