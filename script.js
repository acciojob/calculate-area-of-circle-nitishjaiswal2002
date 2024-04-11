 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = parseFloat(prompt("Enter the radius of the circle:"));
            // write you code here and display the result to the user
           const area=Math.PI*radius*radius;

	 const roundedArea=area.toFixed(2);
	 console.log(`The area of the circle with &{radius} is &{roundedArea}`);
}
calculateArea();
