# etch
Etch a Sketch type project for the Odin Project
Skills learned and utilized:
The main skills utilized in this project were the utilization of Javascript and jQuery to create and manipulate the DOM. Specifics
1. Use "For" loop to create a grid of divs
2. Javascript Math was used to size the container grid and individual cells*
3. jQuery was used to manipulate the CSS directly based upon the "mouseenter" event for the grid**

*Originally ran into an issue simply dividing a set container size by the grid size. When selecting certain numbers the cells would be slightly to big and not properly fit resulting in the cells stopping short on each row and "overflowing" past the bottom of the container. The Math.round() function was used to prevent any rounding errors by insuring that cell height & width were whole pixels, then adjusting the container size accordingly.

**Future additions to this project may include allowing a different fill color to be select, creating a random fill color, or having hovers add opacity. For the time being though, I'm moving on.