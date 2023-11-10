import React from 'react'

const UseForm = () => {
  return (
    <div>
        <div className="form-control">
          <label htmlFor="name" >Name:</label>
            <input 
            type="text" 
            name="name"
            id="name"
            placeholder="Digite seu nome completo"
            required
            />
        </div>
        <div className="form-control">
          <label htmlFor="email" >E-mail:</label>
            <input 
            type="email" 
            name="email"
            id="email"
            placeholder="Digite seu e-mail"
            required
            />
        </div>
    </div>
  );
};

export default UseForm