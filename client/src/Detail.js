import React from 'react';
import TaskDetail from './component/TaskDetail'
import './css/TaskDetail.css'


function Detail() {
  return (
    <div className='Detail'>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/superhero/bootstrap.min.css" integrity="sha384-HnTY+mLT0stQlOwD3wcAzSVAZbrBp141qwfR4WfTqVQKSgmcgzk+oP0ieIyrxiFO" crossorigin="anonymous"></link>
        <TaskDetail/>
    </div>
  );
}

export default Detail