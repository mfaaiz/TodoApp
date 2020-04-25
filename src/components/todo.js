import React from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import Notes from './notes';

export default class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            noteArray: [],
            noteText: '',
        }
    }
    render() {
        let notes = this.state.noteArray.map((val, key) => {
            return <Notes
                key={key}
                keyval={key}
                val={val}
                deleteMethod={()=>this.deleteNote(key)}
            />
        })
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}> Todo App</Text>
                </View>

                <ScrollView style={styles.scrollContainer}>
                    {notes}
                </ScrollView>

                <View style={styles.footer}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(noteText) => this.setState({ noteText })}
                        value={this.state.noteText}
                        placeholder='Add todo'
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'>
                    </TextInput>

                </View>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={this.addNote.bind(this)}
                >
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }

    addNote(){
        if(this.state.noteText){

            let d= new Date();
            this.state.noteArray.push({
            'date': d.getFullYear()+
            "/"+ (d.getMonth()+1)+
            "/"+ d.getDate(),
            'Todo': this.state.noteText
            });
            this.setState({noteArray: this.state.noteArray});
            this.setState({ noteText:''});
        }
    }

    deleteNote(key){
        this.state.noteArray.splice(key,1);
        this.setState({noteArray:this.state,noteArray})
    }
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
        footer: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 10
        },
        textInput: {
            alignSelf: 'stretch',
            color: '#fff',
            padding: 20,
            backgroundColor: '#252525',
            borderTopWidth: 2,
            borderTopColor: '#ededed',
        },
        header: {
            backgroundColor: '#E91E63',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomWidth: 10,
            borderBottomColor: '#ddd',
        },
        headerText: {
            color: 'white',
            fontSize: 18,
            padding: 26,
        },
        scrollContainer: {
            flex: 1,
            marginBottom: 100,
        },
        addButton: {
            position: 'absolute',
            right: 20,
            zIndex: 11,
            bottom: 90,
            backgroundColor: '#E91E63',
            width: 90,
            height: 90,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 8,
        },
        addButtonText: {
            color: '#fff',
            fontSize: 24,
        }
    }
);