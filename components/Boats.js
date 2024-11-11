import React from 'react';
import {ScrollView, Text} from 'react-native';
import Boat from './Boat';



const Boats = () => {
    return (
        <ScrollView>
            <Text style={[{marginTop: 50},{textAlign:'center',fontSize:32,fontWeight:'bold'}]}>
                GetABoat - For Sale
            </Text>
            <Boat boat_name="Sea Ray 500 Sundancer" description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away." icon_name="paw" poster={require('../img/sea_ray.jpg')}/>
            <Boat boat_name="Four Winns Horizon 180" description="A sporty look and refined details truly set the Horizon 180 above all others." icon_name="paw" poster={require('../img/four_winns.jpg')}/>
            <Boat boat_name="Flipper 640 ST" description="A modern take on the classic, traditional hardtop and perfect for a family picnic." icon_name="paw" poster={require('../img/flipper.jpg')}/>
            <Boat boat_name="Princess V48" description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior" icon_name="paw" poster={require('../img/princess.jpg')}/>
            <Boat boat_name="Bayliner 175 Bowrider" description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance." icon_name="paw" poster={require('../img/bayliner.jpg')}/>
            <Boat boat_name="Fairline Targa 47" description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit." icon_name="paw" poster={require('../img/fairline.jpg')}/>
        </ScrollView>
    );
};



export default Boats;

//
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
//


//----------------------------required----------------------------------------

// name: 'Sea Ray 500 Sundancer',
//     description:
// 'Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.',
//     picture: sea_ray.jpg    //////
//
//
// name: 'Four Winns Horizon 180',
//     description:
// 'A sporty look and refined details truly set the Horizon 180 above all others.',
//     picture: four_winns.jpg
//
//
// name: 'Flipper 640 ST',
//     description:
// 'A modern take on the classic, traditional hardtop and perfect for a family picnic.',
//     picture: flipper.jpg
//
//
// name: 'Princess V48',
//     description:
// 'There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.',
//     picture: princess.jpg
//
//
// name: 'Bayliner 175 Bowrider',
//     description:
// 'Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.',
//     picture: bayliner.jpg
//
//
// name: 'Fairline Targa 47',
//     description:
// 'Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.',
//     picture: fairline.jpg
//
