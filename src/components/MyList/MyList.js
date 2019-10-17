import React, { useState } from 'react';
import './MyList.css';

const MyList = () => {
  const [activities, setActivities] = useState(
    localStorage.getItem('activities')
  );

  if (activities === null)
    return (
      <div className='form-container'>
        <h4>Please add an activity...</h4>
      </div>
    );

  return (
    <div className='form-container'>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Activity</th>
            <th>Participants</th>
            <th>Budget</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Go to karaoke with friends</td>
            <td>4</td>
            <td>Cheap</td>
            <td>x</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Go to karaoke with friends</td>
            <td>4</td>
            <td>Cheap</td>
            <td>x</td>
          </tr>
        </tbody>
      </table>
      <button className='btn btn-primary btn-block'>Clear all</button>
    </div>
  );
};

export default MyList;
