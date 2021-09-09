import React from 'react'
import './body.css'

export const Body = () => {
    let countnum = 0;
    function handleClick() {
        let img = document.getElementById('img')

        if (countnum === 0) {
            img.style.background = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTmanSbET-EUzNznvi_lfXiZPXgw08xy2Nzw&usqp=CAU')"
            countnum++
        }
        else {
            img.style.background = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUvnqOYCYZoG1Xu7QGH6Ue3uH5TnqjQDxDHw&usqp=CAU')no-repeat center center/cover";
            countnum = 0;
        }
    }
    return (
        <>
            <div className="section">
                <div className="wish1">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ullam eveniet dignissimos vel. Consequuntur nobis quo natus cupiditate minus autem repellendus doloremque? Rem, dicta tempora. Consectetur dignissimos dolore inventore nulla vel ab at porro cum exercitationem nesciunt molestias unde aut aliquam eum beatae aliquid magnam et iusto hic modi voluptatem, veniam corporis earum! Quibusdam perspiciatis maxime soluta? Rerum dolor dicta nemo ratione, soluta quae quam impedit est itaque in consectetur tempore assumenda ipsam quidem. Numquam, quos? Excepturi nihil laborum necessitatibus blanditiis magnam consectetur enim temporibus officia corporis, numquam dolorem dignissimos iure natus velit accusamus unde? Quod quos commodi dolore!
                    </p>
                </div>
            </div>

            <div className="gallery">
                <div className="img" id="img">
                    <button onClick={() => handleClick()} >next</button>
                </div>
            </div>
			<div className="section-2">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ullam eveniet dignissimos vel. Consequuntur nobis quo natus cupiditate minus autem repellendus doloremque? Rem, dicta tempora. Consectetur dignissimos dolore inventore nulla vel ab at porro cum exercitationem nesciunt molestias unde aut aliquam eum beatae aliquid magnam et iusto hic modi voluptatem, veniam corporis earum! Quibusdam perspiciatis maxime soluta? Rerum dolor dicta nemo ratione, soluta quae quam impedit est itaque in consectetur tempore assumenda ipsam quidem. Numquam, quos? Excepturi nihil laborum necessitatibus blanditiis magnam consectetur enim temporibus officia corporis, numquam dolorem dignissimos iure natus velit accusamus unde? Quod quos commodi dolore!

                </p>
            </div>
        </>
    )
}