import React from 'react';
import {View, Text, Image,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
// import Icon from 'react-native-vector-icons/Fonts/FontAwesome6_Solid.ttf';

const Boat = ({boat_name, description, icon_name, poster})=> {
    return (
        <View>
            <View style={styles.container}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                <Icon name={icon_name} size={20} color="#B23B23" />
                {boat_name}
                </Text>
            <Text>{description}</Text>
            </View>
            <Image source={poster} style={styles.pic}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor:'SkyBlue',
        borderWidth: 1,
        margin:15

    },
    pic:{
        flex: 1,
        marginBottom: 50,

    }
});



export default Boat;


