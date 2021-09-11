import React from 'react'
import './sup.css'
import y12 from './y12.jpg'

export const Sup = () => {

  return (
    <>
      <button type="button" className="modalbtn btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Click Here
</button>

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="mod-body">
                <img src={y12} alt="" id="img2" />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}