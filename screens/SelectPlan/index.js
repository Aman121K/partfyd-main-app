import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  FlatList
} from "react-native";
import { MultiSlider,CustomButton } from "../../components";
import { FONTS, images, SIZES } from "../../constants";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    img: "cake1"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    img: "cake2"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    img: "cake3"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d7287",
    img: "cake4"
  }
];

const Item = ({ img }) => (
  <Image
    source={images['cake1']}
    style={{
      height: SIZES.width / 4.5, width: SIZES.width / 4.5, marginRight: 4,
      borderRadius: SIZES.width / 25,marginRight : SIZES.width / 45
    }}
  />
);

const SelectPlan = ({navigation}) => {

  const renderItem = ({ item }) => <Item title={item.title} />;
  const [selectedPlan, setSelectedPlan] = React.useState('BasicPlan');
  const [number, onChangeNumber] = React.useState(null);
  const handleSelectPlan = (planName) => {
    setSelectedPlan(planName);
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>SELECT PLAN</Text>
          <Text style={styles.subTitle}>
            Choose a plan that works best for you!
          </Text>
        </View>
        <View style={selectedPlan == 'BasicPlan' ? styles.planToggle : selectedPlan == 'StandardPlan' ? styles.planToggleStandard : styles.planTogglePrimum}>
          <View style={selectedPlan == 'BasicPlan' ? styles.basicPlan : selectedPlan == 'StandardPlan' ? styles.onStandardSelectd : styles.onPrimumSelectd}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => handleSelectPlan("BasicPlan")}
            >
              <Text style={styles.planText}>Basic</Text>
            </TouchableOpacity>
          </View>
          <View style={selectedPlan == "StandardPlan" ? styles.standardPlan : selectedPlan == 'BasicPlan' ? styles.onBasicSelectd : styles.onPrimumSelectd}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => handleSelectPlan("StandardPlan")}
            >
              <Text style={styles.planText}>Standard</Text>
            </TouchableOpacity>
          </View>
          <View style={selectedPlan == 'PremiumPlan' ? styles.premiumPlan : selectedPlan == 'BasicPlan' ? styles.onBasicSelectd : selectedPlan == 'StandardPlan' ? styles.onStandardSelectd : ""}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => handleSelectPlan("PremiumPlan")}
            >
              <Text style={styles.planText}>Premium</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.cardTitle}>
            <Text style={styles.planPrice}>{"\u20B9"} 1000</Text>
          </View>
          <View style={styles.multiSliderContainer}>
            <MultiSlider
              scrollwidth={240}
              textLable="events"
              sliderCount={10}
              seekBarColor={selectedPlan == 'BasicPlan' ? '#A5D721' : selectedPlan == 'StandardPlan' ? '#02BDEB' : '#EE071C'}
              selectedCount={3}
            />
            <Text style={styles.sliderInfo1}>Number of Events per year</Text>
            <Text style={styles.sliderInfo2}>
              Want this plan for more than 10 events?Write to us on
            </Text>
            <Text style={styles.sliderInfo3}>quote@partyfyd.com</Text>
          </View>
          <View style={styles.multiSliderContainer2}>
            <MultiSlider
              scrollwidth={240}
              textLable="years"
              seekBarColor={selectedPlan == 'BasicPlan' ? '#A5D721' : selectedPlan == 'StandardPlan' ? '#02BDEB' : '#EE071C'}
              sliderCount={10}
              selectedCount={3}
            />
            <Text style={styles.sliderInfo1}>Number of years</Text>
          </View>
          <View style={styles.textAreaContainer}>
            <FlatList
              horizontal
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
          <View style={styles.extraUtilitiesContainer}>
            <Text style={styles.extraText1}>Extra Utilities :-</Text>
            <View style={styles.utTextContainer}>
              <View style={styles.utText}>
                {selectedPlan == 'BasicPlan' ? <Image
                  source={images.crossmark}
                  style={{ height: SIZES.width / 28, width: SIZES.width / 28, marginRight: 4 }}
                /> : <Text></Text>}
                {selectedPlan == 'PremiumPlan' ? <Image
                  source={images.checkmark}
                  style={{ height: SIZES.width / 28, width: SIZES.width / 28, marginRight: 4 }}
                /> : <Text></Text>}
                {
                  selectedPlan == 'StandardPlan' ? <Image
                    source={images.checkmark}
                    style={{ height: SIZES.width / 28, width: SIZES.width / 28, marginRight: 4 }}
                  /> : <Text></Text>
                }
                <Text style={styles.crossMarktext}>Baloons</Text>
              </View>

              <View style={styles.utText}>
                {selectedPlan == 'BasicPlan' ? <Image
                  source={images.crossmark}
                  style={{ height: SIZES.width / 28, width: SIZES.width / 28, marginRight: 4 }}
                /> : <Text></Text>}
                {selectedPlan == 'PremiumPlan' ? <Image
                  source={images.checkmark}
                  style={{ height: SIZES.width / 28, width: SIZES.width / 28, marginRight: 4 }}
                /> : <Text></Text>}
                {
                  selectedPlan == 'StandardPlan' ? <Image
                    source={images.checkmark}
                    style={{ height: SIZES.width / 28, width: SIZES.width / 28, marginRight: 4 }}
                  /> : <Text></Text>
                }
                <Text style={styles.crossMarktext}>Cards</Text>
              </View>

              <View style={styles.utText}>
                {selectedPlan == 'BasicPlan' ? <Image
                  source={images.crossmark}
                  style={{ height: SIZES.width / 28, width: SIZES.width / 28, marginRight: 4 }}
                /> : <Text></Text>}
                {selectedPlan == 'PremiumPlan' ? <Image
                  source={images.checkmark}
                  style={{ height: SIZES.width / 28, width: SIZES.width / 28, marginRight: 4 }}
                /> : <Text></Text>}
                {
                  selectedPlan == 'StandardPlan' ? <Image
                    source={images.crossmark}
                    style={{ height: SIZES.width / 28, width: SIZES.width / 28, marginRight: 4 }}
                  /> : <Text></Text>
                }
                <Text style={styles.crossMarktext}>Chocolate</Text>
              </View>
            </View>
            <View style={styles.utTextContainer}>
              <View style={styles.utText}>
                {selectedPlan == 'BasicPlan' ? <Image
                  source={images.crossmark}
                  style={{ height: SIZES.width / 28, width: SIZES.width / 28, marginRight: 4 }}
                /> : <Text></Text>}
                {selectedPlan == 'PremiumPlan' ? <Image
                  source={images.checkmark}
                  style={{ height: SIZES.width / 28, width: SIZES.width / 28, marginRight: 4 }}
                /> : <Text></Text>}
                {
                  selectedPlan == 'StandardPlan' ? <Image
                    source={images.checkmark}
                    style={{ height: SIZES.width / 28, width: SIZES.width / 28, marginRight: 4 }}
                  /> : <Text></Text>
                }
                <Text style={styles.crossMarktext}>Ribbions</Text>
              </View>
              <View style={styles.utText}>
                {selectedPlan == 'BasicPlan' ? <Image
                  source={images.crossmark}
                  style={{ height: SIZES.width / 28, width: SIZES.width / 28, marginRight: 4 }}
                /> : <Text></Text>}
                {selectedPlan == 'PremiumPlan' ? <Image
                  source={images.checkmark}
                  style={{ height: SIZES.width / 28, width: SIZES.width / 28, marginRight: 4 }}
                /> : <Text></Text>}
                {
                  selectedPlan == 'StandardPlan' ? <Image
                    source={images.crossmark}
                    style={{ height: SIZES.width / 28, width: SIZES.width / 28, marginRight: 4 }}
                  /> : <Text></Text>
                }
                <Text style={styles.crossMarktext}>Part hats</Text>
              </View>
              <View style={styles.utText}>
                {selectedPlan == 'BasicPlan' ? <Image
                  source={images.crossmark}
                  style={{ height: SIZES.width / 28, width: SIZES.width / 28, marginRight: 4 }}
                /> : <Text></Text>}
                {selectedPlan == 'PremiumPlan' ? <Image
                  source={images.checkmark}
                  style={{ height: SIZES.width / 28, width: SIZES.width / 28, marginRight: 4 }}
                /> : <Text></Text>}
                {
                  selectedPlan == 'StandardPlan' ? <Image
                    source={images.crossmark}
                    style={{ height: SIZES.width / 28, width: SIZES.width / 28, marginRight: 4 }}
                  /> : <Text></Text>
                }
                <Text style={styles.crossMarktext}>Crackers</Text>
              </View>
            </View>
          </View>
          <View style={styles.otpbtn}>
            <CustomButton
              onPress={() => navigation.navigate('partyfyd')}
              btnbgcolor={selectedPlan == 'BasicPlan'? "#A5D721": selectedPlan == 'StandardPlan'? '#6ACFED':'#EE071C'}
              btnRadius={20}
              btnpaddingVertical={SIZES.width / 60}
              btnpaddingHorizontal={SIZES.width / 20}
              btnfontsize={SIZES.width / 25}
            >Buy Now</CustomButton>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectPlan;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: SIZES.width / 40
  },
  otpbtn: {
    marginTop: SIZES.width / 150,
    paddingVertical: SIZES.width / 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    alignItems: "center",
    paddingTop: SIZES.width / 7,
    paddingBottom: SIZES.width / 25,
  },
  title: {
    fontSize: SIZES.width / 20,
    fontWeight: "bold",
    color: "#3D3D3D",
    paddingBottom: SIZES.width / 550
  },
  subTitle: {
    fontSize: SIZES.width / 30,
    fontWeight: "500",
    color: "#3D3D3D"
  },
  planToggle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SIZES.width / 60,
    backgroundColor: '#ADC86D',
    width: SIZES.width / 1.4,
    borderRadius: SIZES.width / 10,
    height: "auto"
  },
  planToggleStandard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SIZES.width / 60,
    backgroundColor: '#6ACFED',
    width: SIZES.width / 1.4,
    borderRadius: SIZES.width / 10,
    height: "auto"
  },
  planTogglePrimum: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SIZES.width / 60,
    backgroundColor: '#E86D77',
    width: SIZES.width / 1.4,
    borderRadius: SIZES.width / 10,
    height: "auto"
  },
  basicPlan: {
    flex: 1,
    backgroundColor: "#93AC57",
    padding: SIZES.width / 28,
    borderRadius: SIZES.width / 10,
    alignItems: "center"
  },
  onBasicSelectd: {
    flex: 1,
    backgroundColor: "#ADC86D",
    borderRadius: SIZES.width / 10,
    padding: SIZES.width / 28,
    alignItems: "center"
  },
  onStandardSelectd: {
    flex: 1,
    backgroundColor: "#6ACFED",
    borderRadius: SIZES.width / 10,
    padding: SIZES.width / 28,
    alignItems: "center"
  },
  onPrimumSelectd: {
    flex: 1,
    backgroundColor: "#E86D77",
    borderRadius: SIZES.width / 10,
    padding: SIZES.width / 28,
    alignItems: "center"
  },
  standardPlan: {
    flex: 1,
    backgroundColor: "#02BDEB",
    padding: SIZES.width / 28,
    borderRadius: SIZES.width / 10,
    alignItems: "center"
  },
  premiumPlan: {
    flex: 1,
    backgroundColor: "#EE071C",
    padding: SIZES.width / 28,
    borderRadius: SIZES.width / 10,
    alignItems: "center"
  },
  planText: {
    fontSize: SIZES.width / 28,
    fontWeight: "700",
    color: "#FFFFFF"
  },
  cardContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: SIZES.width / 20,
    width: SIZES.width / 1.2,
    borderRadius: SIZES.width / 13,
    paddingHorizontal: SIZES.width / 20,
    elevation: 3,
    shadowColor: "#000"
  },
  cardTitle: {
    padding: SIZES.width / 35,
    alignItems: "center"
  },
  planPrice: {
    fontSize: SIZES.width / 10,
    color: "#3D3D3D"
  },
  multiSliderContainer: {
    flex: 1,
    paddingHorizontal: SIZES.width / 20,
    marginBottom: SIZES.width / 7
  },
  multiSliderContainer2: {
    flex: 1,
    paddingHorizontal: SIZES.width / 20
  },
  sliderInfo1: {
    alignItems: "center",
    textAlign: "center",
    fontSize: SIZES.width / 30,
    color: "#777",
    fontWeight: "bold",
    paddingBottom: SIZES.width / 70
  },
  sliderInfo2: {
    alignItems: "center",
    textAlign: "center",
    fontSize: SIZES.width / 40,
    color: "#888",
    fontWeight: "bold"
  },
  sliderInfo3: {
    alignItems: "center",
    textAlign: "center",
    fontSize: SIZES.width / 35,
    color: "#1BA8F0",
    fontWeight: "bold"
  },
  textAreaContainer: {
    borderColor: "#999",
    borderWidth: 2,
    padding: 5,
    paddingVertical: SIZES.width / 40,
    marginTop: SIZES.width / 10,
    marginHorizontal: SIZES.width / 50,
    borderRadius: SIZES.width / 25
  },
  textArea: {
    height: SIZES.width / 4,
    justifyContent: "flex-start",
    textAlignVertical: "top"
  },
  extraUtilitiesContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  extraText1: {
    textAlign: "left",
    fontSize: SIZES.width / 30,
    color: "#777",
    fontWeight: "bold",
    paddingHorizontal: SIZES.width / 35,
    paddingTop: SIZES.width / 60
  },
  utTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: SIZES.width / 20,
    alignItems: 'center'
  },
  utText: {
    flexDirection: "row",
    justifyContent: 'flex-start',
    paddingTop: SIZES.width / 65,
    fontSize: SIZES.width / 33,
    color: "#777",
    alignItems: 'center'
  },
  crossMark: {
    fontSize: SIZES.width / 37,
    textAlignVertical: "center",
    paddingRight: 4
  },
  checkMark: {
    fontSize: SIZES.width / 27,
    textAlignVertical: "center",
    paddingRight: 4,
    color: 'green',
    fontWeight: 'bold'
  },
  crossMarktext: {
    fontSize: SIZES.width / 33,
    color: "#777"
  }
});
