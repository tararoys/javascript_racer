describe("How many questions need answers before I can ship a completed app?", function() {
  it("Does jasmine need to have at least one spec in order to work?", function(){
    var answer = true 
    expect(answer).toEqual(true);
  });

  it("How do I get a table to show up on the Jasmine SpecRunner page?", function(){
    var answer = "Put the table in the body tag. It will show up on top of the specs that Jamine runs.";
    expect(answer).not.toBe(null);
  });

  it("How do I get javascript to show multiline strings like Ruby's heredoc?", function(){
    var link = "http://stackoverflow.com/questions/805107/creating-multiline-strings-in-javascript"
    var answer = "like \
                  this" //does not work in all broswers
    expect(answer).not.toBe(null);
  })

});