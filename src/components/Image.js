import React from 'react'

const Image = ({ src }) => {
    return (
        <div>
            <div
                className="Image"
                style={{ backgroundImage: 'url(' + src + ')' }}></div>
        </div>
    )
}

export default Image
