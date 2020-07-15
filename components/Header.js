import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, } from 'react-native';
import Colors from '../contants/Colors' 

const Header = ({ModalVisibilityToggler}) =>{

    return(
        <View>
            <View style={styles.header}>
                <Text style={styles.title}> TODO APP</Text>
            </View>

            <View>
                <Button title="ADD" onPress={ModalVisibilityToggler}/>
            </View>
        </View>
    )    

};

const styles = StyleSheet.create({
    header : {
        backgroundColor: Colors.secondary,
        height: 90,
        paddingTop: 36,
        textAlign: 'center',
        alignItems:'center',
        justifyContent:'center',
    },

    title : {
        color: 'white',
        fontSize: 30,
    },

});

export default Header;