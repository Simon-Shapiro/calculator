/*
Add event listeners to buttons. When a button is pushed, its value is read. 
If the button is a number, operator, or the decimal (.) push it to an array. 
The array contains all button presses in the order they were clicked by the user.
*/

/*when the enter button is pushed, take the array of button presses and use regex to split it into groups:
-series of numbers
-series of number interrupted by a (.)
    -use lookaheads and lookbehinds to grab all numbers surrounding the decimalin both directions 
    until an operator is matched
-use lookaheads and lookbehinds to match number groups to their preceding and succeeding operands
*/

document.getElementbyId