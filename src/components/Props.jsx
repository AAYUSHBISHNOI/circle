import React from 'react'

const Props = ({heading ,mainheading,  title, para , customheading , customtitle, custommainheading, custompara }) => {
  return (
    <div>
        <h1 className={` ${customheading}`}>{heading}</h1>
        <h1 className={`${custommainheading}`}>{mainheading}</h1>
        <h1 className={`${customtitle}`}>{title}</h1>
        <p className={`${custompara}`}>{para}</p>
    </div>
  )
}

export default Props