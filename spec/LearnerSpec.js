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

  it("How do I made the table pretty enough that I don't get annoyed every time I look at it?", function(){
    var answer = "No, still annoyed, but don't know enough css to fix this quickly and it's not a core feature. Moving on.";
    expect(answer).not.toBe(null);
    //watching the number of mistakes I make trying to do this, I now deeply mistrust any untested code. 
  });

  it("How do I deal with the fact that every open screen makes it exponentially harder for me to keep track of where I am?", function(){
    var answer = "close all unecessary tabs"
    var answer2 = "stop playing meditation music and play concentration music"
    var answer3 = "[video game musicians really know how to make good thinking music](http://www.youtube.com/watch?v=OLdfuxzwI6k&list=PLoDSkbY6ygMGfgDAQsS7daY2h9rfjSMvZ)"
    expect(answer).not.toBe(null); 
  });

  it("How do I show the car's position on the track?", function(){
      answer = "Have the row with the active class be a different color"
      css_classes_are_like = "Family names. Family names are a way of telling which people belong to a particular family of people. When you say the 'roys', you know you are talking about a group of people, and that you are dealing with them as a group."
      css_selectors_are_like = "pollsters looking for rich urban middle class people for their survey.  The pollster will not talk to you unless you fit all of the characteristics"
      link = "[How do I select an element within a specific element in css](http://stackoverflow.com/questions/6933763/how-do-i-select-item-with-class-within-a-div-in-jquery)"
      expect(answer).not.toBe(null);
    });
});