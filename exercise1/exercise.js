
function start_exercise() {
	
	var canvas = oCanvas.create( {
		canvas: "#canvas",
		background: "#222",
		fps: 60
	});

	// 1) Containers
	var firing_section = canvas.display.rectangle({
		x: 10, 
		y: 10,
		width: 100,
		height: 85,
		fill: "white"
	});

	
	var moving_section = canvas.display.rectangle({
		x: 10, 
		y: 110,
		width: 360,
		height: 350,
		fill: "white"
	});

	var selection_section = canvas.display.rectangle({
		x: 120, 
		y: 10,
		width: 250,
		height: 85,
		fill: "white"
	});

	// 2) Firing section
	var firing_text = canvas.display.text({
		x: 15,
		y: 10,
		font: "bold 14px sans-serif",
		text: "Firing Rate",
		fill: "#ffff"
	});

	var firing_rate = canvas.display.text({
		x: 65,
		y: 30,
		font: "bold 18px sans-serif",
		text: "11",
		fill: "#ffff",
		base: 11
	});



	// 3) Selection sectoin
	var spot_text = canvas.display.text({
		x: 30,
		y: 10,
		font: "bold 14px sans-serif",
		text: "Spot Size",
		fill: "#ffff"
	});

	var small_ball = canvas.display.ellipse({
		x: 25,
		y: 50,
		radius: 8,
		fill: "#0aa"
	});

	var medium_ball = canvas.display.ellipse({
		x: 60,
		y: 50,
		radius: 15,
		fill: "#0aa"
	});

	var large_ball = canvas.display.ellipse({
		x: 110,
		y: 50,
		radius: 25,
		fill: "#0aa"
	});

	var spot_off = canvas.display.rectangle({
		x: 160,
		y: 20,
		width: 75,
		height: 25, 
		fill: "black"
	});

	var spot_off_button = canvas.display.rectangle({
		x: 160,
		y: 18,
		width: 75,
		height: 23, 
		fill: "black"
	});

	var new_rf_button = canvas.display.rectangle({
		x: 160,
		y: 53,
		width: 75,
		height: 23, 
		fill: "black"
	});

	var spot_on_off = canvas.display.text({
		x: 7,
		y: 7,
		font: "bold 12px sans-serif",
		text: "SPOT OFF",
		fill: "white"
	});

	var new_rf = canvas.display.text({
		x: 14,
		y: 7,
		font: "bold 12px sans-serif",
		text: "NEW RF",
		fill: "white"
	});

	// 4) Moving section
	var spot_control = canvas.display.ellipse({
		x: 177,
		y: 135,
		radius: 50,
		fill: "#0aa",
		last: 2 * large_ball.radius
	});

	var outer_circle = canvas.display.ellipse({
		x: 100,
		y: 100,
		radius: 50,
		fill: "red"
	});

	var inner_circle = canvas.display.ellipse({
		x: 100,
		y: 100,
		radius: 30,
		fill: "green"
	});

	var cell_title = canvas.display.text({
		x: 125,
		y: 10,
		font: "bold 14px sans-serif",
		text: "ON-Center Cell",
		fill: "black"
	});

	// 5) Bindings
	small_ball.bind("click tap", function() {
		spot_control.radius = 2 * this.radius;
		spot_control.last = spot_control.radius;
		canvas.redraw();
	});

	medium_ball.bind("click tap", function() {
		spot_control.radius = 2 * this.radius;
		spot_control.last = spot_control.radius;
		canvas.redraw();
	});

	large_ball.bind("click tap", function() {
		spot_control.radius = 2 * this.radius;
		spot_control.last = spot_control.radius;
		canvas.redraw();
	});

	spot_off_button.bind("click tap", function() {
		if (spot_on_off.text == "SPOT OFF") {
			spot_on_off.text = "SPOT ON";
			spot_control.radius = 0;
		} else {
			spot_on_off.text = "SPOT OFF";
			spot_control.radius = spot_control.last;
		}
		canvas.redraw();
	});

	new_rf_button.bind("click tap", function() {

		var radius = Math.random() < 0.5 ? 50 : 30;
		outer_circle.radius = radius;
		if (outer_circle.radius == 50) {
			inner_circle.radius = 30;
		} else {
			inner_circle.radius = 16;
		}
		

		var x = Math.random() * (250 - 0);
		var y = Math.random() * (250 - 0);

		outer_circle.x = x + outer_circle.radius;
		outer_circle.y = y + outer_circle.radius;
		inner_circle.x = x + outer_circle.radius;
		inner_circle.y = y + outer_circle.radius;

		
		canvas.redraw();
	});


	// Add in the different grid sections to the canvas
	canvas.addChild(firing_section);
	canvas.addChild(moving_section);
	canvas.addChild(selection_section);
	
	// Add in all content for fire rate box
	firing_section.addChild(firing_text);	
	firing_section.addChild(firing_rate);
	

	// Add in all content for spot size selection box
	selection_section.addChild(spot_text);
	selection_section.addChild(small_ball);
	selection_section.addChild(medium_ball);
	selection_section.addChild(large_ball);

	selection_section.addChild(spot_off_button);
	selection_section.addChild(new_rf_button);

	spot_off_button.addChild(spot_on_off);
	new_rf_button.addChild(new_rf);

	// Add in all content for exercise moving section
	moving_section.addChild(cell_title);
	moving_section.addChild(outer_circle);
	moving_section.addChild(inner_circle);
	moving_section.addChild(spot_control);


	setInterval(function(){ 
		rate = firing_rate.base;
		rate_updated = Math.floor(Math.random() * ((rate+1) - (rate-1) + 1)) + (rate-1);
		firing_rate.text = rate_updated.toString();
		canvas.redraw();
	}, 1000);


	spot_control.dragAndDrop({
		move: function() {
			var dx = spot_control.x - outer_circle.x;
			var dy = spot_control.y - outer_circle.y;
			var distance = Math.sqrt(dx * dx + dy * dy);

			var inner_dx = spot_control.x - inner_circle.x;
			var inner_dy = spot_control.y - inner_circle.y;
			var inner_distance = Math.sqrt(inner_dy * inner_dx + inner_dy * inner_dy);


			// different interactions for large, medium, and small ball
			if (spot_control.radius ==  50) {
				// go low when covering just red section, otherwise default
				if ((distance  < spot_control.radius + 0.7*outer_circle.radius) && (distance > spot_control.radius +
					-0.3*outer_circle.radius)) {
					firing_rate.text = "1";
					firing_rate.base = 2;	
				}  else {
					firing_rate.text = "11";
					firing_rate.base = 11;
				}
			} else if (spot_control.radius == 30) {
				// behave the same way that the large spot_control always does, because of relative sizes of ball and spot
				if (outer_circle.radius == 30) {
					if ((distance  < spot_control.radius + 0.7*outer_circle.radius) && (distance > spot_control.radius +
							-0.3*outer_circle.radius)) {
						firing_rate.text = "1";
						firing_rate.base = 2;	
					}  else {
						firing_rate.text = "11";
						firing_rate.base = 11;
					}
				} else {	
					// ball level spikes up high when covering middle
					if ((distance  < spot_control.radius + 0.7*outer_circle.radius) && (distance > spot_control.radius +
							-0.3*outer_circle.radius)) {
						firing_rate.text = "1";
						firing_rate.base = 2;	
					} else if (inner_distance + 1.4 * inner_circle.radius < spot_control.radius + inner_circle.radius){
						firing_rate.text = "85";
						firing_rate.base = 85;
					}
					else {
						firing_rate.text = "11";
						firing_rate.base = 11;
					}
				}
			} else {
				// behave same way as the large spot control always does
				if (outer_circle.radius == 30) {
					if ((distance  < spot_control.radius + 0.7*outer_circle.radius) && (distance > spot_control.radius +
							-0.3*outer_circle.radius)) {
						firing_rate.text = "1";
						firing_rate.base = 2;	
					} else if (inner_distance + 1.4 * inner_circle.radius < spot_control.radius + inner_circle.radius){
						firing_rate.text = "85";
						firing_rate.base = 85;
					} else {
						firing_rate.text = "11";
						firing_rate.base = 11;
					}
				} else {
					if ((distance < spot_control.radius + 0.7*outer_circle.radius) && (distance > inner_circle.radius)) {
						firing_rate.text = "1";
						firing_rate.base = 2;	
					}  else if (distance < inner_circle.radius) {
						firing_rate.text = "23";
						firing_rate.base = 23;	
					} else {
						firing_rate.text = "11";
						firing_rate.base = 11;
					}
				}
			}

			/*

			if (distance + 1.7 * outer_circle.radius < spot_control.radius + outer_circle.radius) {
				firing_rate.text = "1";
				firing_rate.base = 2;	
			} 
			else if (inner_distance + 1.4 * inner_circle.radius < spot_control.radius + inner_circle.radius){
				firing_rate.text = "85";
				firing_rate.base = 85;
			}
			else if (distance + 0.3 * outer_circle.radius < spot_control.radius + outer_circle.radius) {
				firing_rate.text = "1";
				firing_rate.base = 2;
			} else {
				firing_rate.text = "11";
				firing_rate.base = 11;
			} */
		}
	});


}

