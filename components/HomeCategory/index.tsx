
import { StyleSheet,FlatList, Image, Text, Pressable } from 'react-native';
import movie from '../../assets/data/movie';
import { useNavigation } from '@react-navigation/native';
import EditScreenInfo from '../../components/EditScreenInfo';
import {  View, } from '../../components/Themed';
import MovieDetailsScreen from '../../screens/MovieDetailsScreen';

interface HomeCategorProps {

    category: {
        id : string,
        title : string,
        movies : {
            id: string,
            poster: string,
        }[]
    }
}

export default function HomeCategory(props: HomeCategorProps) {

    const {category} = props;
    const navigation = useNavigation();
    const  onMoviePress= (movie) => { navigation.navigate('MovieDetailsScreen', {id:movie.id})}
            return (
                <>

                <Text style={Styles.title}>{category.title}</Text>
                <FlatList
                
                data={category.movies}
                renderItem={({item}) => (
                    <Pressable onPress={() => onMoviePress(item)}>
                        <Image style={Styles.image} source={{uri: item.poster}} />
                    </Pressable>
                    
                )}
                
                horizontal
                showsHorizontalScrollIndicator={false}
                />
                </>
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
 