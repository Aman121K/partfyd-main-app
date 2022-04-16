import React, {useState, useCallback, useMemo, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Animated,
} from 'react-native';
import {CustomButton, FocusAwareStatusBar, TextField} from '../../components';
// import RNPickerSelect from "react-native-picker-select";
import {COLORS, SIZES} from '../../constants';
import {ToggleButton, Button} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
// import BottomSheet from "reanimated-bottom-sheet";
// import Animated from "react-native-reanimated";
import {Picker} from '@react-native-picker/picker';
import {Modalize} from 'react-native-modalize';

const CreateEvent = () => {
  const modalizeRef = useRef();
  const onOpen = () => {
    modalizeRef.current?.open();
  };
  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);
  const sheetRef = React.useRef(null);
  const [selectedLanguage, setSelectedLanguage] = useState();

  const fall = new Animated.Value(1);

  const handleSnapPress = () => {
    sheetRef.current.snapTo(0);
  };

  console.log(sheetRef);

  const [date, setDate] = useState(new Date());
  const [value, setValue] = React.useState('left');

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  const RenderContent = () => (
    <View
      style={{
        zIndex: 100,
        backgroundColor: '#f1f3f4',
        padding: SIZES.width / 40,
        height: '100%',
      }}>
      <Text>content</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View
        style={{
          paddingHorizontal: '3%',
        }}>
        <View style={styles.fieldsGap}>
          <TextField label={'Event Name'} />
        </View>

        <View style={styles.fieldsGap}>
          <TextField label={'Member Name'} />
        </View>

        <View
          style={[{borderWidth: 1, borderColor: COLORS.gray, borderRadius: 5}]}>
          <Picker
            style={{
              color: COLORS.gray,
            }}
            dropdownIconColor={COLORS.gray}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item
              color={COLORS.white}
              label="Birthday"
              value="birthday"
            />
            <Picker.Item
              color={COLORS.white}
              label="Anivarsary"
              value="anivarsary"
            />
          </Picker>
        </View>
        <View style={styles.fieldsGap}>
          <View style={styles.fieldsGap}>
            <Text
              style={{
                color: COLORS.primary,
                fontWeight: 'bold',
                fontSize: SIZES.body3,
              }}>
              Select Gender
            </Text>
          </View>

          <ToggleButton.Row
            onValueChange={value => setValue(value)}
            value={value}>
            <ToggleButton
              style={{minWidth: '33.33%'}}
              icon={() => (
                <View>
                  <Text style={{color: COLORS.gray}}>Male</Text>
                </View>
              )}
              value="male"
            />
            <ToggleButton
              style={{minWidth: '33.33%'}}
              icon={() => (
                <View>
                  <Text style={{color: COLORS.gray}}>Female</Text>
                </View>
              )}
              value="female"
            />
            <ToggleButton
              style={{minWidth: '33.33%'}}
              icon={() => (
                <View>
                  <Text style={{color: COLORS.gray}}>Other</Text>
                </View>
              )}
              value="other"
            />
          </ToggleButton.Row>
        </View>

        <View
          style={[{borderWidth: 1, borderColor: COLORS.gray, borderRadius: 5}]}>
          <Picker
            style={{
              color: COLORS.gray,
            }}
            dropdownIconColor={COLORS.gray}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item color={COLORS.white} label="Monthly" value="month" />
            <Picker.Item color={COLORS.white} label="Anually" value="annual" />
          </Picker>
        </View>

        <View style={styles.fieldsGap}>
          <TextField label={'Name/Message on cake'} />
        </View>

        <View
          style={[{borderWidth: 1, borderColor: COLORS.gray, borderRadius: 5}]}>
          <Picker
            style={{
              color: COLORS.gray,
            }}
            dropdownIconColor={COLORS.gray}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item
              color={COLORS.white}
              label="Midnight 12am"
              value="midnight"
            />
            <Picker.Item
              color={COLORS.white}
              label="Midday 10am-2pm"
              value="midday"
            />
            <Picker.Item
              color={COLORS.white}
              label="Early evening 4pm-6:30pm"
              value="earlyEvening"
            />
            <Picker.Item
              color={COLORS.white}
              label="Late evening 6:30pm-9pm"
              value="lateEvening"
            />
          </Picker>
        </View>

        <View style={styles.fieldsGap}>
          <TextField label={'Phone Number'} />
        </View>

        <View style={styles.fieldsGap}>
          <TextField label={'Pin Code'} />
        </View>

        <View style={styles.fieldsGap}>
          <TextField multiline={true} numberOfLines={4} label={'Address'} />
        </View>

        <View style={styles.fieldsGap}>
          <Button
            mode="contained"
            onPress={() => {
              onOpen();
              console.log('preqwhfi');
            }}>
            Select cake & utilities
          </Button>
        </View>
      </View>

      <Modalize ref={modalizeRef} snapPoint={700} modalHeight={700}>
        <Text style={{color: COLORS.gray}}>...your content</Text>
      </Modalize>
    </ScrollView>
  );
};

export default CreateEvent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fieldsGap: {
    paddingVertical: '2%',
  },
  header: {
    backgroundColor: COLORS.primaryLight,
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.primary,
    marginBottom: 10,
  },
});
