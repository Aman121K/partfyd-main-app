import React from "react";
import { COLORS, images, SIZES } from "../../../../constants";
import { View, Text, Animated, StyleSheet, Image, FlatList } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const Item = ({ cardData }) => (
  <View style={styles.cardContainer}>
    <View style={styles.titleCont}>
      <Text style={styles.cardTitle}>{cardData.title}</Text>
      <Image
        source={images.edit}
        style={{
          height: SIZES.width / 22,
          width: SIZES.width / 22,
          marginLeft: SIZES.width / 50
        }}
      />
    </View>
    <View style={styles.cardBodyContainer}>
      <Text style={styles.label}>Name :- <Text style={styles.labelText}>{cardData.name}</Text></Text>
      <Text style={styles.label}>Mobile number :- <Text style={styles.labelText}>{cardData.mobileNumber}</Text></Text>
      <Text style={styles.label}>Delivery address :- <Text style={styles.labelText}>{cardData.deliveryAddress}</Text></Text>
      <Text style={styles.label}>Cake :- <Text style={styles.labelText}>{cardData.cake}</Text></Text>
      <Text style={styles.label}>Extra utilities :- <Text style={styles.labelText}>{cardData.extraUtilities}</Text></Text>
    </View>
  </View>
);
const Events = () => {
  const renderItem = ({ item }) => <Item cardData={item} />;


  const newSeasonScrollX = React.useRef(new Animated.Value(0)).current;

  const EVENTS = [
    {
      title: "Friend's Birthday",
      name: "Sagar Chavan",
      mobileNumber: 8097048449,
      deliveryAddress:
        " E/701, Om Sai Heights, Yashwant Gaurav road, Nalasopara (West), Palghar - 401203",
      cake: "Black Forest",
      extraUtilities: "Black Forest"
    },
    {
      title: "Friend's Birthday",
      name: "Sagar Chavan",
      mobileNumber: 8097048449,
      deliveryAddress:
        " E/701, Om Sai Heights, Yashwant Gaurav road, Nalasopara (West), Palghar - 401203",
      cake: "Black Forest",
      extraUtilities: "Black Forest"
    }
  ];
  return (
    <View style={styles.mainContainer}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={EVENTS}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

export default Events;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "3%",
    marginTop: "5%"
  },
  eventNameContainer: {
    padding: "3%",
    backgroundColor: COLORS.secondary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: SIZES.radius
  },
  eventContainer: {
    borderRadius: SIZES.radius
  },
  textContent: {
    paddingBottom: "1.5%"
  },

  mainContainer:{
    paddingHorizontal: SIZES.width / 50
  },

  textStyles: {
    paddingVertical: "1%",
    textAlign: "center"
  },
  titleCont: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    paddingBottom: SIZES.width / 80
  },
  cardContainer: {
    flexDirection: "column",
    width: SIZES.width / 1.2,
    height: SIZES.width / 1.8,
    backgroundColor: "#FFFFFF",
    borderColor: "#777",
    borderRadius: SIZES.width / 20,
    padding: SIZES.width / 30,
    elevation: 4,
    marginHorizontal: SIZES.width / 50,
    shadowColor: "#000"
  },
  cardTitle: {
    color: "#3D3D3D",
    fontSize: SIZES.width / 19,
    fontWeight: "bold",
    textAlign: "center"
  },
  cardSubTitle: {
    color: "green",
    marginTop: SIZES.width / 16,
    fontSize: SIZES.width / 20,
    fontWeight: "900",
    textAlign: "center"
  },
  label: {
    color: "#777",
    marginTop: SIZES.width / 100,
    fontSize: SIZES.width / 28,
    fontWeight: "bold",
    textAlign: "left",
  },
  labelText: {
    color: "#888",
    marginTop: SIZES.width / 50,
    fontSize: SIZES.width / 28,
    fontWeight: "900",
    textAlign: "left"
  },
  cardBodyContainer:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: SIZES.width / 50
  }
});
