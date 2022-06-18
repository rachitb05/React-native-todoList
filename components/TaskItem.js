import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox'
export default TaskItem = (props) => {
    const handleChange=()=>{
        props.setTask(props.index);
    }
    return (
        <View style={styles.container}>
            <View style={styles.indexContainer}>
            <Checkbox style={styles.checkbox} value={props.check} onValueChange={handleChange}/>
            </View>
            <View style={styles.taskContainer}>
            {props.check?<Text style={styles.taskTrue}>{props.task}</Text>:<Text style={styles.taskFalse}>{props.task}</Text>}
                <TouchableOpacity onPress={() => props.deleteTask()}>
                    <MaterialIcons style={styles.delete} name="delete" size={22} color='#fff' />
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    indexContainer: {
        backgroundColor: '#4A6FA5',
        borderRadius: 12,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
    },
    checkbox:{
        width: 35,
        height: 35,
        borderRadius:20
    },
    index: {
        color: '#fff',
        fontSize: 20,
    },
    taskContainer: {
        backgroundColor: '#4A6FA5',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        minHeight: 50,
    },
    taskFalse: {
        color: '#fff',
        width: '90%',
        fontSize: 16,
    },
    taskTrue: {
        color: '#fff',
        width: '90%',
        fontSize: 16,
        textDecorationLine: 'line-through',
    },
    delete: {
        marginLeft: 10,
    },
});