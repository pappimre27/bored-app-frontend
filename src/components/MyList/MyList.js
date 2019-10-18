import React, { useEffect, useState } from 'react';
import './MyList.css';

const MyList = () => {
  const [activities, setActivities] = useState([]);

  const getActivitiesFromLS = () => {
    let activities;
    if (localStorage.getItem('activities') === null) {
      activities = [];
    } else {
      activities = JSON.parse(localStorage.getItem('activities'));
    }
    return activities;
  };

  useEffect(() => {
    const activities = getActivitiesFromLS();
    setActivities(activities);
  }, []);

  const clearAll = () => {
    localStorage.removeItem('activities');
    setActivities([]);
  };

  const deleteActivity = id => {
    const activities = getActivitiesFromLS();
    if (activities.length !== 0) {
      setActivities(activities.filter(activity => activity.id !== id));
      const filtered = activities.filter(activity => activity.id !== id);
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
                  <a href='#' onClick={deleteActivity.bind(this, activity.id)}>
                    <i
                      style={{ fontSize: '26px' }}
                      className='fa fa-check-circle'></i>
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <button onClick={clearAll} className='btn btn-primary btn-block'>
        Clear all
      </button>
    </div>
  );
};

export default MyList;
