import React, { useEffect, useState, Component } from 'react';

import './ActivityForm.css';

const ActivityForm = () => {
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

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://www.boredapi.com/api/activity');
      const data = await res.json();
      console.log(data);
      setActivity({
        activityDesc: data.activity,
        type: data.type,
        participants: data.participants,
        price: data.price
      });
    };
    fetchData();
  }, []);

  const [activity, setActivity] = useState({
    activityDesc: '',
    type: '',
    participants: 0,
    price: 0.0
  });

  const { activityDesc, type, participants, price } = activity;

  const handleChange = e => {
    setActivity({ ...activity, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  return (
    <form className='grid-2'>
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
                act =>
                  act !== type && (
                    <option key={act} value={act}>
                      {act}
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
