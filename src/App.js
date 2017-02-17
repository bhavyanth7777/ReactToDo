import React, { Component } from 'react';
import { View } from 'react-native';

import List from './List';
import Input from './Input';
import Title from './Title';

export default class App extends Component {
    state = {
        todos: ['Click to remove', 'Learn React Native', 'Write Code', 'Ship App'],
    }

    onAddToDo = (text) => {
        const {todos} = this.state;

        this.setState({
            todos: [text, ...todos],
        });
    }

    onRemoveToDo = (index) => {
        const {todos} = this.state;

        this.setState({
            todos: todos.filter((todo, i) => i !== index),
        });
    }

    render(){
        const {todos} = this.state

        return(
            <View>
                <Title>
                    ReactToDo
                </Title>
                <Input placeholder={'Type a todo and hit enter!'} onSubmitEditing={this.onAddToDo}/>
                <List list={todos} onPressItem={this.onRemoveToDo}/>
            </View>
        );
    }
}