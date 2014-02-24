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

  it("How do I move the active class manually?", function(){
    answer = "get class='active' from one table row and move it to another."
    expect(answer).not.toBe(null);
    error = {"Uncaught SyntaxError: Unexpected token function": "forgot a comma"}
  });

  it("Where the heck did I put my notes on how to integrate jasmine-jquery to a jasmine skeleton?", function(){
      var observation ="It is demoralizing to know you did something once and then can't find it. It's like misplacing your keys for the hundredth time."
      var step1 = "Found the [issue I submitted](https://github.com/velesin/jasmine-jquery/issues/179#issue-27409168) after I debugged jasmine-jquery chrome startup issue. I submitted it 13 days ago, on Feb 11."
      var step2 = {"question": "How do I find files I created 13 days ago?", 
                "answer": "http://stackoverflow.com/questions/10898154/grep-inside-all-files-created-within-date-range"
              }
       var step3 = "Run that command inside ~/Desktop/GiantFolderOfDoom"
       var step4 = "Eyeball and look for jasmine jquery"
      
       var answer = "found it: GiantFolderOfDoom/WednesdaySideProjects/Git_Workflow_tutorial/tests"

       var step5 = "Realized if I had read step 1 instead of being annoyed by having lost it, I would have found the jasmine command a lot sooner."
       var command = "/Applications/GoogleChrome.app/Contents/MacOS/GoogleChrome --allow-file-access-from-files SpecRunner.html"
       expect(answer).not.toBe(null) ;

        var music_I_am_listening_to = "http://www.youtube.com/watch?v=6Dy74NOzcS8&list=PLoDSkbY6ygMGfgDAQsS7daY2h9rfjSMvZ"
    });

  it("How do I put jasmine-jquery into my existing skeleton?", function(){
      answer = "Copy jasmine-jquery and jquery-1.11.0.min.js into this project's spec folder. Add the libraries to the Specrunner. (read this commmit to see what I added where.  Then tyr selecting something with jquery and seeing if it exists."
      expect($('#player1_strip')).toExist();
      expect(answer).not.toBe(null);

  });

  it("BAD TEST: How do I get rid of the active class on every element?", 
    function(){
      //probably a good place to have a fixture later.
      $('#player1_strip td').removeClass('active');
      expect($('#player1_strip td')).not.toHaveClass('active');
    })

  it("I have highlighted an element. How to I highlight the element right next to it?", function(){
      //probably anohter good place to have a fixture later
      observation = "Is it reasonalbe to expect newbies to be able to understand the keyword traversal in order to find the next method?"
      link = "[the next method](http://api.jquery.com/next/)"
      next = $('#player2_strip td.active').next();
      next.addClass('active');
      expect(next).toHaveClass('active');

    });

  it("Will psuedocoding out what I want to happen help me decide what I want to do next?", function(){
      var observation = "I am having trouble remembering what I'm supposed to do next";
      var psuedocode = "read the following comment"
      // At the beginning of the game, the two first squares are highlighted. 
      //    if neither player has won, 
      //      when player 1 presses her key, 
      //         the blue car moves forward one space
      //        when player 2 presses his key, 
      //          the red car moves forward one space 
      //
      //      
      //A player has won when they have reached the end of the track   
      answer = "yes"
      expect(answer).toEqual("yes");   
  });

  it("How do I determine if a player has won?", function(){
    var answer = "Check to see if the last cell  in their strip has a class active."
    var link = "[checking if an element has a class](http://api.jquery.com/hasClass/)"
    
    function PlayerWon( player_number ){
      var selector = "#player" + player_number + "_strip td";
      return $(selector).last().hasClass("active");
    }
    
    expect(PlayerWon("1")).toBe(false);

    $("#player1_strip td").last().addClass("active");

    expect(PlayerWon("1")).toBe(true);
   
    expect(answer).not.toEqual("null")
  })

  it("How do I set up the game board?", function(){
    var answer = "Make sure the active class is on the first two cells";

    function SetUpGame(){
      $("#racetrack .active").removeClass("active");
      $("#player1_strip").children().first().addClass("active");
      $("#player2_strip").children().first().addClass("active");
    }

    SetUpGame();

    expect($("#player1_strip").children().first()).toHaveClass("active");
    expect($("#player2_strip").children().first()).toHaveClass("active");
   })

  it("How do I move a player forward one space?", function(){
      var links = "http://api.jquery.com/children/, http://api.jquery.com/first/"

      function UpdatePosition(player_number){
        selector = "#player" + player_number + "_strip .active"
        $(selector).next().addClass("active");

      }

    UpdatePosition("1")
    UpdatePosition("2")
    UpdatePosition("1")

    expect($("#player1_strip").children().first().next().next()).toHaveClass("active");
    expect($("#player2_strip").children().first().next()).toHaveClass("active");

  })

  it("How do I recognize when somebody has pressed a key?", function(){
    var links = "http://stackoverflow.com/questions/7005162/jquery-capture-an-enter-key-pressed-anywhere-on-the-page"
    var keypress = 0
    
    $(document).on("keyup", function(event){
        keypress = keypress + 1
     });

    var link = "[How to simulate a key up](http://stackoverflow.com/questions/596481/simulate-javascript-key-events)"
    
    function simulateKeyPress(character) {
       jQuery.event.trigger({ type : 'keyup', which : character.charCodeAt(0) });
      }

    simulateKeyPress("l");
    simulateKeyPress("l");
     
    expect(keypress).toBe(2);  
   
  })




});