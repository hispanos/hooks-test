import React from 'react'

const Image = (props) => {
    return (
        <div className="card col-6 mb-2">
            <img src={props.image} className="card-img-top" alt="..." />
        </div>
    )
}

export default Image;