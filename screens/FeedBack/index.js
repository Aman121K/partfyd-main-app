import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, SafeAreaView, ImageBackground } from 'react-native';
import { FONTS, images, SIZES } from "../../constants";
import { CustomButton } from "../../components";

const FeedBack = () => {
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.wrapper}>
      <Image
        source={require('../../assets/images/FeedBack.png')}
        style={{ height: SIZES.width / 1.5, width: SIZES.width / 1.5 }}
      />
      <View style={styles.textAreaContainer} >
            <TextInput
              style={styles.textArea}
              underlineColorAndroid="transparent"
              placeholder="Please help us improve by sharing your experience with us!"
              placeholderTextColor="grey"
              numberOfLines={10}
              multiline={true}
            />
          </View>
          <View style={styles.otpbtn}>
        <CustomButton btnRadius={20} btnbgcolor="#7540FD">Submit</CustomButton>
      </View>
    </View>
  );
};

export default FeedBack;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center'
  },
  otpbtn: {
    marginTop: SIZES.width / 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAreaContainer: {
    borderColor: '#999',
    borderWidth: 2,
    padding: SIZES.width / 28,
    borderRadius: SIZES.width / 45
  },
  textArea: {
    width:SIZES.width / 1.3,
    height: SIZES.width / 2,
    justifyContent: "flex-start",
    textAlignVertical: 'top'
  },
});