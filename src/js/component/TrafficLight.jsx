import React, { useState } from "react";

// Create a functional component for the individual light
function Light(color, selectedColor, setSelectedColor) {
    const isGlowing = selectedColor === color;
    const glow = isGlowing ? ('0 0 10px 5px ' + color) : '';

    return (
        <div 
            style={{ 
                backgroundColor: color, 
                borderRadius: '50%', 
                width: '100px', 
                height: '100px', 
                margin: '10px', 
                cursor: 'pointer',
                boxShadow: glow,
            }} 
            onClick={() => setSelectedColor(color)}
        />
    );
}


// The main component
const Home = () => {
    const [selectedColor, setSelectedColor] = useState('red');

	return (
		<div className="text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            {Light('green', selectedColor, setSelectedColor)}
            {Light('yellow', selectedColor, setSelectedColor)}
            {Light('red', selectedColor, setSelectedColor)}
		</div>
	);
};

export default Home;
