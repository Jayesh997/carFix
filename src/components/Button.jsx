import React from 'react'

const Button = ({children, className}) => {
  return (
    <a href="#" class={`w-fit rounded-md bg-primary-red px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary-blue hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 border border-transparent transition-colors duration-300 ${className}`}>{children}</a>
  )
}

export default Button