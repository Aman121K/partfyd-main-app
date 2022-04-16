import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  Animated,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import { FocusAwareStatusBar } from "../../components";
import { Events } from "./components";
import { COLORS, images, SIZES } from "../../constants";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const MyEvents = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View>
        <View style={styles.eventNameContainer}>
          <Text style={{ color: COLORS.white }}>Basic Plan (3/15)</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("createEvent")}
            style={{
              backgroundColor: COLORS.white,
              borderRadius:
                Math.round(
                  Dimensions.get("window").width +
                  Dimensions.get("window").height
                ) / 2,
              height: SIZES.width / 16,
              width: SIZES.width / 16,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                color: COLORS.secondary
              }}
            >
              +
            </Text>
          </TouchableOpacity>
        </View>

        {/* <View style={{ marginVertical: "10%" }}>
          <View style={styles.eventContainer}>
            <Card style={{ borderRadius: SIZES.radius }}>
              <Card.Title
                titleStyle={{ fontWeight: "bold" }}
                title="Friends’s Birthday"
                right={rightContent}
                rightStyle={{
                  paddingRight: "5%"
                }}
              />
              <View
                style={{
                  borderBottomColor: "lightgrey",
                  borderBottomWidth: 1
                }}
              />
              <Card.Content style={{ marginTop: "5%" }}>
                <View>
                  <Text style={styles.textContent}>Name :- Rahul Pakhare</Text>
                  <Text style={styles.textContent}>
                    Mobile number :- 8097048449
                  </Text>
                  <Text style={styles.textContent}>
                    Delivery address :- E/701, Om Sai Heights, Yashwant Gaurav
                    road, Nalasopara (West), Palghar - 401203
                  </Text>
                  <Text style={styles.textContent}>Cake :- Black Forest</Text>
                  <Text style={styles.textContent}>
                    Extra utilities :- None
                  </Text>
                </View>
              </Card.Content>
            </Card>
          </View>
        </View> */}

        <View style={{ marginTop: "5%" }}>
          <Events />
        </View>
        <View style={styles.eventNameContainer1}>
          <Text style={{ color: COLORS.white }}>Premium Plan (4/15)</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("createEvent")}
            style={{
              backgroundColor: COLORS.white,
              borderRadius:
                Math.round(
                  Dimensions.get("window").width +
                  Dimensions.get("window").height
                ) / 2,
              height: SIZES.width / 16,
              width: SIZES.width / 16,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                color: COLORS.secondary
              }}
            >
              +
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Events />
        </View>
      </View>
    </View>
  );
};

export default MyEvents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "3%",
    marginTop: "5%"
  },
  eventNameContainer: {
    padding: "3%",
    backgroundColor: '#A5D721',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: SIZES.radius
  },
  eventNameContainer1: {
    padding: "3%",
    backgroundColor: '#EE071C',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: SIZES.radius,
    marginVertical: SIZES.width / 20
  },
  eventContainer: {
    borderRadius: SIZES.radius
  },
  textContent: {
    paddingBottom: "1.5%"
  }
});
