import React from 'react';
import DeleteData from './component/DeleteData'
import './css/DeleteTask.css'

function Delete() {
  return (
    <div className='Delete'>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/superhero/bootstrap.min.css" integrity="sha384-HnTY+mLT0stQlOwD3wcAzSVAZbrBp141qwfR4WfTqVQKSgmcgzk+oP0ieIyrxiFO" crossorigin="anonymous"></link>
        <DeleteData/>
    </div>
  );
}

export default Delete