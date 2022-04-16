import React, { useState,useEffect } from 'react'
import { Text, View, StyleSheet } from "react-native";
import { FONTS, images, SIZES } from "../../constants";

import MultiSlider from '@ptomasroos/react-native-multi-slider'
import { Platform } from 'react-native'

const Slider = (props) => {
  const [multiSliderValue, setMultiSliderValue] = useState([])

  useEffect(() =>{
    if(!!props){
        setMultiSliderValue([props.selectedCount,props.sliderCount])
    }
  },[]);

  const multiSliderValuesChange = (values) => setMultiSliderValue(values)

  return (
    <View>
      <View>
        <View style={styles.LabelWrapper}>
          <Text style={styles.LabelText}>{multiSliderValue[0]} {props.textLable}</Text>
        </View>
        <MultiSlider
          markerStyle={{
            ...Platform.select({
              ios: {
                height: 30,
                width: 30,
                shadowColor: '#000000',
                shadowOffset: {
                  width: 0,
                  height: 3
                },
                shadowRadius: 1,
                shadowOpacity: 0.1
              },
              android: {
                height: 20,
                width: 20,
                borderWidth: 1.3,
                borderColor: '#CCC',
                borderRadius: 50,
                marginTop: 4,
                backgroundColor: '#FFF'
              }
            })
          }}
          pressedMarkerStyle={{
            ...Platform.select({
              android: {
                height: 30,
                width: 30,
                borderRadius: 20,
                backgroundColor: '#148ADC'
              }
            })
          }}
          selectedStyle={{
            backgroundColor: !!props.seekBarColor? props.seekBarColor : "#666"
          }}
          trackStyle={{
            backgroundColor: '#CECECE',
            height: 5,
            borderRadius: SIZES.width / 20
          }}
          touchDimensions={{
            height: 40,
            width: 40,
            borderRadius: 20,
            slipDisplacement: 40,
            
          }}
          values={[multiSliderValue[0]]}
          sliderLength={props.scrollwidth}
          onValuesChange={multiSliderValuesChange}
          min={0}
          max={props.sliderCount}
          allowOverlap={false}
          minMarkerOverlapDistance={10}
        />
      </View>
    </View>
  )
}

export default Slider;
const styles = StyleSheet.create({
  LabelWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  LabelText:{
    fontSize: SIZES.width / 32,
    color:'#777',
    fontWeight:'bold'
  }

});