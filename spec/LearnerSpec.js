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
  });
  it("How do you add style attributes to html elements without using a full stylesheet?", function(){
    var answer = "Just add a full stylesheet already. But if you really want to know, open yourjavascript console (cmd-option-j) and [edit the stylesheet attribute](http://stackoverflow.com/questions/3783186/how-do-i-edit-css-in-chrome-like-in-firebug-for-firefox)."
    var asnwer2 ="To add a stylesheet, look at the changes made in this commit"
    expect(answer).not.toBe(null)
  });


});