import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView
} from "react-native";
import { Card } from "react-native-paper";
import { FocusAwareStatusBar } from "../../components";
import { images, SIZES } from "../../constants";
import { SelectPlan } from "../../navigation/AuthNavigator/Components";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item"
  }
  // {
  //   id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
  //   title: "Second Item"
  // },
  // {
  //   id: "58694a0f-3da1-471f-bd96-145571e29d72",
  //   title: "Third Item"
  // }
];

const Item = ({ title }) => (
  <View style={styles.cardContainer}>
    <View style={styles.titleCont}>
      <Text style={styles.cardTitle}>P58938738</Text>
      <Image
        source={images.edit}
        style={{
          height: SIZES.width / 33,
          width: SIZES.width / 33,
          marginLeft: SIZES.width / 50
        }}
      />
    </View>
    <View>
      <Text style={styles.cardSubTitle}>{"\u20B9"} 1000</Text>
    </View>
    <View>
      <Text style={styles.cardText1}>Plan validity till : 6th Sept 2026</Text>
    </View>
    <View>
      <Text style={styles.cardText2}>Number of Years : 5 years</Text>
    </View>
    <View>
      <Text style={styles.cardText3}>Number of People : 10 years</Text>
    </View>
  </View>
);

const ActivePlans = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;
  return (
    <View
      style={{
        flex: 1,
        paddingTop: "5%",
        alignItems: "center"
      }}
    >
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#fff" />
      <FlatList
        horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text>Hello</Text>

      {/* <SelectPlan /> */}
    </View>
  );
};

export default ActivePlans;

const styles = StyleSheet.create({
  textStyles: {
    paddingVertical: "1%",
    textAlign: "center"
  },
  titleCont: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  cardContainer: {
    flexDirection: "column",
    width: SIZES.width / 1.2,
    height: SIZES.width / 2,
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
    fontSize: SIZES.width / 15,
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
  cardText1: {
    color: "#777",
    marginTop: SIZES.width / 70,
    fontSize: SIZES.width / 25,
    fontWeight: "bold",
    textAlign: "center"
  },
  cardText2: {
    color: "#888",
    marginTop: SIZES.width / 50,
    fontSize: SIZES.width / 28,
    fontWeight: "900",
    textAlign: "center"
  },
  cardText3: {
    color: "#888",
    marginTop: SIZES.width / 300,
    fontSize: SIZES.width / 28,
    fontWeight: "900",
    textAlign: "center"
  }
});
