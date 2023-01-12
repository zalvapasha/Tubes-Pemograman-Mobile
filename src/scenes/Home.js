import React, { useState, useEffect, useContext } from 'react'
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import axios from 'axios'

import logo from '../images/movie.jpg';
import Header from '../components/Header'
import MovieSummary from '../components/MovieSummary'

import { GlobalContext } from '../context/GlobalState'

export default function Home() {
  const [topMovies, setTopMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { name } = useContext(GlobalContext)
  
  const movie = [
    {
      id: 0,
      Title: "Inception",
      Poster: logo,
      avgRating: 8.8,
      Year: 2010,
      Rated: "PG-13",
      Released: "July 16, 2010",
      Runtime: "2h 28m",
      Genre: "Action, Adventure",
      Actors: "Leonardo DiCaprio",
      Language: "English",
      Awards: "4 Oscars",
      Type: "Scifi",
      DVD: "Sold",
      Production: "Warner Bros. Pictures",
    },
    {
      id: 0,
      Title: "Inception",
      Poster: logo,
      avgRating: 8.8,
      Year: 2010,
      Rated: "PG-13",
      Released: "July 16, 2010",
      Runtime: "2h 28m",
      Genre: "Action, Adventure",
      Actors: "Leonardo DiCaprio",
      Language: "English",
      Awards: "4 Oscars",
      Type: "Scifi",
      DVD: "Sold",
      Production: "Warner Bros. Pictures",
    },
  ];

  return (
    <View>
      <Header/>
      <ScrollView style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Popular Movies</Text>
        </View>

        <View style={styles.moviesContainer}>
          {movie.map((item, index) => (
            <MovieSummary
              key={index}
              movieID={item.imdbID}
              title={item.Title}
              url={item.Poster}
              avgRating={item.avgRating}
              year={item.Year}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    height: hp('100%'),
    backgroundColor: '#eee'
  },
  titleContainer: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20
  },
  title: {
    color: '#FF8225',
    fontSize: wp('6%'),
    fontWeight: 'bold'
  },
  moviesContainer: {
    margin: wp('4%')
  },
  whiteColor: {
    color: '#fff'
  }
})