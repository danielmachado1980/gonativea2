import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';
import PropTypes from 'prop-types';

export default class Todos extends Component {
    
    render(){
        return ( 
            <View>
                <Text>{this.props.title}</Text>
            </View>
        );
    }
}

Todos.defaultProps = {
    title: 'Texto padrão.',
};

Todos.propTypes = {
    title: PropTypes.string.isRequired,
};