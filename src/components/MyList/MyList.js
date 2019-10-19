import React, { useEffect, useState } from 'react';
import './MyList.css';

const MyList = () => {
  const [activities, setActivities] = useState([]);

  const getFromLocalStorage = () => {
    let activities;
    if (localStorage.getItem('activities') === null) {
      activities = [];
    } else {
      activities = JSON.parse(localStorage.getItem('activities'));
    }
    return activities;
  };

  useEffect(() => {
    const activities = getFromLocalStorage();
    setActivities(activities);
    //eslint-disable-next-line
  }, []);

  const clearAll = () => {
    localStorage.removeItem('activities');
    setActivities([]);
  };

  const deleteActivity = id => {
    const activities = getFromLocalStorage();
    if (activities.length !== 0) {
      const filtered = activities.filter(activity => activity.id !== id);
      // delete from state and local storage
      setActivities(filtered);
      localStorage.setItem('activities', JSON.stringify(filtered));
    }
  };

  if (activities.length === 0)
    return (
      <div className='flex-container'>
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
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {activities.length !== 0 &&
            activities.map((activity, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{activity.activityDesc}</td>
                <td>{activity.participants}</td>
                <td>{activity.price <= 0.5 ? 'cheap' : 'Expensive'}</td>
                <td>
                  <i
                    onClick={deleteActivity.bind(this, activity.id)}
                    style={{ fontSize: '26px' }}
                    className='fa fa-check-circle'></i>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <button
        onClick={clearAll}
        className='btn btn-primary btn-block'
        style={{ backgroundColor: '#dc3545' }}>
        Clear all
      </button>
    </div>
  );
};

export default MyList;
