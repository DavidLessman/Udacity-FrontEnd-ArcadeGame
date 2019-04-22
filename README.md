# UDACITY Clasic Arcade Game Project

## Table of Contents
- [Instructions](#instructions)
- [Features](#features)
- [Contributing](#contributing)

## Instructions

To start the game load the [index](index.html) file.

Use the arrow keys to move the character around the game board. You will loop from one side to the other when going off the left or right side. From the starting position you can move down once. This gives you space to familiarize yourself with the controls before interacting with the enemies.

When your character comes in contact with an enemy, you will receive a message and be reset to the starting position.

The goal is to progress your character to the water. Upon reaching the water the a new character will appear at the start position and need to be moved to the water. Once all 5 characters have made it to the water then you will get a message asking if you wish to play again.

## Features

- The first stage has 3 enemies: 2 coming from the left, 1 from the right.
- As you move a character to the water: 
-- score will improve.
-- character will appear in the Score Panel div.
-- additional ememies added, direction and row randomly selected at this time/ (one at second and third stages, two at forth and fifth)

- Pop up displays after 5th character reaches the water asking if you want to play again. Game will reset if you confirm.

- speed for all enemies randomly set when they go back to the beginning of their row.

### Edits from Udacity's explicit insructions

- Created an inverted version of the Enemy png to allow enemies to go both directions.

- Added Score Panel to show 'score' and which character have progressed.

- Set character to cycle through the pngs instead of creating a choice for the player.

## Contributing

This repository is the starter code for _all_ Udacity students.

Looked at the code from [rrjoson](https://github.com/rrjoson/udacity-front-end-nanodegree/blob/master/p3-classic-arcade-game-clone/js/app.js), [AleksCreative](https://github.com/AleksCreative/Udacity-Front-End-Nanodegree-projects/blob/master/02_FEND_Nanodegree-2018/Project04%20-%20Arcade%20Game%20clone/js/app.js), [bcko](https://github.com/bcko/Ud-FE-Frogger-JS/blob/master/js/app.js), and [egomadking](https://github.com/egomadking/frontend-nanodegree-arcade-game/blob/master/js/app.js) on GitHub and [Mahak](https://codepen.io/makkBit/pen/dXdbmr) on CodePen for ideas. Heavily modified to fit features I wanted.

