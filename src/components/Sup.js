import React from 'react'
import './sup.css'

export const Sup = () => {    

    function handlebtnclick(n) {
        const uppermodal = document.querySelector('#uppermodal')
        const modal = document.querySelector('.modal')
        const lowermodal = document.querySelector('#lowermodal')
        if(n === 0){
            modal.style.display = 'flex'
            setTimeout(() => {
                uppermodal.style.left = '0vw'
                lowermodal.style.right = '0vw'
            }, 500);
        }
        else{
            uppermodal.style.left = '100vw'
            lowermodal.style.right = '100vw'
            setTimeout(() => {
                modal.style.display = 'none'
            }, 500);
        }
    }
    return (
        <>
            <div className="modal" >
                <button onClick={handlebtnclick(1)} className="cancle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </button>
                <div id="uppermodal" className="uppermodal modalcase">
					
                </div>

                <div id="lowermodal" className="modalcase">
					
                </div>

            </div>
            <button onClick={handlebtnclick(0)} className="modalbtn">
                click here
            </button>
        </>
    )
}