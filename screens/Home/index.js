import React from 'react';
import {FocusAwareStatusBar} from '../../components';
import {Text, View, StyleSheet, Image} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, images, SIZES} from '../../constants';

const renderDetail = rowData => {
  return (
    <LinearGradient
      colors={!rowData.eventExpired ? ['#7540FD', '#7800BD'] : ['#fff', '#fff']}
      style={{
        borderRadius: 10,
        elevation: 2,
        padding: '2%',
      }}>
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{marginRight: '3%'}}>
            <Image
              style={{height: 20, width: 20}}
              source={
                rowData.eventExpired ? images.greenCheck : images.whiteCheck
              }
            />
          </View>
          <Text style={{color: !rowData.eventExpired ? 'white' : 'grey'}}>
            {rowData.title}
          </Text>
        </View>

        <Text
          style={{
            color: rowData.eventExpired ? '#000' : '#fff',
            marginVertical: 8,
          }}>
          {rowData.plan}
        </Text>

        {rowData.eventExpired ? (
          <View>
            <Text>Rate Your Experience</Text>

            <View style={{marginVertical: 4, flexDirection: 'row'}}>
              <Image style={{height: 20, width: 20}} source={images.star} />
              <Image style={{height: 20, width: 20}} source={images.star} />
              <Image style={{height: 20, width: 20}} source={images.star} />
              <Image style={{height: 20, width: 20}} source={images.star} />
              <Image style={{height: 20, width: 20}} source={images.star} />
            </View>

            <Text style={{color: COLORS.success}}>
              Delivered successfully at 1:38pm.
            </Text>
          </View>
        ) : (
          <View>
            <Text style={{color: 'white', marginVertical: 4}}>
              Name - {rowData.name}
            </Text>
            <Text style={{color: 'white', marginVertical: 4}}>
              Delivery Address - {rowData.deliveryAddress}
            </Text>
            <Text style={{color: 'white', marginVertical: 4}}>
              Mobile Number - {rowData.mobileNumber}
            </Text>
            <Text style={{color: 'white', marginVertical: 4}}>
              Cake - {rowData.cake}
            </Text>
            <Text style={{color: 'white', marginVertical: 4}}>
              Extra Utilities - {rowData.extraUtilities}
            </Text>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{marginRight: '2%'}}>
                <Image style={{height: 10, width: 10}} source={images.info} />
              </View>

              <Text
                style={{
                  color: 'white',
                  marginVertical: 12,
                  fontSize: SIZES.body6,
                }}>
                Event will freeze on {rowData.freezeTime}.
              </Text>
            </View>
          </View>
        )}
      </View>
    </LinearGradient>
  );
};

const Home = () => {
  const data = [
    {
      time: '17 Apr',
      title: 'Sister’s Birthday',
      plan: 'Standard Plan',
      name: 'Rahul Pakhre',
      deliveryAddress:
        'E/701, Om Sai Heights, Yashwant Gaurav road, Nalasopara (West), Palghar - 401203',
      mobileNumber: 8097048449,
      circleColor: '#7540FD',
      cake: 'Black Forest',
      extraUtilities: 'None',
      freezeTime: '16th Oct',
      lineColor: '#C4C4C4',
      circleColor: '#C4C4C4',
      eventExpired: true,
    },
    {
      time: '12 May',
      title: 'Mom’s Birthday',
      plan: 'Premium Plan',
      name: 'Rahul Pakhre',
      deliveryAddress:
        'E/701, Om Sai Heights, Yashwant Gaurav road, Nalasopara (West), Palghar - 401203',
      mobileNumber: 8097048449,
      circleColor: '#7540FD',
      lineColor: '#3D3D3D',
      cake: 'Black Forest',
      extraUtilities: 'None',
      freezeTime: '16th Oct',
      eventExpired: false,
    },
    {
      time: '26 Apr',
      title: 'Cousin Birthday',
      plan: 'Premium Plan',
      name: 'Rahul Pakhre',
      deliveryAddress:
        'E/701, Om Sai Heights, Yashwant Gaurav road, Nalasopara (West), Palghar - 401203',
      mobileNumber: 8097048449,
      circleColor: '#7540FD',
      lineColor: '#3D3D3D',
      cake: 'Black Forest',
      extraUtilities: 'None',
      freezeTime: '16th Oct',
      eventExpired: false,
    },
  ];

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#fff" />
      {false ? (
        <View style={{flex: 1}}>
          <Timeline
            circleSize={20}
            circleColor="gray"
            lineColor="red"
            timeContainerStyle={{minWidth: 50}}
            timeStyle={{
              textAlign: 'center',
              color: '#7540FD',
              fontWeight: 'bold',
            }}
            descriptionStyle={{color: 'gray'}}
            options={{
              showsVerticalScrollIndicator: false,
              bounces: true,
              alwaysBounceVertical: true,
            }}
            isUsingFlatlist={true}
            //..other props
            data={data}
            renderDetail={renderDetail}
          />
        </View>
      ) : (
        <View style={styles.nodata_wrapper}>
          <Image
            source={require('../../assets/images/noplans.png')}
            style={styles.nodata_img}
          />
          <View style={styles.floatButton}>
            <Image
              source={require('../../assets/images/plus.png')}
              style={styles.nodataText}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '3%',
    backgroundColor: 'white',
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    flexDirection: 'row',
    paddingRight: 50,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textDescription: {
    marginLeft: 10,
    color: 'gray',
  },
  nodata_wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nodata_img: {
    position: 'relative',
    height: SIZES.width / 1,
    width: SIZES.width / 1.5,
  },
  floatButton: {
    position: 'absolute',
    backgroundColor: '#7540FD',
    right: SIZES.width / 30,
    bottom: SIZES.width / 10,
    borderRadius: SIZES.width / 4.5,
    width: SIZES.width / 6,
    height: SIZES.width / 6,
  },
  nodataText: {
    width: SIZES.width / 20,
    height: SIZES.width / 20,
    marginVertical: SIZES.width / 17,
    marginHorizontal: SIZES.width / 17,
  },
});
