import React from 'react'

const Section = ({ children, className, id }) => {
    return (
        <div id={id || ""}
            className={`${className || ""} w-full relative px-4 md:px-12 lg:px-16 xl:px-24 `}
        >
            {children}
        </div>
    )
}

export default Section