import React from 'react'
import "./scss/body.css"
// import def from "./images/cloudy.svg"

function Body({ body }) {
    console.log(body)
    function getMinutes() {
        let min = new Date().getMinutes()
        if (min < 10) {
            return `0${min}`
        }
        else return min
    }
    function year() {
        let year = new Date().getFullYear()
        return year
    }
    let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"]
    let monthlist = ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."]
    return (
        <>
            <div className="body">
                <div className="wider">
                    <div className="content">
                        <div className="deg"><h1>{`${(body.main.temp - 273.15).toFixed(0)}°`}</h1></div>
                        <div className="loc">
                            <div className="cou"><h2>{body.name}</h2></div>
                            <div className="date">
                                <span><h1>{`${new Date().getHours()}:`}</h1></span>
                                <span><h1>{getMinutes()} - </h1></span>
                                <span><h1> &nbsp;{daylist[new Date().getDay()]},</h1></span>
                                <span><h1> &nbsp;{` ${new Date().getDate()}`}</h1></span>
                                <span><h1> &nbsp;{monthlist[new Date().getMonth()]}</h1></span>
                                <span><h1>&nbsp;{year()} </h1></span>

                            </div>
                        </div>
                        <div className="desc">
                            <h1>{body.weather[0].description}</h1>
                        </div>
                    </div>
                </div>
                <div className="lesser">

                    <div className="details">
                        <div className="det"><h1>Weather details</h1></div>
                        <div><h1>feels like:</h1> <h1>{`${body.main.feels_like} °`}</h1></div>
                        <div><h1>wind speed:</h1> <h1>{`${body.wind.speed} kt`}</h1></div>
                        <div><h1>humidity:</h1> <h1>{`${body.main.humidity}`}</h1></div>
                        <div><h1>longitude:</h1> <h1>{`${body.coord.lon}°`}</h1></div>
                        <div><h1>latitude:</h1> <h1>{`${body.coord.lat}°`}</h1></div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Body
