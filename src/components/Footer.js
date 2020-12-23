import React from 'react';
import { visibilityFilters } from '../actions';
import FilterLink from '../containers/FilterLink';

const Footer = () => {
  
  return (
    <div className="mt-3">
      <h4 className="d-inline m-0 text-white">Show: </h4>
      <FilterLink filter={visibilityFilters.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={visibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={visibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </div>
  );
};

export default Footer;