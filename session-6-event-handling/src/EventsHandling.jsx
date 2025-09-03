import React from 'react'

function EventsHandling() {
    const msg = () => {
        alert("Button Clicked")
    }
    const msg2 = () => {
        alert("Double Clicked")
    }
    const msg3 = () => {
        alert("Mouse Hover")
    }
    const msg4 = () => {
        alert("Mouse Leave")
    }
  return (
    <div>EventsHandling

        <p>---------Mouse Events---------</p>
        <button onClick={msg}>On Click</button><br />
        <button onDoubleClick={msg2}>On D.Click</button><br />
        <div onMouseOver={msg3}>On Mouse Over</div> <br />
        <button onMouseLeave={msg4}>Mouse Leave</button><br /><br /><br />

        <p>---------Keyboard Events---------</p>
        <input type="text" onKeyDown={() => { alert("Key Down") }} placeholder='On Key Down' /><br /><br />
        <input type="text" onKeyPress={() => { alert("Key Press") }} placeholder='On Key Press' /><br /><br />
        <input type="text" onKeyUp={() => { alert("Key Up") }} placeholder='On Key Up' /><br /><br />
    </div>

  )
}

export default EventsHandling