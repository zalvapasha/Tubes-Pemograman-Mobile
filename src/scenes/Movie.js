import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import axios from 'axios';
import logo from '../images/movie.jpg';
import { Button, Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

import Header from "../components/Header";
import { GlobalContext } from "../context/GlobalState";

export default function Movie({ route }) {
  const { name } = useContext(GlobalContext);
  const { movieID } = route.params;
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [reviewAndRatings, setReviewAndRatings] = useState([]);

  const buttonPress = () => {
    name !== ""
      ? navigation.navigate("AddReview", { movieID })
      : navigation.navigate("LogIn");
  };

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
  ];

  return (
    <View>
    <Header/>
      <ScrollView
        contentContainerStyle={styles.container}
        style={styles.scrollViewStyle}
        >
        {movie.map((item, index) => (
        <>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.Title}</Text>
          <Image source={ logo } resizeMode="stretch" style={styles.poster} />
        </View>

        <View>
          <Text style={styles.text}>Average Rating: {item.avgRating}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.text}>Year: {item.Year}</Text>
          <Text style={styles.text}>Rated: {item.Rated}</Text>
          <Text style={styles.text}>Released: {item.Released}</Text>
          <Text style={styles.text}>Runtime: {item.Runtime}</Text>
          <Text style={styles.text}>Genre: {item.Genre}</Text>
          <Text style={styles.text}>Actors: {item.Actors}</Text>
          <Text style={styles.text}>Language: {item.Language}</Text>
          <Text style={styles.text}>Awards: {item.Awards}</Text>
          <Text style={styles.text}>Type: {item.Type}</Text>
          <Text style={styles.text}>DVD Release: {item.DVD}</Text>
          <Text style={styles.text}>Production: {item.Production}</Text>
        </View>
        </>
        ))}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>User Review</Text>
        </View>

        <Button
          type="solid"
          title={
            name !== ""
              ? "Add rating and review"
              : "Log In to add rating and review"
          }
          containerStyle={styles.button}
          onPress={buttonPress}
        />
        {reviewAndRatings.map((item, index) => (
          <View key={index} style={styles.reviewContent}>
            <View style={styles.header}>
              <Text style={styles.movieTitle}>{item.user}</Text>
            </View>
            <View style={styles.review}>
              <Text style={styles.desc}>{item.review}</Text>
              <View style={styles.rate}>
                <Icon name="star" type="font-awesome" color="#f5c518" />
                <Text style={styles.reteNum}>{item.rating} / 10.0</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#FF8225",
    fontSize: wp("6%"),
    fontWeight: "bold",
    textAlign: "center",
  },
  container: {
    alignItems: "center",
  },
  scrollViewStyle: {
    backgroundColor: "#eee",
    height: hp("92%"),
  },
  poster: {
    marginTop: wp("4%"),
    width: wp("50%"),
    height: wp("64%"),
    borderColor: "#f5c518",
    borderWidth: 2,
  },
  text: {
    color: "#000",
    fontSize: wp("4%"),
    fontWeight: "bold",
    textAlign: "center",
  },
  infoContainer: {
    width: wp("80%"),
    backgroundColor: "#D2D2D2",
    padding: wp("4%"),
    marginTop: wp("5%"),
    borderRadius: 5,
  },
  titleContainer: {
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  button: {
    marginBottom: wp("5%"),
  },
  reviewContent: {
    backgroundColor: "#323232",
    paddingLeft: wp("4%"),
    paddingRight: wp("4%"),
    marginBottom: wp("4%"),
    paddingTop: wp("2%"),
    paddingBottom: wp("4%"),
    borderRadius: 10,
  },
  review: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: wp("4%"),
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    paddingBottom: wp("2%"),
  },
  rate: {
    flexDirection: "row",
  },
  movieTitle: {
    color: "#f5c518",
    fontSize: wp("4%"),
    fontWeight: "bold",
  },
  desc: {
    color: "#fff",
    fontSize: wp("4%"),
    width: wp("50%"),
  },
  reteNum: {
    color: "#fff",
    fontSize: wp("4%"),
    marginLeft: wp("2%"),
  },
});
