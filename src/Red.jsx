import React from 'react'

const Red = () => {
    const changeColor = (color) => {
        document.body.style.backgroundColor = color;
    };

    const buttonStyle = {
        padding: '10px 20px',
        margin: '10px',
        fontSize: '16px',
        cursor: 'pointer',
    };

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
    <h1>Click a button to change the background color</h1>
    <div>
        <button onClick={() => changeColor('red')} style={buttonStyle}>Red</button>
        <button onClick={() => changeColor('yellow')} style={buttonStyle}>Yellow</button>
        <button onClick={() => changeColor('green')} style={buttonStyle}>Green</button>
        <button onClick={() => changeColor('blue')} style={buttonStyle}>Blue</button>
    </div>
</div>
  )
 
}

export default Red