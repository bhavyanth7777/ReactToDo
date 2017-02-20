import React, { Component } from 'react';
import { View } from 'react-native';
// Step 5. Import connect from React Redux 
import {connect} from 'react-redux';
import {actionCreators} from './todoListRedux';
import List from './List';
import Input from './Input';
import Title from './Title';


// Step 6. mapStateToProps
const mapStateToProps = (state) => ({
    todos: state.todos,
})


class ReactToDo extends Component {
    
    onAddToDo = (text) => {
        const {dispatch} = this.props
        // Step 7
        dispatch(actionCreators.add(text))
    }

    onRemoveToDo = (index) => {
        const {dispatch} = this.props
        dispatch(actionCreators.remove(index))

        
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

// Step 8
export default connect(mapStateToProps)(ReactToDo);