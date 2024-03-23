import React from 'react'

const Section = ({ children, className, id }) => {
    return (
        <div id={id || ""}
            className={`${className || ""} w-full relative px-4 sm:px-12 md:px-16 lg:px-24 `}
        >
            {children}
        </div>
    )
}

export default Section