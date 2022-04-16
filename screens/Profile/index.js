import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { CustomButton, FocusAwareStatusBar } from "../../components";
import TextField from "../../components/TextField";
import { images, SIZES } from "../../constants";

const Profile = () => {
  return (
    <View
      style={{
        flex: 1,
        padding: "3%"
      }}
    >
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={{ alignItems: "center", paddingVertical: "8%" }}>
        <Image
          source={images.profileImage}
          style={{
            height: SIZES.width / 4,
            width: SIZES.width / 4
          }}
        />

        <View style={{ flexDirection: "row", marginVertical: "4%" }}>
          <Text style={{ marginRight: "1%" }}>Edit Photo</Text>
          <Image
            source={images.edit}
            style={{ height: SIZES.width / 22, width: SIZES.width / 22 }}
          />
        </View>
      </View>

      <View>
        <View style={styles.textField}>
          <TextField label={"Name"} />
        </View>

        <View style={styles.textField}>
          <TextField label={"Phone Number"} />
        </View>

        <View style={styles.textField}>
          <TextField label={"Email"} />
        </View>

        <CustomButton>submit</CustomButton>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  textField: {
    paddingVertical: "4%"
  }
});
