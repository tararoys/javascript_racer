describe("How many questions need answers before I can ship a completed app?", function() {
  it("Does jasmine need to have at least one spec in order to work?", function(){
    var answer = true 
    expect(answer).toEqual(true);
  });

  it("How do I get a table to show up on the Jasmine SpecRunner page?", function(){
    var answer = "Put the table in the body tag. It will show up on top of the specs that Jamine runs.";
    expect(answer).not.toBe(null);
  });

});