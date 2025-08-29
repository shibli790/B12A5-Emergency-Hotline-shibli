

Q. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
1. Answer -->
getElementById returns one element by id.
getElementsByClassName returns all elements with a classname .
querySelector  returns the first match by CSS selector.
querySelectorAll  returns all matches (NodeList).

-------------

Q. How do you **create and insert a new element into the DOM**?

2. Answer -->Take a var and use js's createElement inside it, creating a div with that element

---------------------
Q. What is **Event Bubbling** and how does it work?

3. Answer -->
If click a button inside a div, the event fires on the button first, then the div, then body, then document  it works DOM tree .

----------------------

Q. What is **Event Delegation** in JavaScript? Why is it useful?

4. Answer -->Event Delegation Short & Clear Works for future added children .

---------------------

Q. What is the difference between **preventDefault() and stopPropagation()** methods?

5. Answer -->
preventDefault() website refress stop use funtion (e) .

stopPropagation() means Stop the event right here  don’t let it go up to the parent elements .
