import React, { memo, useCallback } from "react"
import { SafeAreaView} from "react-native";
import { enGB, registerTranslation } from 'react-native-paper-dates';
import RecordForm from "../forms/RecordForm"

registerTranslation('en-GB', enGB);

const Record = ({ navigation }) =>{ 
  return(
    <SafeAreaView >
    <RecordForm navigation={navigation}/>
    </SafeAreaView> 
  );
}
export default memo(Record)