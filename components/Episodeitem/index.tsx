import React from 'react';
import {StyleSheet, Image, Text, Pressable, } from 'react-native';
import { MaterialIcons, Entypo,AntDesign } from '@expo/vector-icons';

import {  View, } from '../../components/Themed'; 

import movie from '../../assets/data/movie';
import categories from '../../assets/data/categories';
import { Episode } from '../../types';

interface EpisodeItemProps {

episode : {

  id: string,
  title:string,
  poster:string,
  duration:string,
  plot:string,
  video:string,
}

onPress: (episode: Episode)=> {}

}

export default function EpisodeItem(props: EpisodeItemProps) {
  
  const {episode, onPress} = props;
  
  return (
    <Pressable style={{margin:10}} onPress={() => onPress(episode)} >
       
       <View style={Styles.row}>

          <Image style={Styles.image} source={{uri:episode.poster}}/>

          <View style={Styles.titleContainer}>
            <Text style={Styles.title}>
                {episode.title}
            </Text>

            <Text style={Styles.duration}>
                {episode.duration}
            </Text>
          </View>

          <AntDesign name="clouddownload" size={24} color="white" />

        </View>

        <Text style={Styles.plot}>{episode.plot}</Text>
    </Pressable>
      

  );
}






const Styles = StyleSheet.create({

  row:{

    flexDirection:'row',
    justifyContent:'space-between'

  },
  
  image:{

    height:75,
    aspectRatio:16/9,
    resizeMode:'cover',
    borderRadius:3,
  },

  titleContainer:{

    flex:1,
    padding:5,
    justifyContent:'center',
  },

  title:{
color:'darkgrey',

  },

  duration:{

    color:'darkgrey',
    fontSize:10,

  },

  plot:{

    color:'darkgrey',
    

  },

})