# Coursework 

## File Structure 

### index.mjs contents
  * main js file
  * links to modular files

### board.mjs contents
  * code that makes the board and also deals with special tiles

### gameplay.mjs contents
  * async function reportwordValidity()
    * checks if word placed in the input box is part of the dictionary
    * also scores if the word is valid
    * removes the draggable attribute from the
    * triggered by the play button
  * function removeTiles()
    * removes played letters from the tilebag
  * function checkingEndGame()
    * function that ends the game

### tiles.mjs contents
  * creating the tiles and matching their scores
  * creating the blank tiles and handling them
  * filling & refilling the player rack

### dragdrop.mjs contents
  * code for the drag and drop API's
  * removing the letters from the tileBag and player1Stacks arrays

### server.js contents
  * code to set up a simple express server


## Key Features Of Game & How To Use Them

* game starts by running npm start while within the client folder
* drag your tiles onto the board having at least 1 of them on the star tile
* enter the word you have just placed into the input box then press play
* game is played until the tiles in the tilebag finish
* if a word is valid, it will show your score and also what word you have just placed
* you can not remove tiles once a valid word is placed

## Unfinished Work

* iteration over my tiles
* comparing the old board to the new so I can track where letters have been placed
* special tile scoring

## Future Work

* Figure out and complete the unfinished work