import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ImageBackground
} from "react-native";
import { FONTS, images, SIZES } from "../../../../constants";
import { CustomButton } from "../../../../components";
import useAuth from "../../../../auth/useAuth";
import customAxios from "../../../../utils/interceptor";

const OtpVerification = ({ navigation }) => {
  const auth = useAuth();
  const [number, onChangeNumber] = React.useState(null);

  const handleLogin = async () => {
    try {
      const result = await customAxios.post("/auth/login", {
        phone: "8169029085"
      });
      auth.logIn(result.data.token);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../../../../assets/images/Verfication-Code.jpg")}
      >
        <View style={styles.container}>
          <View style={styles.align}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Enter your OTP number"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.otpbtn}>
            <CustomButton
              onPress={() => handleLogin()}
              btnbgcolor="#7540FD"
              btnRadius={20}
              btnpaddingVertical={SIZES.width / 60}
              btnpaddingHorizontal={SIZES.width / 20}
              btnfontsize={SIZES.width / 25}
            >
              Verify
            </CustomButton>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  otpbtn: {
    marginTop: SIZES.width / 5,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  input: {
    color: "black",
    justifyContent: "flex-end",
    height: SIZES.width / 8,
    margin: 12,
    paddingLeft: 12,
    fontSize: SIZES.width / 24,
    width: SIZES.width / 1.4,
    borderRadius: SIZES.width / 40,
    borderWidth: 1,
    borderColor: "#828282",
    borderWidth: 2
  },
  align: {
    marginTop: SIZES.width / 1.5,
    justifyContent: "center",
    alignItems: "center"
  }
});
