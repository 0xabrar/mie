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
		x: 175,
		y: 30,
		width: 5,
		height: 25,
		fill: "black"
	});

	var thick_bar_select = canvas.display.rectangle({
		x: 200,
		y: 30,
		width: 10,
		height: 25,
		fill: "black"
	});

	var new_rf = canvas.display.rectangle({
		x: 6.5/10 * selection_section.width,
		y: 60,
		width: 60,
		height: 20,
		fill: "black"
	});

	var orientation_negative_90 = canvas.display.rectangle({
		x: 40,
		y: 70,
		width: 5,
		height: 25,
		fill: "black",
		rotation: 90
	});

	var orientation_negative_45 = canvas.display.rectangle({
		x: 55,
		y: 55,
		width: 5,
		height: 25,
		fill: "black",
		rotation: 135
	});

	var orientation_zero = canvas.display.rectangle({
		x: 75,
		y: 55,
		width: 5,
		height: 25,
		fill: "black",
		rotation: 180
	});

	var orientation_45 = canvas.display.rectangle({
		x: 95,
		y: 60,
		width: 5,
		height: 25,
		fill: "black",
		rotation: 225
	});

	var orientation_90 = canvas.display.rectangle({
		x: 105,
		y: 75,
		width: 5,
		height: 25,
		fill: "black",
		rotation: 270
	});

	var new_rf_text = canvas.display.text({
		x: 5, 
		y: 5,
		font: "bold 12px sans-serif",
		text: "NEW RF",
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

	var bar_control = canvas.display.rectangle( {
		x: 100,
		y: 175,
		width: 25,
		height: 150,
		fill: "black",
		rotation: 180
	});

	// 5) Bindings
 	thin_bar_select.bind("click tap", function() {
		bar_control.width = 2.5 * this.width;
		firing_rate.text = "10";
		firing_rate.base = 10;
		canvas.redraw();
	});

	thick_bar_select.bind("click tap", function() {
		bar_control.width = 2.5 * this.width;
		firing_rate.text = "10";
		firing_rate.base = 10;
		canvas.redraw();
	});	

	// Orientation bindings
	orientation_negative_90.bind("click tap", function() {
		bar_control.rotateTo(90);
		canvas.redraw();
	});
	orientation_negative_45.bind("click tap", function() {
		bar_control.rotateTo(135);
		canvas.redraw();
	});
	orientation_zero.bind("click tap", function() {
		bar_control.rotateTo(180);
		canvas.redraw();
	});
	orientation_45.bind("click tap", function() {
		bar_control.rotateTo(225);
		canvas.redraw();
	});
	orientation_90.bind("click tap", function() {
		bar_control.rotateTo(270);
		canvas.redraw();
	});

	new_rf.bind("click tap", function() {

		var x = Math.random() * (300);
		var y = Math.random() * (200 - 50);

		inner_rf.x = x;
		inner_rf.y = y;
		outer_rf.y = y;

		if (inner_rf.width == 25) {
			inner_rf.width = inner_rf.width / 2;
			
		} else {
			inner_rf.width = inner_rf.width * 2;
		}	
		outer_rf.width = inner_rf.width * 3;
		outer_rf.x = inner_rf.x - inner_rf.width;
		canvas.redraw();
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
	moving_section.addChild(bar_control);

	function between(x, y,  min_x, max_x, min_y, max_y) {
		min_x += 10;
		max_x += 10;
		min_y += 110;
		max_y += 110;

		return (x >= min_x && x <= max_x) && (y >= min_y && y <= max_y);
	}

	bar_control.dragAndDrop({
		move: function() {

			var x = bar_control.x;
			var y = bar_control.y;
			var rotation = bar_control.rotation;

			// different movement depending on whether it's a large rf or small rf
			if (inner_rf.width == 25) {

				if (bar_control.width == 25) {

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
	});

}