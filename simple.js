d3.select('svg')
.style('background-color', 'skyblue')
//adding a rectangle with red border
d3.select('svg').append("rect")
            .attr("x", 0)
            .attr("y", 0)
            //dont know how to do the red border
            .attr("width", 600)
            .attr("height", 200)
            .style('color', 'red')

//Changing the h2 element
d3.select('h2')
.text('A really simple description')

//dont know how to change the color of the circle
//I just changed it in the html file

//add a text to svg
d3.select('svg').append('text')
.attr('x',300)
.attr('y',100)
.text('Hello! New text here.')
//remove the first text from svg
d3.select('text').remove()
//add circle
d3.select('svg').append("circle")
.attr('r', 40)
.attr('cx', 200)
.attr('cy', 150)
.attr('fill', white)

d3.selectAll('svg')
.style('opacity', 0.3)

//circle for loop

for (let i = 0; i < 10; i++){
    d3.select('svg').append("circle")
}