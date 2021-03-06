import {
    View,
    Button,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import React, { Component } from 'react';

const QuizResultsScreen = (props) => {
    const { isFetching } = props;
    return <View style={styles.main} >
        <Text style={styles.title}>Quiz Results</Text>
        <View style={styles.content}>
            {
                isFetching ? <Text>loading...</Text>
                        : <Text>quiz results goes here</Text>
            }
        </View>
    </View>;
};

const styles = StyleSheet.create({
    main: {
        flex: 1, // equivalent of  display: flex ;   height: 100%;
        justifyContent: 'flex-start',
    },
    title: {
        flex: 1, // equivalent of height: 10%
    },
    content: {
        flex: 9, // equivalent of height: 90%
    },
});

export default QuizResultsScreen;
