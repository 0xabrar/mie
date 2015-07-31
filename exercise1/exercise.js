
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
		x: 7,
		y: 10,
		font: "bold 12px sans-serif",
		text: "Cell Firing Rate",
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

	var firing_background = canvas.display.rectangle({ 
		x: 15, 
		y: 55,
		width: 70,
		height: 20, 
		fill: "black"
	});

	var firing_background_line = canvas.display.line({
		start: {x: firing_background.x, y: firing_background.y + firing_background.height/2}, 
		end: {x: firing_background.x + firing_background.width, y: firing_background.y + firing_background.height/2},
		stroke: "2px green"
	});


	// all of the firing lines
	var fl = canvas.display.line({
		start: {x: firing_background.x + 40, y: firing_background.y}, 
		end: {x: firing_background.x + 40, y: firing_background.y + firing_background.height},
		stroke: "3px green"
	});

	var fl2 = canvas.display.line({
		start: {x: firing_background.x , y: firing_background.y}, 
		end: {x: firing_background.x , y: firing_background.y + firing_background.height},
		stroke: "3px green"
	});

	var fl3 = canvas.display.line({
		start: {x: firing_background.x + 30, y: firing_background.y}, 
		end: {x: firing_background.x + 30, y: firing_background.y + firing_background.height},
		stroke: "3px green"
	});

	var fl4 = canvas.display.line({
		start: {x: firing_background.x + 50, y: firing_background.y}, 
		end: {x: firing_background.x + 50, y: firing_background.y + firing_background.height},
		stroke: "3px green"
	});

	var fl5 = canvas.display.line({
		start: {x: firing_background.x + 10, y: firing_background.y}, 
		end: {x: firing_background.x + 10, y: firing_background.y + firing_background.height},
		stroke: "3px green"
	});

	var fl6 = canvas.display.line({
		start: {x: firing_background.x + 10, y: firing_background.y}, 
		end: {x: firing_background.x + 10, y: firing_background.y + firing_background.height},
		stroke: "3px green"
	});

	// 3) Selection section
	var spot_text = canvas.display.text({
		x: 30,
		y: 10,
		font: "bold 12px sans-serif",
		text: "Light Size",
		fill: "#ffff"
	});

	var small_ball = canvas.display.ellipse({
		x: 25,
		y: 50,
		radius: 8,
		fill: "#0aa",
		border: "2px solid black"
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
		fill: "red"
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
		text: "LIGHT OFF",
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
	}).bind("mouseenter", function() {
		canvas.mouse.cursor("pointer");
	}) .bind("mouseleave", function() {
		canvas.mouse.cursor("default");
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

	var outer_circle_text = canvas.display.text({
		x: outer_circle.x - 7,
		y: outer_circle.y - outer_circle.radius - inner_circle.radius/2,
		font: "bold 50px sans-serif",
		text: "-",
		fill: "black"
	});

	var outer_circle_text_2 = canvas.display.text({
		x: outer_circle.x - 7,
		y: outer_circle.y + inner_circle.radius/3,
		font: "bold 50px sans-serif",
		text: "-",
		fill: "black"
	});

	var inner_circle_text = canvas.display.text({
		x: inner_circle.x - 14,
		y: inner_circle.y-inner_circle.radius/1.3,	
		font: "bold 50px sans-serif",
		text: "+",
		fill: "black"
	});
	

	var cell_title = canvas.display.text({
		x: 125,
		y: 10,
		font: "bold 14px sans-serif",
		text: "ON-Centre Cell",
		fill: "black"
	});

	// 5) Bindings
	small_ball.bind("click tap", function() {
		spot_control.radius = 2 * this.radius;
		spot_control.last = spot_control.radius;

		small_ball.fill = "red";
		medium_ball.fill = "#0aa";
		large_ball.fill = "#0aa";

		colliding();
		canvas.redraw();
	}).bind("mouseenter", function() {
		canvas.mouse.cursor("pointer");
	}) .bind("mouseleave", function() {
		canvas.mouse.cursor("default");
	});

	medium_ball.bind("click tap", function() {
		spot_control.radius = 2 * this.radius;
		spot_control.last = spot_control.radius;

		small_ball.fill = "#0aa";
		medium_ball.fill = "red";
		large_ball.fill = "#0aa";

		colliding();
		canvas.redraw();
	}) .bind("mouseenter", function() {
		canvas.mouse.cursor("pointer");
	}) .bind("mouseleave", function() {
		canvas.mouse.cursor("default");
	});

	large_ball.bind("click tap", function() {
		spot_control.radius = 2 * this.radius;
		spot_control.last = spot_control.radius;

		small_ball.fill = "#0aa";
		medium_ball.fill = "#0aa";
		large_ball.fill = "red";

		colliding();
		canvas.redraw();
	}).bind("mouseenter", function() {
		canvas.mouse.cursor("pointer");
	}) .bind("mouseleave", function() {
		canvas.mouse.cursor("default");
	});

	spot_off_button.bind("click tap", function() {
		if (spot_on_off.text == "LIGHT OFF") {
			spot_on_off.text = "LIGHT ON";
			spot_control.radius = 0;
		} else {
			spot_on_off.text = "LIGHT OFF";
			spot_control.radius = spot_control.last;
		}
		canvas.redraw();
	}).bind("mouseenter", function() {
		canvas.mouse.cursor("pointer");
	}) .bind("mouseleave", function() {
		canvas.mouse.cursor("default");
	});

	new_rf_button.bind("click tap", function() {

		var x = Math.random() * (250 - 100) + 50;
		var y = Math.random() * (250 - 100) + 50;

		outer_circle.x = x + outer_circle.radius;
		outer_circle.y = y + outer_circle.radius;
		inner_circle.x = x + outer_circle.radius;
		inner_circle.y = y + outer_circle.radius;

		if (outer_circle.radius == 50) {
			outer_circle.radius = 30
			inner_circle.radius = 16;

			outer_circle_text.font = "bold 30px sans-serif";
			outer_circle_text_2.font = "bold 30px sans-serif";
			inner_circle_text.font = "bold 30px sans-serif";


			outer_circle_text.x = outer_circle.x - 5;
			outer_circle_text.y = outer_circle.y - outer_circle.radius - inner_circle.radius/2;
			outer_circle_text_2.x = outer_circle.x - 5;
			outer_circle_text_2.y = outer_circle.y + inner_circle.radius/3;
			inner_circle_text.x = inner_circle.x - 9;
			inner_circle_text.y = inner_circle.y-inner_circle.radius;

		} else {
			outer_circle.radius = 50;
			inner_circle.radius = 30;

			outer_circle_text.font = "bold 50px sans-serif";
			outer_circle_text_2.font = "bold 50px sans-serif";
			inner_circle_text.font = "bold 50px sans-serif";

			outer_circle_text.x = outer_circle.x - 7;
			outer_circle_text.y = outer_circle.y - outer_circle.radius - inner_circle.radius/2;
			outer_circle_text_2.x = outer_circle.x - 7;
			outer_circle_text_2.y = outer_circle.y + inner_circle.radius/3;
			inner_circle_text.x = inner_circle.x - 14;
			inner_circle_text.y = inner_circle.y-inner_circle.radius/1.3;	

		}
		canvas.redraw();
	}).bind("mouseenter", function() {
		canvas.mouse.cursor("pointer");
	}) .bind("mouseleave", function() {
		canvas.mouse.cursor("default");
	});


	// Add in the different grid sections to the canvas
	canvas.addChild(firing_section);
	canvas.addChild(moving_section);
	canvas.addChild(selection_section);
	
	// Add in all content for fire rate box
	firing_section.addChild(firing_text);	
	firing_section.addChild(firing_rate);
	firing_section.addChild(firing_background);
	
	firing_section.addChild(firing_background_line);

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

	moving_section.addChild(outer_circle_text);
	moving_section.addChild(outer_circle_text_2);
	moving_section.addChild(inner_circle_text);

	moving_section.addChild(spot_control);

	setInterval(function(){ 
		rate = firing_rate.base;
		rate_updated = Math.floor(Math.random() * ((rate+1) - (rate-1) + 1)) + (rate-1);
		firing_rate.text = rate_updated.toString();

		canvas.redraw();
	}, 500);


	function update_lines(speed) {

		if (speed == 1) {
			var firing_lines = [fl];
		} else if (speed == 2) {
			var firing_lines = [fl, fl2];
		} else if (speed == 3) {
			var firing_lines = [fl, fl2, fl3, fl4];
		} else {
			var firing_lines = [fl, fl2, fl3, fl4, fl5, fl6];
		}
		
		for (i = 0; i < firing_lines.length; i++) {
			x = firing_lines[i].start.x + 1;

			if (x > firing_background.x + firing_background.width - 2) {
				x = firing_background.x;
			}

			firing_lines[i].start.x = x;
			firing_lines[i].end.x = x;
		}
	}	
	canvas.setLoop(function() {

		firing_section.removeChild(fl);
		firing_section.removeChild(fl2);
		firing_section.removeChild(fl3);
		firing_section.removeChild(fl4);
		firing_section.removeChild(fl5);
		firing_section.removeChild(fl6);


		//different firing bars show depending on the current firing rate
		if (firing_rate.base <= 3)  {

			firing_section.addChild(fl);
			update_lines(1);

		} else if (firing_rate.base <= 11) {

			firing_section.addChild(fl);
			firing_section.addChild(fl2);
			update_lines(2); 

		} else if (firing_rate.base <= 33) {

			firing_section.addChild(fl);
			firing_section.addChild(fl2);
			firing_section.addChild(fl3);
			firing_section.addChild(fl4);
			update_lines(3); 

		} else {

			firing_section.addChild(fl);
			firing_section.addChild(fl2);
			firing_section.addChild(fl3);
			firing_section.addChild(fl4);
			firing_section.addChild(fl5);
			firing_section.addChild(fl6);
			update_lines(4); 

		}

		
	}).start();

	function calculate_fire_rate_medium(distance, value) {
		distance  -= 3;
		if (distance <= 1) {
			distance = 1;
		} 

		value = parseInt(1/distance * value);
		if (value <= 1) {
			value = 2;
		}

		return value
	}

	function colliding() {
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
					firing_rate.text = "2";
					firing_rate.base = 2;	
				}  else {
					firing_rate.base = calculate_fire_rate_medium(distance-22, 11);
					firing_rate.text = firing_rate.base.toString();
				}
			} else if (spot_control.radius == 30) {
				// behave the same way that the large spot_control always does, because of relative sizes of ball and spot
				if (outer_circle.radius == 30) {
					if ((distance  < spot_control.radius + 0.7*outer_circle.radius) && (distance > spot_control.radius +
							-0.3*outer_circle.radius)) {
						if (!firing_rate.base == 2 || firing_rate.base == 1 || firing_rate.base == 3) {
							firing_rate.text = "2";
							firing_rate.base = 2;
						}
							
					}  else {
						firing_rate.base = calculate_fire_rate_medium(distance, 11);
						firing_rate.text = firing_rate.base.toString();
					}
				} else {	
					// ball level spikes up high when covering middle
					if ((distance  < spot_control.radius + 0.7*outer_circle.radius) && (distance > spot_control.radius +
							-0.3*outer_circle.radius)) {
						firing_rate.text = "2";
						firing_rate.base = 2;	
					} else if (inner_distance + inner_circle.radius < spot_control.radius + inner_circle.radius){
						firing_rate.base = calculate_fire_rate_medium(distance, 85);
						firing_rate.text = firing_rate.base.toString();
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
						firing_rate.base = calculate_fire_rate_medium(distance, 85);
						firing_rate.text = firing_rate.base.toString();
					} else {
						firing_rate.text = "11";
						firing_rate.base = 11;
					}
				} else {
					if ((distance < spot_control.radius + 0.7*outer_circle.radius) && (distance > inner_circle.radius)) {
						firing_rate.text = "1";
						firing_rate.base = 2;	
					}  else if (distance < 1.3*inner_circle.radius) {
						firing_rate.base = calculate_fire_rate_medium(distance-10, 23);
						firing_rate.text = firing_rate.base.toString();
					} else {
						firing_rate.text = "11";
						firing_rate.base = 11;
					}
				}
			}
		}



	spot_control.dragAndDrop({
		move: function() {
			if(spot_control.x < spot_control.radius) {
				spot_control.x = spot_control.radius;
			}
			if (spot_control.y < spot_control.radius) {
				spot_control.y = spot_control.radius;
			}

			if (spot_control.y > moving_section.height - spot_control.radius) {
				spot_control.y = moving_section.height - spot_control.radius;
			}

			if (spot_control.x > moving_section.width - spot_control.radius) {
				spot_control.x = moving_section.width - spot_control.radius;
			}

			colliding(); 
		} 	});


}

