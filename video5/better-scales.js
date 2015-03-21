//Hard coded scale values
var x = d3.scale.linear()
		.domain([0,350])
		.range([padding,width]);


//Have d3 calculate the domain for you!
var maxY = d3.max(data, function (d, i ) {
	return parseInt(d.x);
});

var minY = d3.min(data, function (d, i ) {
	return parseInt(d.x);
})

//Now a scale that dynamically modifies itself even when the data changes
var x2 = d3.scale.linear()
		.domain([minY,maxY])
		.range([padding,width]);

//Even faster than running min and max seperately 
var extents = d3.extent(data, function (d, i ) {
	return parseInt(d.x);
})

var x3 = d3.scale.linear()
		.domain([extents[0],extents[1]])
		.range([padding,width]);
