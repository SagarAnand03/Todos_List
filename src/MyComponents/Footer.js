import React from 'react';

export const Footer = () => {
  let footerStyle ={
    position:"relative",
    top:"10vh",
    width:"100%",
    backgroundColor:"#393E46"
  }

  return (
    <footer className ="text-light py-3" style={footerStyle}>
      <p className ="text-center">            
      Copyright &copy; MyTodosList.com
      </p>
    </footer>
  )
}
