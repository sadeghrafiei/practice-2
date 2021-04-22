import * as React from 'react';
import { DrawerItem , DrawerContentScrollView} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';


export function CustomDrawerContent(props) {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Archive"
        onPress={() => {
          navigation.navigate('Archive');
        }}
      />
    </DrawerContentScrollView>
  );
}
