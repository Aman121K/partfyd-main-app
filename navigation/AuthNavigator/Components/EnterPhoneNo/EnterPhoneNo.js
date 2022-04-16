import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, SafeAreaView, ImageBackground } from 'react-native';
import { FONTS, images, SIZES } from "../../../../constants";
import { CustomButton } from "../../../../components";

const EnterPhoneNo = ({ navigation }) => {
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView style={styles.wrapper}>
      <ImageBackground
        style={{ flex: 1 }}
        source={require('../../../../assets/images/Otp-Verfication.jpg')}>
        <View style={styles.container}>
          <View style={styles.align}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Enter your mobile number"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.otpbtn}>
            <CustomButton
              onPress={() => navigation.navigate('OtpVerification')}
              btnbgcolor="#7540FD"
              btnRadius={20}
              btnpaddingVertical={SIZES.width / 60}
              btnpaddingHorizontal={SIZES.width / 20}
            >Get OTP</CustomButton>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default EnterPhoneNo;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
  },
  otpbtn: {
    marginTop: SIZES.width / 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
  },
  input: {
    color: 'black',
    justifyContent: 'flex-end',
    height: SIZES.width / 8,
    margin: 12,
    paddingLeft: 12,
    fontSize: SIZES.width / 24,
    width: SIZES.width / 1.4,
    borderRadius: SIZES.width / 40,
    borderWidth: 1,
    borderColor: '#828282',
    borderWidth: 2
  },
  align: {
    marginTop: SIZES.width / 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  }
});