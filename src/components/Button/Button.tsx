import {  } from 'react'
import { Link } from 'react-router-dom'
import "./Button.scss"

interface buttonProps {
    children: React.ReactNode,
    link: string,
    size: string
}

function Button({children, link, size} : buttonProps) {

    const btnClass = size
  return (
    <Link id='link-btn' className={'button-' + btnClass} to={link}>
        {children}
    </Link>
  )
}

export default Button