//change background to skyblue
d3.select('svg')
    .style('background-color', 'skyblue')

//adding a rectangle with red border
d3.select('svg').append("rect")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", 600)
            .attr("height", 200)
            //red border
            .style('stroke', 'red')
            .style('stroke-width', '5px')
            .style('fill', 'white')

//changing the h2 element
d3.select('h2')
    .text('A really simple description')
    .style('color', 'orange')

//changing the second header 2

//change the color of the circle -- I just changed it in the html file

//add a text to svg
d3.select('svg').append('text')
    .attr('x',300)
    .attr('y',100)
    .text('Hello! New text here.')

//remove the first text from svg
d3.select('text')
    .remove()

//add circle
d3.select('svg').append("circle")
    .attr('r', 40)
    .attr('cx', 200)
    .attr('cy', 150)
    .attr('fill', 'yellow')

//changing the opacity
d3.selectAll('svg')
    .style('opacity', 0.3)



//circle for loop
for (let i = 0; i < 10; i++){
    d3.select('svg')
    .append("circle")
    .attr('x', 50 )
}

//rectangle for loop
for (var i = 0; i < 6; i++){
    let space = 20
    if(i/2%1){
         d3.select('svg')
        .append('rect')
        .attr("x", i * space)
        .attr("y", 0)
        .attr("width", 20)
        .attr("height", 20)
    }else{
        d3.select('svg')
        .append('rect')
        // .attr('id', 'greenbox')
        .attr("x", i * space)
        .attr("y", 0)
        .attr("width", 20)
        .attr("height", 20)
        .style('fill', 'green')
        
    }
}

//second header
d3.select('body')
    .append('h2')
    .text('My second picture')

//Chessboard
//SVG defined.style('opacity', 0.2)
d3.select('body')
    .append('svg')
    .attr('id', 'chessboard')
    .attr('width', 300)
    .attr('height', 300)
    .style('background-color', 'white')

    //chess squares
    for (var i = 0; i < 4; i++){
        let space = 20;
        d3.select('svg#chessboard')
            .append('rect')
            .attr( 'x', i*space)
            .attr( 'y', 0)
            .attr('width', 20)
            .attr('height', 20)
        // if (i/3)
    }
