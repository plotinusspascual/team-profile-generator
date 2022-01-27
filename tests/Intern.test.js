const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("Should check if it can store school", ()=>{
    const school = "SFSU";
    const intern = new Intern("Jose", 3, "plotinusspascual@gmail.com", school);
    expect(intern.school).toBe(school);
  });

  describe("getSchool", () => {
    it("Should get School", ()=>{
      const school = "SFSU";
      const intern = new Intern("Jose", 3, "plotinusspascual@gmail.com", school);
      expect(intern.getSchool()).toBe(school);
    });
  });
  describe("getRole", () => {
    it("Should return Intern instead of Employee", () => {
        const role = "Intern";
        const intern = new Intern("Jose", 3, "plotinusspascual@gmail.com", "SFSU");
        expect(intern.getRole()).toBe(role);
    });
  });
});