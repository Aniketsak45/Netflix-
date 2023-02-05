import React, { Component, useRef, useState, useEffect } from 'react';
import { StyleSheet,FlatList, Image, Text } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import {  View, } from '../../components/Themed';
import { Episode } from '../../types';
import { Video, AVPlaybackStatus  } from 'expo-av';
import { Playback } from 'expo-av/build/AV';

interface VideoPlayerprops {

    episode: Episode;
}

export default function VideoPlayer(props:VideoPlayerprops) {

    const {episode} = props;

    const [status, setStatus] = useState({});

    const video = useRef<Playback>(null);
    useEffect(() => {

        if(!Video) {
            return;
        }
            (async() => {

                await video?.current?.unloadAsync();
                await video?.current?.loadAsync(
                    {uri:episode.video},
                    {},
                    false
                );
                

            })();
    },[episode])
    
            return (
                
        <Video
        ref={video}
        style={Styles.video}
        source={{
          uri: episode.video,
        }}
        posterSource={{
            uri: episode.poster,
        }}
        posterStyle={{
            resizeMode:'cover',
        }}
        usePoster={true}
        useNativeControls
        resizeMode='contain'
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
            );
}



const Styles = StyleSheet.create({

    video:{

        width:'100%',
        aspectRatio:16/9,
        marginBottom:10,
        
    },

})
 