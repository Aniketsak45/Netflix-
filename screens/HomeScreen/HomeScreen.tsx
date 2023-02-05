import { StyleSheet, Image, FlatList, Text } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import {  View, } from '../../components/Themed';
import categories from '../../assets/data/categories';
import HomeCategory from '../../components/HomeCategory';

const firstCategory = categories.items[1];
export default function HomeScreen() {
  return (
    <View style={Styles.container}>
      {/* List of home categries */}
      <FlatList 
      
      data={categories.items}
      renderItem={({item}) => <HomeCategory category={item}/>}
      />
    </View>
  );
}



const Styles = StyleSheet.create({

    container: {

      flex:1,
      padding:20,
      
      },

      image:{
      width:100,
      height:170,
      resizeMode:'cover',
      borderRadius:5,
      margin:5,
      },

      title:{
        fontSize:24,
        color:'#fff',
        fontWeight:'bold',
      }
})
 