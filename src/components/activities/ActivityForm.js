import React from 'react';
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

  return (
    <form className='grid-2'>
      <div className='flex-container'>
        <h3>You should</h3>
        <textarea type='text' name='activity' className='l-input' />
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
            <select>
              <option>Social</option>
            </select>
          </div>
          <div className='form-group'>
            <label>Participants</label>
            <input type='number' name='participants' required />
          </div>
          <div className='form-group'>
            <label>Budget</label>
            <input type='range' />
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
