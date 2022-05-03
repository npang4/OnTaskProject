import React from 'react'

// this is for the side navigation bar
const Sidebar = (props) => {

    const style = {
        width:"10vw",
        height:"100vh",
        position:"absolute",
        backgroundColor: 'grey'
    }

    const onClick = (e) => {
        console.log(e.target.innerText)
        props.onClick(e.target.innerText)
    }
  return (
    <div style={style}>

        {/* // this is where calender is? */}
        <div style={{paddingTop:'10em'}}>
            CALENDER
        </div>

        <div style={{paddingTop:'10em'}}>
            <div style={{color:"pink"}}>
                Todo Lists:
            </div>
            {console.log(props.title)}
            {props.title.map((title) => <div onClick={
                onClick}>
                    {title.title}
                    </div>)}
        </div>
    </div>
  )
}

export default Sidebar