import PropTypes from 'prop-types';

export const ItemProp = PropTypes.exact({
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
});

export const ItemsProp = PropTypes.arrayOf(ItemProp);
