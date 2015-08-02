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
		width: 380,
		height: 350,
		fill: "white"
	});

	var selection_section = canvas.display.rectangle({
		x: 120, 
		y: 10,
		width: 270,
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

	// Selection section
	var bar_text = canvas.display.text({
		x: 6.5/10 * selection_section.width,
		y: 10,
		font: "bold 14px sans-serif",
		text: "Bar Width",
		fill: "black"
	});

	var bar_orientation_text = canvas.display.text({
		x: 1/10 * selection_section.width,
		y: 10,
		font: "bold 14px sans-serif",
		text: "Bar Orientation",
		fill: "black"
	});

	var thin_bar_select = canvas.display.rectangle({
		x: 195,
		y: 30,
		width: 5,
		height: 25,
		fill: "black"
	});

	var thick_bar_select = canvas.display.rectangle({
		x: 220,
		y: 30,
		width: 10,
		height: 25,
		fill: "black"
	});

	var new_rf = canvas.display.rectangle({
		x: 6/10 * selection_section.width,
		y: 60,
		width: 100,
		height: 20,
		fill: "black"
	});

	var orientation_negative_90 = canvas.display.rectangle({
		x: 40,
		y: 70,
		width: 5,
		height: 25,
		fill: "#0aa",
		rotation: 90
	});


	var orientation_negative_45 = canvas.display.rectangle({
		x: 55,
		y: 55,
		width: 5,
		height: 25,
		fill: "#0aa",
		rotation: 135
	});

	var orientation_zero = canvas.display.rectangle({
		x: 75,
		y: 55,
		width: 5,
		height: 25,
		fill: "red",
		rotation: 180
	});

	var orientation_45 = canvas.display.rectangle({
		x: 95,
		y: 60,
		width: 5,
		height: 25,
		fill: "#0aa",
		rotation: 225
	});

	var orientation_90 = canvas.display.rectangle({
		x: 105,
		y: 75,
		width: 5,
		height: 25,
		fill: "#0aa",
		rotation: 270
	});

	var new_rf_text = canvas.display.text({
		x: 7, 
		y: 5,
		font: "bold 12px sans-serif",
		text: "Receptive Field",
		fill: "white"
	});

	// 4) Moving section
	var cell_title = canvas.display.text({
		x: 20,
		y: 10,
		font: "bold 14px sans-serif",
		text: "Simple Cell                 " + 
			"               NOT End-Stopped",
		fill: "black"
	});

	var inner_rf = canvas.display.rectangle( {
		x: 75,
		y: 50,
		width: 25,
		height: 150,
		fill: "green"
	});

	var outer_rf = canvas.display.rectangle( {
		width: inner_rf.width * 3,
		x: inner_rf.x - inner_rf.width,
		y: 50,
		height: 150,
		fill: "red"
	});

	var inner_rf_text = canvas.display.text({
		x: inner_rf.x,
		y: inner_rf.y + inner_rf.height/2.7,
		font: "bold 40px sans-serif",
		text: "+",
		fill: "black"
	});

	var outer_rf_text = canvas.display.text({
		x: outer_rf.x + inner_rf.width / 5,
		y: outer_rf.y + outer_rf.height/3,
		font: "bold 43px sans-serif",
		text: "-",
		fill: "black"
	});

	var outer_rf_text_2 = canvas.display.text({
		x: outer_rf.x+ outer_rf.width / 1.4,
		y: outer_rf.y + outer_rf.height/3,
		font: "bold 43px sans-serif",
		text: "-",
		fill: "black"
	});


	var bar_control = canvas.display.rectangle( {
		x: 175,
		y: 290,
		width: 25,
		height: 150,
		fill: "#0aa",
		rotation: 180
	}).bind("mouseenter", function() {
		canvas.mouse.cursor("pointer");
	}) .bind("mouseleave", function() {
		canvas.mouse.cursor("default");
	});


	// 5) Bindings
 	thin_bar_select.bind("click tap", function() {
		bar_control.width = 2.5 * this.width;
		firing_rate.text = "10";
		firing_rate.base = 10;

		bound_bar_control();
		colliding();
		canvas.redraw();
	}).bind("mouseenter", function() {
		canvas.mouse.cursor("pointer");
	}) .bind("mouseleave", function() {
		canvas.mouse.cursor("default");
	});

	thick_bar_select.bind("click tap", function() {
		bar_control.width = 2.5 * this.width;
		firing_rate.text = "10";
		firing_rate.base = 10;

		bound_bar_control();
		colliding();
		canvas.redraw();
	}).bind("mouseenter", function() {
		canvas.mouse.cursor("pointer");
	}) .bind("mouseleave", function() {
		canvas.mouse.cursor("default");
	});	

	// Orientation bindings
	orientation_negative_90.bind("click tap", function() {
		bar_control.rotateTo(90);

		orientation_negative_90.fill = "red";
		orientation_negative_45.fill = "#0aa";
		orientation_zero.fill = "#0aa";
		orientation_45.fill = "#0aa";
		orientation_90.fill = "#0aa";

		bound_bar_control();
		colliding();
		canvas.redraw();
	}).bind("mouseenter", function() {
		canvas.mouse.cursor("pointer");
	}) .bind("mouseleave", function() {
		canvas.mouse.cursor("default");
	});

	orientation_negative_45.bind("click tap", function() {
		bar_control.rotateTo(135);

		orientation_negative_90.fill = "#0aa";
		orientation_negative_45.fill = "red";
		orientation_zero.fill = "#0aa";
		orientation_45.fill = "#0aa";
		orientation_90.fill = "#0aa";

		bound_bar_control();
		colliding();
		canvas.redraw();
	}).bind("mouseenter", function() {
		canvas.mouse.cursor("pointer");
	}) .bind("mouseleave", function() {
		canvas.mouse.cursor("default");
	});

	orientation_zero.bind("click tap", function() {
		bar_control.rotateTo(180);

		orientation_negative_90.fill = "#0aa";
		orientation_negative_45.fill = "#0aa";
		orientation_zero.fill = "red";
		orientation_45.fill = "#0aa";
		orientation_90.fill = "#0aa";

		bound_bar_control();
		colliding();
		canvas.redraw();
	}).bind("mouseenter", function() {
		canvas.mouse.cursor("pointer");
	}) .bind("mouseleave", function() {
		canvas.mouse.cursor("default");
	});

	orientation_45.bind("click tap", function() {
		bar_control.rotateTo(225);

		orientation_negative_90.fill = "#0aa";
		orientation_negative_45.fill = "#0aa";
		orientation_zero.fill = "#0aa";
		orientation_45.fill = "red";
		orientation_90.fill = "#0aa";

		bound_bar_control();
		colliding();
		canvas.redraw();
	}).bind("mouseenter", function() {
		canvas.mouse.cursor("pointer");
	}) .bind("mouseleave", function() {
		canvas.mouse.cursor("default");
	});

	orientation_90.bind("click tap", function() {
		bar_control.rotateTo(270);

		orientation_negative_90.fill = "#0aa";
		orientation_negative_45.fill = "#0aa";
		orientation_zero.fill = "#0aa";
		orientation_45.fill = "#0aa";
		orientation_90.fill = "red";

		bound_bar_control();
		colliding();
		canvas.redraw();
	}).bind("mouseenter", function() {
		canvas.mouse.cursor("pointer");
	}) .bind("mouseleave", function() {
		canvas.mouse.cursor("default");
	});


	new_rf.bind("click tap", function() {

		var x = Math.random() * 250 + 50;
		var y = Math.random() * (200 - 50) + 50;

		inner_rf.x = x;
		inner_rf.y = y;
		outer_rf.y = y;

		// when new rf used, swap between the two receptive field sizes
		if (inner_rf.width == 25) {
			inner_rf.width = inner_rf.width / 2;
			outer_rf.width = inner_rf.width * 3;
			outer_rf.x = inner_rf.x - inner_rf.width;

			// re-arrange the labels on the receptive field
			outer_rf_text.font = "bold 25px sans-serif";
			outer_rf_text_2.font = "bold 25px sans-serif";
			inner_rf_text.font = "bold 20px sans-serif";

			inner_rf_text.x = inner_rf.x;
			inner_rf_text.y = inner_rf.y + inner_rf.height/2.7 + 5;
			outer_rf_text.x = outer_rf.x + inner_rf.width / 5;
			outer_rf_text.y =  outer_rf.y + outer_rf.height/3 + 5;
			outer_rf_text_2.x = outer_rf.x+ outer_rf.width / 1.4;
			outer_rf_text_2.y = outer_rf.y + outer_rf.height/3 + 5;
			
		} else {
			inner_rf.width = inner_rf.width * 2;
			outer_rf.width = inner_rf.width * 3;
			outer_rf.x = inner_rf.x - inner_rf.width;

			// re-arrange the labels on the receptive field
			outer_rf_text.font = "bold 43px sans-serif";
			outer_rf_text_2.font = "bold 43px sans-serif";
			inner_rf_text.font = "bold 40px sans-serif";

			inner_rf_text.x = inner_rf.x;
			inner_rf_text.y = inner_rf.y + inner_rf.height/2.7;
			outer_rf_text.x = outer_rf.x + inner_rf.width / 5;
			outer_rf_text.y =  outer_rf.y + outer_rf.height/3;
			outer_rf_text_2.x = outer_rf.x+ outer_rf.width / 1.4;
			outer_rf_text_2.y = outer_rf.y + outer_rf.height/3;

		}	
		

		colliding();
		canvas.redraw();
	}).bind("mouseenter", function() {
		canvas.mouse.cursor("pointer");
	}) .bind("mouseleave", function() {
		canvas.mouse.cursor("default");
	});

	setInterval(function(){ 
		rate = firing_rate.base;
		rate_updated = Math.floor(Math.random() * ((rate+1) - (rate-1) + 1)) + (rate-1);
		firing_rate.text = rate_updated.toString();
		canvas.redraw();
	}, 1000);

	canvas.addChild(firing_section);
	canvas.addChild(selection_section);
	canvas.addChild(moving_section);

	firing_section.addChild(firing_text);
	firing_section.addChild(firing_rate);

	firing_section.addChild(firing_background);
	firing_section.addChild(firing_background_line);

	selection_section.addChild(bar_orientation_text);
	selection_section.addChild(bar_text);
	selection_section.addChild(thin_bar_select);
	selection_section.addChild(thick_bar_select);

	selection_section.addChild(orientation_negative_90);
	selection_section.addChild(orientation_negative_45);
	selection_section.addChild(orientation_zero);
	selection_section.addChild(orientation_45);
	selection_section.addChild(orientation_90);


	selection_section.addChild(new_rf);
	new_rf.addChild(new_rf_text);

	moving_section.addChild(cell_title);
	moving_section.addChild(outer_rf);
	moving_section.addChild(inner_rf);

	moving_section.addChild(inner_rf_text);
	moving_section.addChild(outer_rf_text);
	moving_section.addChild(outer_rf_text_2);

	moving_section.addChild(bar_control);

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

		} else if (firing_rate.base <= 60) {

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

	function between(x, y,  min_x, max_x, min_y, max_y) {

		// adjust for the offset of the moving section
		min_x += 10;
		max_x += 10;
		min_y += 110;
		max_y += 110;

		return (x >= min_x && x <= max_x) && (y >= min_y && y <= max_y);
	}

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

	// manages all of the different cases for which the fire rate will change based on the bar_control position
	function colliding()  {

			var x = bar_control.x;
			var y = bar_control.y;
			var rotation = bar_control.rotation;

			// hack-fix for situations when orientation changed with moving part
			if (rotation != 180) {
				firing_rate.base = 11;
				firing_rate.text = firing_rate.base.toString();
				return;
			}


			// different movement depending on whether it's a large rf or small rf
			if (inner_rf.width == 25) {

				if (bar_control.width == 25) {

					// most interaction is straight bar
					if (rotation == 180) {
						// large bar at middle or top of green bar
						if (between(x, y, inner_rf.x, inner_rf.x+inner_rf.width, inner_rf.y, inner_rf.y+inner_rf.height)) {
							
							if(y > inner_rf.y+200) {
								distance = bar_control.y - inner_rf.y - 200;
								firing_rate.base = calculate_fire_rate_medium(distance-10, 55);
								firing_rate.text = firing_rate.base.toString();
							} else {
								// bar top top
								firing_rate.text = "90";
								firing_rate.base = 90;
							}
						} else if (between(x, y, inner_rf.x-inner_rf.width, inner_rf.x+2*inner_rf.width, inner_rf.y, inner_rf.y+1.2*inner_rf.height)) {
							firing_rate.text = "2";
							firing_rate.base = 2;
						} else {
							firing_rate.text = "10";
							firing_rate.base = 10;
						}
					} else if (rotation == 135 || rotation == 235) {

					}
					
				} else {
					if (rotation == 180) {
						if (between(x, y, inner_rf.x, inner_rf.x+inner_rf.width, inner_rf.y, inner_rf.y+inner_rf.height)) {
							if(y > inner_rf.y+200) {
								firing_rate.text = "22";
								firing_rate.base = 22;
							} else {
								firing_rate.text = "55";
								firing_rate.base = 55;
							}
						} else if (between(x, y, inner_rf.x-inner_rf.width, inner_rf.x+2*inner_rf.width, inner_rf.y, inner_rf.y+1.2*inner_rf.height)) {
							firing_rate.text = "2";
							firing_rate.base = 2;
						}  else {
							firing_rate.text = "10";
							firing_rate.base = 10;
						}
					} 
				}

			//smaller width rf
			} else {

				if (bar_control.width == 12.5) {
					// most interaction is straight bar
					if (rotation == 180) {
						if (between(x, y, inner_rf.x, inner_rf.x+inner_rf.width, inner_rf.y, inner_rf.y+inner_rf.height)) {
							if(y > inner_rf.y+200) {
								firing_rate.text = "55";
								firing_rate.base = 55;
							} else {
								firing_rate.text = "90";
								firing_rate.base = 90;
							}
						} else if (between(x, y, inner_rf.x-inner_rf.width, inner_rf.x+2*inner_rf.width, inner_rf.y, inner_rf.y+1.2*inner_rf.height)) {
							firing_rate.text = "2";
							firing_rate.base = 2;
						} else {
							firing_rate.text = "10";
							firing_rate.base = 10;
						}
					} else if (rotation == 135 || rotation == 235) {

					}
				} else {
					if (rotation == 180) {
						if (between(x, y, inner_rf.x, inner_rf.x+inner_rf.width, inner_rf.y, inner_rf.y+inner_rf.height)) {
							if(y > inner_rf.y+200) {
								firing_rate.text = "22";
								firing_rate.base = 22;
							} else {
								firing_rate.text = "55";
								firing_rate.base = 55;
							}
						} else if (between(x, y, inner_rf.x-inner_rf.width, inner_rf.x+2*inner_rf.width, inner_rf.y, inner_rf.y+1.2*inner_rf.height)) {
							firing_rate.text = "2";
							firing_rate.base = 2;
						}  else {
							firing_rate.text = "10";
							firing_rate.base = 10;
						}
					} 
				}
			}

		}


	/*
	Stop the bar_control from moving outside of the bounding box. Bounds ar calculated
	depending on which orientation is chosen.  
	*/
	function bound_bar_control() {

		rotation = bar_control.rotation;

		if (rotation == 180) {

			if(bar_control.x < bar_control.width) {
				bar_control.x = bar_control.width;
			}
			if (bar_control.y < bar_control.height) {
				bar_control.y = bar_control.height;
			}

			if (bar_control.y > moving_section.height) {
				bar_control.y = moving_section.height;
			}

			if (bar_control.x > moving_section.width) {
				bar_control.x = moving_section.width;
			}

		} else if (rotation == 90) {

			if(bar_control.x < bar_control.height) {
				bar_control.x = bar_control.height;
			}
			if (bar_control.y < 0) {
					bar_control.y = 0;
			}
			if (bar_control.y > moving_section.height - bar_control.width) {
					bar_control.y = moving_section.height - bar_control.width;
			}

			if (bar_control.x > moving_section.width) {
					bar_control.x = moving_section.width;
			}

		} else if (rotation == 270) {

			if(bar_control.x < 0) {
				bar_control.x = 0;
			}
			if (bar_control.y < bar_control.width) {
					bar_control.y = bar_control.width;
			}
			if (bar_control.y > moving_section.height) {
					bar_control.y = moving_section.height;
			}

			if (bar_control.x > moving_section.width - bar_control.height) {
					bar_control.x = moving_section.width - bar_control.height;
			}

		} 
		
	}



	bar_control.dragAndDrop({
		move: function() {
			bound_bar_control();
			colliding();
		}
	});

}