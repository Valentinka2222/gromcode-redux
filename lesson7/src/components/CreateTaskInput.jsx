import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CreateTaskInput = () => {
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue({
      value: event.target.value,
    });
  };
  const handleTaskCreate = () => {
    this.props.onCreate(value);
    setValue({ value: '' });
  };

  return (
    <div className="create-task">
      <input type="text" value={value} className="create-task__input" onChange={handleChange} />
      <button className="btn create-task__btn" onClick={handleTaskCreate}>
        Create
      </button>
    </div>
  );
};

export default CreateTaskInput;
