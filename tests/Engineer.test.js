const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("Should check if it can store github", ()=>{
    const github = "plotinusspascual";
    const engineer = new Engineer("Jose", 2, "plotinusspascual@gmail.com", github);
    expect(engineer.github).toBe(github);
  });

  describe("getGithub", () => {
    it("Should get Github", () => {
      const github = "plotinusspascual";
      const engineer = new Engineer("Jose", 2, "plotinusspascual@gmail.com", github);
      expect(engineer.getGithub()).toBe(github);
    });
  });
  describe("getRole", () => {
    it("Should return Engineer instead of Employee", () => {
        const role = "Engineer";
        const engineer = new Engineer("Jose", 2, "plotinusspascual@gmail.com", "plotinusspascual");
        expect(engineer.getRole()).toBe(role);
    });
  });
});