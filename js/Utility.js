var utility= {
	displayBug: function(bug){
	
	var newElement = "";
	var cColor = "";
	bug.posX = Math.floor(10 + (Math.random() * (width - 10 + 1)));
	bug.posY = Math.floor(10 + (Math.random() * (height - 10 + 1)));
	switch(bug.priority) {
		case 1:
		    bug.cColor = "#00AC6B";
			bug.r = '20';
		    newElement = $('<circle/>', {
			id: bug.bugID,
			cx: bug.posX,
			cy: bug.posY,
			r: bug.r,
			fill: bug.cColor
		});
			$("#group1").append(newElement);
			break;
		case 2:
		    bug.cColor = "#FF9A00";
			bug.r = '30';
		    newElement = $('<circle/>', {
			id: bug.bugID,
			cx: bug.posX,
			cy: bug.posY,
			r: bug.r,
			fill: bug.cColor
		});
			$("#group2").append(newElement);
			break;
		case 3:
	    bug.cColor = "#FF7B40";
		bug.r = '35';
	    newElement = $('<circle/>', {
		id: bug.bugID,
		cx: bug.posX,
		cy: bug.posY,
		r: bug.r,
		fill: bug.cColor
		});
		$("#group3").append(newElement);
			break;	
		case 4:
		    bug.cColor = "#FF7B40";
			bug.r = '40';
		    newElement = $('<circle/>', {
			id: bug.bugID,
			cx: bug.posX,
			cy: bug.posY,
			r: bug.r,
			fill: bug.cColor
		});
		$("#group4").append(newElement);
			break;
		case 5:
	    bug.cColor = "#FF4F00";
		bug.r = '45';
	    newElement = $('<circle/>', {
		id: bug.bugID,
		cx: bug.posX,
		cy: bug.posY,
		r: bug.r,
		fill: bug.cColor
		});
		$("#group5").append(newElement);
			break;	
		case 6:
	    bug.cColor = "#FD0006";
		bug.r = '50';
	    newElement = $('<circle/>', {
		id: bug.bugID,
		cx: bug.posX,
		cy: bug.posY,
		r: bug.r,
		fill: bug.cColor
		});
		$("#group6").append(newElement);
			break;
		default:
			break;
	}
	return;
    },
	
	DrawSunblust: function(posX, posY, bug) {
		
		
		var svg = d3.select("svg").append("g")
			.attr("id", "sunblust")
		    .attr("transform", "translate(" + posX + "," + posY + ")");

		var partition = d3.layout.partition()
		    .sort(null)
		    .size([2 * Math.PI, radius * radius])
		    .value(function(d) { return 1; });

		var arc = d3.svg.arc()
		    .startAngle(function(d) { return d.x; })
		    .endAngle(function(d) { return d.x + d.dx; })
		    .innerRadius(function(d) { return Math.sqrt(d.y); })
		    .outerRadius(function(d) { return Math.sqrt(d.y + d.dy); });
		
		var path = svg.selectAll("path")
			.data(partition(bug.timeSection))
		  	.enter().append("path")
		  	.attr("display", function(d) { return d.depth ? null : "none"; }) // hide inner ring
		  	.attr("d", arc)
		  	.style("stroke", "#fff")
		  	.style("fill", function(d) { return color((d.children ? d : d.parent).name); })
		  	.style("fill-rule", "evenodd")
		  	.each(stash);
		  		  			
							
		// Stash the old values for transition.
		function stash(d) {
		  d.x0 = d.x;
		  d.dx0 = d.dx;
		}

		

		d3.select(self.frameElement).style("height", height + "px");
		return;
		
	}, 
	
	DrawTimeLine: function(posX, posY, bug) {
		
		
				
		console.log(h1);
		var width = 960,
		    height = 500,
		    radius = Math.min(width, height) / 2;
			

		var color = d3.scale.category20();

		var pie = d3.layout.pie().value(function(d) {
		    return d.value;
		});
		
		var arc = d3.svg.arc()
		    .innerRadius(radius - 100)
		    .outerRadius(radius - 20);

		var svg = d3.select("svg").append("g")
			.attr("id", "timeline")
		    .attr("transform", "translate(" + posX + "," + posY + ")");
			
			var pieData = pie(bug.timeSection);

  		  var path = svg.selectAll("path")
  		      .data(pieData)
  		    .enter().append("path")
  		      .attr("fill", function(d, i) { return color(i); })
  		      .attr("d", arc);

		
	},
		
	DrawRelationWithCommitter: function(posX, posY){

		var newElement = "";
		var committers = [1];
	   
		// for loop
		for (var i = 0; i < committers.length; i++) {
			newElement = $('<line />', {
				x1: posX, 
				y1: posY,
				x2: '100', 
				y2: posY, 
				stroke: 'red'});
			$("#relationship").append($(newElement));
		}
		
		//newElement = ""
		return;
	}
};