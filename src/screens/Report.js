import * as React from "react"
import Background from "../components/Background"
import { Text, Card, DataTable  } from 'react-native-paper';
import { userStore } from '../storage/user';
import { SafeAreaView, StatusBar, StyleSheet, ActivityIndicator , Button} from "react-native";
import { read } from '../services/crud';
const Report = ({ navigation }) =>{ 
  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(numberOfItemsPerPageList[2]);
  const [items, setItems] = React.useState([]);
  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setPage(0);
    onScreenLoad();
  }, [itemsPerPage]);

  
  const onScreenLoad = async () => {
    const data = await read();
    let datas = [];
    data.forEach((childsnap) => {
      let val = childsnap.data();
      val["$key"] = childsnap.id;
      datas.push(val);
    })
    setItems(datas);
    setIsLoading(false);
  }
  const dateChange = (timestamp) => {
    const milliseconds = timestamp.seconds * 1000 +  timestamp.nanoseconds / 1000000;
    const dateObj = new Date(milliseconds);
    const dateString = dateObj.toLocaleDateString();
    return dateString;
  }
  React.useEffect(() => {
    onScreenLoad();
  }, []);

  const _onDataSave = async () => {

  }
  return(
  <SafeAreaView>
     <Card>
        <Card.Title title="REPORTS"/>
        <Card.Content>
        {isLoading ? (
        <ActivityIndicator size="large" />
          ) : (
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Date</DataTable.Title>
              <DataTable.Title>Barangay</DataTable.Title>
              <DataTable.Title>Gender</DataTable.Title>
              <DataTable.Title numeric>Total</DataTable.Title>
              <DataTable.Title numeric>Action</DataTable.Title>
            </DataTable.Header>

            {items.slice(from, to).map((item) => (
              
              <DataTable.Row key={item.$key}>
                <DataTable.Cell>{dateChange(item.date)}</DataTable.Cell>
                <DataTable.Cell>{item.barangay}</DataTable.Cell>
                <DataTable.Cell>{item.gender}</DataTable.Cell>
                <DataTable.Cell numeric>{item.total}</DataTable.Cell>
                <DataTable.Cell numeric>
                <Button mode="" title="Edit" onPress={() => navigation.navigate('Record', { data: item })}/>
                </DataTable.Cell>
              </DataTable.Row>
            ))}

            <DataTable.Pagination
              page={page}
              numberOfPages={Math.ceil(items.length / itemsPerPage)}
              onPageChange={(page) => setPage(page)}
              label={`${from + 1}-${to} of ${items.length}`}
              numberOfItemsPerPageList={numberOfItemsPerPageList}
              numberOfItemsPerPage={itemsPerPage}
              onItemsPerPageChange={onItemsPerPageChange}
              showFastPaginationControls
              selectPageDropdownLabel={'Rows per page'}
            />
          </DataTable>
          )}
        </Card.Content>
    </Card>
  </SafeAreaView>
)
}
export default React.memo(Report)