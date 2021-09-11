import React from 'react'
import y1 from './y1.jpg'
import './end.css'
import img2 from './b_day_fbr31.png'

export const End = () => {
    return (
        <>
            <div className="card2">
                <img src={y1} alt="" />
                <p className="card2-para">
                    I feel so lucky to have you as my friend. Hope your birthday is as special as you are.May all of your dreams come true. Thanks for being such a great friend. Happy birthday!
            </p>

            </div>
            <div className="sec-3">
                <p className="sec-para">
                    Count your age by friends, not years. Count your life by smiles, not tears.

                </p>
            </div>

            <img src={img2} alt="" id="img2" />

            <div className="footer">
                HAPPY BIRTHDAY 🎉🎉
            </div>

        </>
    )
}