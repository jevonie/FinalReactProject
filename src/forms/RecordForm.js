import React, { memo, useCallback } from "react"
import Background from "../components/Background"
import TextInput from "../components/TextInput";
import { userStore } from '../storage/user';
import { Text, Card,Button , TextInput as OrigTextInput } from 'react-native-paper';
import DropDown from "react-native-paper-dropdown";
import DropDownPicker from 'react-native-dropdown-picker';
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { enGB, registerTranslation, DatePickerInput } from 'react-native-paper-dates';
import { theme } from "../core/theme"
import { add } from '../services/crud';
import { useRoute } from "@react-navigation/native"
import { useFocusEffect } from '@react-navigation/native';

registerTranslation('en-GB', enGB);

const RecordForm = ({ navigation }) =>{ 
  const route = useRoute();
  var data = route.params?.data;
  const name = userStore(state => state.userName)
  const removeToken = userStore(state => state.removeToken)
  const [inputDate, setInputDate] = React.useState(undefined)
  const [showDropDown, setShowDropDown] = React.useState(false);
  const [gender, setGender] = React.useState("");
  const [barangay, setBarangay] = React.useState("");
  const [total, setTotal] = React.useState("");

  const  genderList = [
    { label:  'Male', value:  'male' },
    { label:  'Female', value:  'female' },
    { label:  'Others', value:  'others' },
  ];
  DropDownPicker.setMode("BADGE");

  const _onDataSave = async () => {
    try {
        const saved = await add(barangay, inputDate, total, gender);
        if(saved){
          console.log("saved!");
        }
    } catch (error) {
        console.log(error);
    }
  };

  React.useEffect(() => {
    
    console.log(route.params?.data);
    setGender(route.params?.data?.gender);
    setTotal(route.params?.data?.total);
    setBarangay(route.params?.data?.barangay)
  }, [data]);
  return(

      
      <Card style={{width: "100%"}}>
          <Card.Title title="ADD RECORD"/>
          <Card.Content>
          <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center',paddingBottom: 30,paddingTop: 20 }}>
            <DatePickerInput
              locale="en"
              label="Date"
              value={inputDate}
              onChange={(d) => setInputDate(d)}
              inputMode="start"
              style={{backgroundColor: "white", borderColor: "black"}}
            />
          </View>
            <DropDown
              label={'Gender'}
              mode={'outlined'}
              value={gender}
              setValue={setGender}
              list={genderList}
              visible={showDropDown}
              showDropDown={() =>  setShowDropDown(true)}
              onDismiss={() =>  setShowDropDown(false)}
              inputProps={{
              right:  <OrigTextInput.Icon  name={'menu-down'}  />,
              }}

            />
          <TextInput
            label="Barangay"
            value={barangay}
            onChangeText={setBarangay}
          />
          <TextInput
            label="Total"
            value={total}
            onChangeText={setTotal}
          />
          <Button mode="contained" onPress={_onDataSave} style={styles.button}>
             {route.params ? "Update" : "Save"}
          </Button>
          </Card.Content>
        </Card>

)
}
const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary
  },
  button: {
    marginTop: 24
  },
  row: {
    flexDirection: "row",
    marginTop: 4
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary
  }
})
export default memo(RecordForm)