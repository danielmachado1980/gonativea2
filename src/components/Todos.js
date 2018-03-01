import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import PropTypes from 'prop-types';

const Todos = (props) => (
  <View>
      <Text>{props.title}</Text>
  </View>
)

Todos.defaultProps = {
    title: 'Texto padrão.',
};

Todos.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Todos;
