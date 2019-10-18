import React, { useEffect, useState } from 'react';
import uuid from 'uuid';
import './ActivityForm.css';

const ActivityForm = () => {
  const [activity, setActivity] = useState({
    activityDesc: '',
    type: '',
    participants: 0,
    price: 0
  });

  const setDatas = data => {
    setActivity({
      activityDesc: data.activity,
      type: data.type,
      participants: data.participants,
      price: data.price
    });
  };

  const fetchData = async () => {
    try {
      const res = await fetch('https://www.boredapi.com/api/activity');
      const data = await res.json();
      setDatas(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    //eslint-disable-next-line
  }, []);

  const getActivitiesFromLS = () => {
    let activities;
    if (localStorage.getItem('activities') === null) {
      activities = [];
    } else {
      activities = JSON.parse(localStorage.getItem('activities'));
    }
    return activities;
  };

  const addToLocalStorage = activity => {
    const activities = getActivitiesFromLS();
    activities.push(activity);
    localStorage.setItem('activities', JSON.stringify(activities));
  };

  const handleChange = async e => {
    const { name, value } = e.target;
    if (name !== 'activityDesc') {
      setActivity({ ...activity, [name]: value });
      try {
        const res = await fetch(
          `https://www.boredapi.com/api/activity?${name}=${value}`
        );
        const data = await res.json();
        if (data.hasOwnProperty('error')) {
          alert('error');
        } else {
          setDatas(data);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const { activityDesc, type, participants, price } = activity;

  const handleClick = e => {
    let id = uuid.v4();
    e.preventDefault();
    addToLocalStorage({ id, activityDesc, type, participants, price });
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetchData();
  };

  const activityTypes = [
    'education',
    'recreational',
    'social',
    'diy',
    'charity',
    'cooking',
    'relaxation',
    'music',
    'busywork'
  ];

  return (
    <form className='grid-2' onSubmit={handleSubmit}>
      <div className='flex-container'>
        <h3>You should</h3>
        <textarea
          type='text'
          className='l-input'
          name='activityDesc'
          value={activityDesc}
          onChange={handleChange}
        />
        <input
          type='submit'
          className='btn btn-block btn-primary'
          value='Save for later'
          style={{ backgroundColor: '#dc3545' }}
          onClick={handleClick}
        />
      </div>
      <div>
        <h3>Activity details</h3>
        <div style={{ minHeight: '300px' }}>
          <div className='form-group'>
            <label>Type</label>
            <select name='type' value={type} onChange={handleChange}>
              <option key={type} value={type}>
                {type}
              </option>
              {activityTypes.map(
                activity =>
                  activity !== type && (
                    <option key={activity} value={activity}>
                      {activity}
                    </option>
                  )
              )}
            </select>
          </div>
          <div className='form-group'>
            <label>Participants</label>
            <input
              type='number'
              name='participants'
              value={participants}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label>Budget</label>
            <input
              type='range'
              name='price'
              value={price}
              min={0}
              step={0.1}
              max={1}
              onChange={handleChange}
            />
          </div>
          <ul className='price-categories'>
            <li>Cheap</li>
            <li>Expensive</li>
          </ul>
        </div>
        <input
          type='submit'
          className='btn btn-block btn-primary'
          value='Hit me with a new one!'
          style={{ marginTop: '1rem' }}
        />
      </div>
    </form>
  );
};

export default ActivityForm;
