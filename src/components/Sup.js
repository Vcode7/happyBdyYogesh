import React from 'react'
import './sup.css'

export const Sup = () => {


    function handlecancle() {
        let uppermodal = document.querySelector('#uppermodal')
        let modal = document.querySelector('.modal')
        let lowermodal = document.querySelector('#lowermodal')
      console.log('clicked cancle')
        uppermodal.style.left = '-100vw'
        lowermodal.style.right = '-100vw'      
        setTimeout(() => {
            modal.style.display = 'none'            
        }, 500);
    }

    function handlebtnclick(){
        let uppermodal = document.querySelector('#uppermodal')
    let modal = document.querySelector('.modal')
    let lowermodal = document.querySelector('#lowermodal')
    modal.style.display = 'flex'
        setTimeout(() => {            
            uppermodal.style.left = '0vw'
            lowermodal.style.right = '0vw'
        }, 500);
    }
    return(
        <>
        	<div className="modal" >
                <button onClick={handlecancle()} className="cancle">
                    x
                </button>
				<div id="uppermodal" className="modalcase">
					
                </div>

				<div id="lowermodal" className="modalcase">

                </div>

            </div>
            <button onClick={handlebtnclick} className="modalbtn">
                click here
            </button>
        </>
    )
}