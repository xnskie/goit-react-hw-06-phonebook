import React from 'react';
import PropTypes from 'prop-types';

import { setFilter } from 'redux/filter/filter-slice';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/filter/filter-selectors';
import { Input } from './Filter.styled';

function Filter () {
  // const filter = useSelector(getFilter);
  // console.log(filter)
  const dispatch = useDispatch();
  const changeFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };
return (
  <label>
    <Input type="text" onChange={changeFilter} />
  </label>
)
};
export default Filter;

Filter.propeTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
