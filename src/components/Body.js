import React from 'react'
import './body.css'

export const Body = () => {
    let countnum = 0;
    function handleClick(n) {
        let img = document.getElementById('img')

        if (countnum === 0) {
            img.style.background = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTmanSbET-EUzNznvi_lfXiZPXgw08xy2Nzw&usqp=CAU')"
            countnum = countnum + n
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
                    <button onClick={() => handleClick(-1)} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                        </svg>
                    </button>
                    <button onClick={() => handleClick(1)} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                        </svg>
                    </button>

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