import React, { useEffect, useState } from 'react';
import './MyList.css';

const MyList = () => {
  // useEffect(() => {
  //   setActivities(localStorage.getItem('activities'));
  // }, null);

  const [activities, setActivities] = useState(
    JSON.parse(localStorage.getItem('activities'))
  );

  if (activities === null)
    return (
      <div className='form-container'>
        <h4>Please add an activity...</h4>
      </div>
    );

  const handleClick = () => {
    localStorage.removeItem('activities');
    setActivities(null);
  };

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
          {activities.map((activity, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{activity.activityDesc}</td>
              <td>{activity.participants}</td>
              <td>{activity.price >= 0.5 ? 'cheap' : 'Expensive'}</td>
              <td>X</td>
            </tr>
          ))}
          {/* <tr>
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
          </tr> */}
        </tbody>
      </table>
      <button onClick={handleClick} className='btn btn-primary btn-block'>
        Clear all
      </button>
    </div>
  );
};

export default MyList;
