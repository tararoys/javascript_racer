
#JavaScript Racer 1: Front-end Challenge

Let's create a JavaScript-only version of [Ruby Racer](http://socrates.devbootcamp.com/challenges/230) . For now it will be a single html page with no back-end at all. Later we'll add the ability to save high scores and the like by adding a back-end to the application.
Unlike Ruby Racer, the outcome of the game won't be pure chance. Each player will advance their "car" by smashing some key. For example, player 1 might be the "q" key and player 2 might be the "p" key.

The goal here is to learn more about JavaScript, jQuery, the DOM, and asynchronous event handling.

Before you start, you should read about [jQuery](http://learn.jquery.com/about-jquery/) . In particular, you should understand event handling and callback functions.

##Objectives 

###The Setup

Let's just start with building a simple two-player board. This will be rendered via HTML. There are a few ways you could do it, e.g., a table that looks like:

```
<table class="racer_table"> <tr id="player1_strip">
<td></td>
<td class="active"></td> <td></td>
<td></td>
... etc ...
</tr>
<tr id="player2_strip">
<td></td>
<td></td>
<td></td>
<td class="active"></td> ... etc ...
</tr> </table>
```

Then, using CSS, you can provide styles like:

```
.racer_table td { background-color: white; height: 20px;
width: 20px;
}
￼￼￼￼￼￼
￼.racer_table td.active { background-color: black;
}
```

Then updating a player's position could be achieved by adding the active class to the appropriate td. There are many other ways to achieve a sensible board output; this is just one suggestion.

Make sure you're able to "manually" produce all the board layouts you might care about before you jump into the JavaScript. Whatever way you choose, it should be easy for jQuery/JavaScript to manipulate, so keep that in mind.

Use something like [normalize.css](http://necolas.github.com/normalize.css/) to enable sane default styles. 

###Add Javascript

Now we need some way for JavaScript to update the board state. Create simple JavaScript functions that can update a particular player's position. Y ou give the functions a player position as input and they update the underlying HTML to reflect the new position.
It could look something like:

```
update_player_position('player1', 10);
```

Store this JavaScript in a separate file and use the JavaScript console to debug it and pass in values manually.

###Binding to Key Presses

Now we'll make the game interactive! Bind to the [keyup event](http://api.jquery.com/keyup/) to detect when a player has "pressed" a key. We don't bind to the [keydown](http://api.jquery.com/keydown/) or [keypress](http://api.jquery.com/keypress/) events because those events fire when the keyboard repeats the key, whereas the keyup event doesn't.

It'd be a boring game if you could just hold the key and go. Y ou want to bind to the document, like so: 

```
$(document).ready(function() { $(document).on('keyup', function(event) {
// Detect which key was pressed and call the appropriate function
// Google "jquery keyup what key was pressed" if you don't know how });
});
```
###Starting and Winning States

The last bit is to have starting and winning states, so we can restart the game and declare a winner when the game is over. Add these features (starting, playing, winning, and restarting) and submit your solution as a gist with at least three files: an HTML file, a CSS file, and a JavaScript file. You can have more files, but all CSS and JavaScript should be linked externally from the HTML file.