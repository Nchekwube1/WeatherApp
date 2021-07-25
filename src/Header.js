import React, { useState, useRef } from 'react'
import "./scss/header.css"

const Header = () => {
    const sRef = useRef("")
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(sRef.current.value)
        sRef.current.value = ""
    }
    return (

        <div className="head">
            <div className="title">
                <h2>
                    <span>get</span>Weather
                </h2>
            </div>
            <div className="input">
                <form className="inpF" onSubmit={handleSubmit}>
                    <input className="ifield" type="text" ref={sRef} placeholder="search cities" />
                    <button type="submit" className="btn" >search</button>
                </form>
            </div>
            <div className="tags">
                <ul className="tgs">
                    <li>APIs</li>
                    <li>Blog</li>
                    <li>FAQ</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
