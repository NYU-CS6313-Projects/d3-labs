#Most Important SVG tags

## g
An SVG grouping tag; just like div is for HTML. Any styles applied to a g, will apply to anything
inside of the g. Also, note the very useful transform attribute. This lets you apply geometric
transformations like translation, skewing, rotation, etc. See [here](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform)
for a list of transformations

``<g transform="translate(50,50)"></g>`` Anything in this group would have 50 added to it's x and y
positions.

## line
Draw a straight line from x1,y1 to x2,y2. x1,y1;x2,y2 are attributes that are used to set the 
line's coordinates

``<line x1="0" y1="0" x2="100" y2="100" />`` would draw a straight line between 0,0 and 100,100

## rect
Draw a rectangle by setting the x,y (upper left position) and width and height

## circle and ellipse
Used for drawing circles (uniform radius around a centre point) and ellipses (two radii, one for
x and one for y axis)

cx,cy set the centre point of the circle/ellipse
r sets the radius of the circle
rx,ry sets the radius on the x axis and y axis of the ellipse

``<ellipse cx="50" cy="50" rx="10" ry="5"/>`` creates an ellipse at 50,50 with a radius along the
x axis of 10, 5 along the y axis

## polygon and polyline
Create a polygon by defining a series of points. Must be closed
Polyline: create a line formed from multiple lines that are connected (but do not have to be closed)

points attributes defines the sequence in points in a space delimited list.

``<polyline points="0,0 5,5 10,10"/>`` creates a line with two segments, one from 0,0 to 5,5; and
another from 5,5 to 10,10

Polygon is similar to polyline, but will close the shape

## path
Path is capable of drawing a more complex line, such a curve. Let D3 do the work with these.
See [here](https://github.com/mbostock/d3/wiki/SVG-Shapes#path-data-generators) for how to use D3
for that

## text 
Draws text on the screen. Positioning text is tricky. 
Text starts to be drawn at the x,y position given, and is drawn upward from that spot.
(This is why trying to draw text at position 0,0 shows nothing.)

``<text x="50" y="12">Hello World</text>`` 