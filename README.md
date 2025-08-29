# assignment-5
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:
getElementById = returns one element based on its id.
getElementsByClassName = returns all the elements with the same class. It returns a list (not quite an array).
querySelector = returns the first element that can be matched with a CSS style selector (id, class, tag, etc.).
querySelectorAll = returns all elements that match the CSS selector and returns them as a list.

2. How do you create and insert a new element into the DOM?
Ans:
We can make a new element using document.createElement(). Then we can put text or attributes in it, and finally add it to the page with something like appendChild().

3. What is Event Bubbling and how does it work?

Ans:
When we click something inside another element, the event first happens on the clicked element and then travels up to its parent, then to the parent of the parent, and so on. This is known as event bubbling because the event "bubbles up" the DOM tree.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans:
Event delegation means putting one event listener on a parent element instead of adding separate listeners to each child. We then check which child was clicked.
It is useful because:
i) We write less code.
ii) It uses less memory.
iii) It also works for new elements added later.

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans:
preventDefault() = stops the browser’s normal action (like stopping a form from submitting or stopping a link from opening).
stopPropagation() = stops the event from moving upward to parent elements.
