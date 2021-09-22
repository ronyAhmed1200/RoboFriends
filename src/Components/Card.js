import React from "react";

// older way of destructuring props
// const Card = (props) =>{
//     return(
//         <div className='bg-light-green br3 dib ma3 pa3 grow bw2 shadow-5'>
//         <img src={`https://robohash.org/${props.id}?200x200`} alt="Robots" />
//         <div>
//             <h1>{props.name}</h1>
//             <p>{props.email}</p>
//         </div>
//         </div>
//     )
// }

// Newer and modern way of destructuring props
const Card = ({ id, name, email }) => {
  return (
    <div className="bg-light-green br3 dib ma2 pa3 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="Robot" />
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
