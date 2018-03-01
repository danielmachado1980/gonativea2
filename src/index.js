import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Todos from './components/Todos';

const todos = [
      'Fazer tarefa.',
      'Cozinhar',
      'Estudar para prova',
];

export default class App extends Component {

  state = {
    usuario: 'Daniel',
    todos: [
      { id: 0, text: 'Fazer tarefa.'},
      { id: 1, text: 'Cozinhar'},
      { id: 2, text: 'Estudar para prova'},
    ],
  };

  addTodo = () => {
    this.setState({
      usuario : this.state.usuario + '2',
      todos: [
        ...this.state.todos,
        { id: Math.random(), text: 'Novo incluído agora.'}
      ],
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.usuario}</Text>
        { this.state.todos.map (todo => <Todos key={todo.id} title={todo.text} />) }
        <Button title="Adicionar todo" onPress={this.addTodo}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});



