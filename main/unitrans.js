function change_page_from_home(bus_line) {
	var url = "all_lines/" + bus_line + "_line.html";
	document.location.href = url;
}

function change_page_else(bus_line) {
	var url = "../all_lines/" + bus_line + "_line.html";
	document.location.href = url;
}

function color_buttons() {
	var buttons = document.querySelectorAll('button');

	for (var i=0; i < buttons.length; i++) {
		switch(buttons[i].firstChild.nodeValue) {
			//MU LINES
			case 'B': buttons[i].style.backgroundColor = "green"; break;
			case 'E': buttons[i].style.backgroundColor = "navy"; break;
			case 'F': buttons[i].style.backgroundColor = "slateblue"; break;
			case 'G': buttons[i].style.backgroundColor = "teal"; break;
			case 'K': buttons[i].style.backgroundColor = "steelblue"; break;
			case 'L': buttons[i].style.backgroundColor = "orange"; break;
			case 'M': buttons[i].style.backgroundColor = "darkred"; break;
			case 'O': buttons[i].style.backgroundColor = "purple"; break;
			case 'P': buttons[i].style.backgroundColor = "darkolivegreen"; break;
			case 'Q': buttons[i].style.backgroundColor = "hotpink"; break;
			case 'X': buttons[i].style.backgroundColor = "darksalmon"; break;
			case 'Z': buttons[i].style.backgroundColor = "saddlebrown"; break;

			//SILO LINES
			case 'A': buttons[i].style.backgroundColor = "coral"; break;
			case 'C': buttons[i].style.backgroundColor = "lightseagreen"; break;
			case 'D': buttons[i].style.backgroundColor = "chocolate"; break;
			case 'J': buttons[i].style.backgroundColor = "orchid"; break;
			case 'L': buttons[i].style.backgroundColor = "seagreen"; break;
			case 'V': buttons[i].style.backgroundColor = "rebeccapurple"; break;
			case 'W': buttons[i].style.backgroundColor = "lightskyblue"; break;

			//HIGH SCHOOL LINE
			case 'T': buttons[i].style.backgroundColor = "slategray"; break;

			default: buttons[i].style.backgroundColor = "#D50742";
		} //end switch

	}

} //end color_buttons
color_buttons();

var is_nav_open = false;

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
		// if (is_nav_open == false){
		// 	is_nav_open = true;
			// document.getElementsByClassName("nav").style.boxShadow = "";
			document.getElementById("nav_dropdown").style.overflow = "visible";
			document.getElementById("nav_dropdown").style.borderTop = "solid 2px white";
			document.getElementById("nav_dropdown").style.height = "300px";
			document.getElementsByTagName("main")[0].style.marginTop = "330px";
		// } else {
		// 	is_nav_open = false;
		// 	closeNav();
		// }


		// alert('clicked routes!');
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
		// document.getElementsByClassName("nav").style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.15)";
		document.getElementById("nav_dropdown").style.overflow = "hidden";
		document.getElementById("nav_dropdown").style.borderTop = "none";
    document.getElementById("nav_dropdown").style.height = "0";
    document.getElementsByTagName("main")[0].style.marginTop = "50px";

		//reset the message in current selection div
		document.getElementById("curr_selection").innerHTML = "";
		var message = document.createElement("p");
		message.innerHTML = "<p style='font-size: 50px; font-weight: 400;'>Please select a line.</p>"
		document.getElementById("curr_selection").appendChild(message);
}


function update_dropdown(bus_line, stops){
			document.getElementById("curr_selection").innerHTML = ""; //clear it

			var letter = document.createElement("div");
			letter.innerHTML = "<h1>" + bus_line + " Line</h1><h2>" + stops + "</h2>"

			document.getElementById("curr_selection").appendChild(letter);
}
