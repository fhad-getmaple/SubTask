/* @flow */
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

class Home extends Component {
    state = initialState;

    render() {
        let test;
        return (
            <View style={{ flex: 1 }}>
                {this.renderHeader()}
                {this.renderTasks()}
            </View>
        );
    }

    renderHeader() {
        return (
            <View style={styles.header}>
                <Text>September 14th 2017</Text>
            </View>
        );
    }

    renderTasks() {
        return <View style={styles.tasks}>{this.state.tasks.map(this.renderTask)}</View>;
    }

    renderTask = (task: Object, index: number) => (
        <View style={styles.task} key={index}>
            <Text style={styles.text}>{task.name}</Text>
            <Text style={styles.note}>{task.epic}</Text>
        </View>
    );
}

const initialState = {
    tasks: [
        {
            name: 'Wash dishes',
            epic: 'Clean Apartment',
        },
        {
            name: 'mop floor',
            epic: 'Clean Apartment',
        },
    ],
};

export default Home;
