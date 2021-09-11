import React from 'react'
import './head.css'
import bck from './bck.mp4'

export const Head = () => {
    return (
        <>
            <div className="head">
                <div className="heading">
                    <div className="text" id="text1">
                        <span>H</span>
                        <span>a</span>
                        <span>p</span>
                        <span>p</span>
                        <span>y</span></div>
                    <div className="text" id="text2">
                        <span>B</span>
                        <span>i</span>
                        <span>r</span>
                        <span>t</span>
                        <span>h</span>
                        <span>D</span>
                        <span>a</span>
                        <span>y</span>
                        </div>
                    <div className="text" id="text3">
                        <span>A</span>
                        <span>c</span>
                        <span>c</span>
                        <span>h</span>
                        <span>u</span>
                    </div>
                </div>
                <div className="bck-video">
					<video 
                    	autoPlay
                        loop
                        muted
                    >
                        <sorce src={bck} type="video/mp4"/>
                    </video>
                </div>
            </div>

        </>
    )
}