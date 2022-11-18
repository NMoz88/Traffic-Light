import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectedColor, setselectedColor] = useState ("red");
	return (
		<div className="traffic-light ">
			<div className="light red glow"></div>
			<div className="light yellow"></div>
			<div className="light green"></div>
		</div>
	);
};

export default Home;
