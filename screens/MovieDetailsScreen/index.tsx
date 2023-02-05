import React from 'react';
import { useState } from 'react';
import {StyleSheet, Image, Text, View, Pressable, FlatList, } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import EditScreenInfo from '../../components/EditScreenInfo';
//import {  View, } from '../../components/Themed';
import movie from '../../assets/data/movie';
import { MaterialIcons, Entypo,AntDesign } from '@expo/vector-icons'; 
import EpisodeItem from '../../components/Episodeitem';
import VideoPlayer from '../../components/VideoPlayer';

const firstSeason = movie.seasons.items[0]
const firstEpisode = firstSeason.episodes.items[0]

export default function MovieDetailsScreen() {

    const seasonNames = movie.seasons.items.map(season => season.name);
    const [currentEpisode, setCurrentEpisode] = useState(firstSeason.episodes.items[0]);
    const  [currentSeason, setCurrentSeason] = useState(firstSeason);
  return (
    <View>
      <VideoPlayer episode={currentEpisode}/>
      
      <FlatList 
      
      data={currentSeason.episodes.items}
      renderItem={({item}) => <EpisodeItem episode={item} onPress={(episode) => {setCurrentEpisode(episode)}} />}
      style={{marginBottom:250,}}

      ListHeaderComponent={( <View style={{padding:12}}>


        <Text style={Styles.title}>{movie.title}</Text>

        <View style={{flexDirection:'row'}}>
        <Text style={Styles.match}>98% match</Text>
        <Text style={Styles.year}>{movie.year}</Text>
        <View style={Styles.ageContainer}>
        <Text style={Styles.age}>12+</Text>
        </View>
        <Text style={Styles.year}>{movie.numberOfSeasons} Seasons</Text>
        <MaterialIcons name="hd" size={24} color="white" />

        </View>

        {/*Play Button */}
        <Pressable style ={Styles.playButton} onPress={() => { console.warn('Plage')}} >
                            <Text style={Styles.playButtonText}>
                            <AntDesign name="playcircleo" size={24} color="black" />
                            {' '}
                                Play
                            </Text>
                        </Pressable>

      {/*Download Button */}
      <Pressable style ={Styles.downloadButton} onPress={() => { console.warn('Plage')}} >
                            <Text style={Styles.downloadButtonText}>
                            <AntDesign name="clouddownload" size={24} color="white" />
                            {' '}
                                Download
                            </Text>
                        </Pressable>

      <Text style={Styles.movieText}>{movie.plot}</Text>
      <Text style={Styles.castText}>Cast: {movie.cast}</Text>
      <Text style={Styles.creatorText}>Creator: {movie.creator}</Text>

      {/* row with icons buttons */}

        <View style={{flexDirection:'row', margin:20,}}>

          <View style={{alignItems:'center', marginTop:5, padding:2,marginHorizontal:8}}>
            <AntDesign name="plus" size={30} color="white" /><Text style={{color:'darkgrey'}}>My List</Text>
          </View>

          <View style={{alignItems:'center', marginTop:5, padding:2,marginHorizontal:8}}>
          <Entypo name="thumbs-up" size={30} color="white" /><Text style={{color:'darkgrey'}}>Rate</Text>
          </View>

          <View style={{alignItems:'center', marginTop:5, padding:2,marginHorizontal:8}}>
          <Entypo name="share" size={30} color="white" /><Text style={{color:'darkgrey'}}>Share</Text>
          </View>

        </View>


        <Picker
        selectedValue={currentSeason.name}
        style={{ height: 30, width: 150, color:'white' }}
        dropdownIconColor={'white'}
        onValueChange={(itemValue, itemIndex) => {

          setCurrentSeason(movie.seasons.items[itemIndex])
        }}>
        {seasonNames.map(seasonName => (

          <Picker.Item label={seasonName} value={seasonName} key={seasonName}/>

        ))}
    
       
      </Picker>


    </View>
)}
      
      />
      
      
    </View>
  )
};






const Styles = StyleSheet.create({

    image:{
        width:'100%',
        aspectRatio:15/9,
        resizeMode:'cover',
    },

    title:{
            color:'white',
            fontSize:24,
            fontWeight:'bold',

    },

    match: {
        
        color:'#00aa00',
        fontWeight:'bold',
        marginRight:5,
    },

    year:{
        color:'white',

    },

    ageContainer:{
        backgroundColor:'#e6e229',
        justifyContent:'center',
        borderRadius:2,
        paddingHorizontal:3,
        marginRight:5,
        
    },
    
  age:{
    color:'black',
    fontWeight:'bold',

  },
  
  // Button


  
  playButton:{
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    padding:5,
    borderRadius:3,
    marginVertical:5,

  },

  playButtonText:{

    color:'black',
    fontSize:16,
    fontWeight:'bold'
  },
 

  downloadButton:{
    backgroundColor:'#2b2b2b',
    justifyContent:'center',
    alignItems:'center',
    padding:5,
    borderRadius:3,
    marginVertical:5,
  },
  downloadButtonText:{

    color:'white',
    fontSize:16,
    fontWeight:'bold'
  },

  movieText:{
    color:'white',
    fontSize:14,
    marginVertical:3,
  },
  castText:{
    color:'darkgrey',
    fontSize:14,
  },
  creatorText:{
    color:'darkgrey',
    fontSize:14,
  },

})