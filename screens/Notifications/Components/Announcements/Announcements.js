import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, SafeAreaView, ImageBackground } from 'react-native';
import { FONTS, images, SIZES } from "../../../../constants";

const Announcements = () => {
  return (
    <View style={styles.wrapper}>
      <Image
        source={require('../../../../assets/images/announcement.png')}
        style={{ height: SIZES.width / 1.5, width: SIZES.width / 1.5 }}
      />
    </View>
  );
};

export default Announcements;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFF',
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center'
  },
});