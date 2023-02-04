import React from 'react'
import cross from '../assets/cross.svg'
import zero from '../assets/zero.svg'
function Zero({ icon, size }) {
  if (icon === "zero") {
    return <img src={zero} alt="zero" width={size} />
  } else if (icon === "cross") {
    return <img src={cross} alt="cross" width={size} />
  } else {
    return null;
  }
}

export default Zero