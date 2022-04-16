import * as React from "react";
import { Button } from "react-native-paper";
import { Text } from 'react-native';

const CustomButton = ({ onPress, mode = "contained", icon,btnfontsize, children, btnpaddingVertical, btnRadius ,btnbgcolor,btnpaddingHorizontal}) => (
  <Button icon={icon}  mode={mode} onPress={onPress} style={{borderRadius: btnRadius, backgroundColor:btnbgcolor, paddingHorizontal: btnpaddingHorizontal, paddingVertical: btnpaddingVertical }}>
    <Text style={{fontSize: btnfontsize}}>{children}</Text>
  </Button>
);

export default CustomButton;
