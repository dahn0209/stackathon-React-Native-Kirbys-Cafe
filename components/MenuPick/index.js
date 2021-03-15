import React from 'react';
import {
  View,
  Image,
  Text,
  Platform,
  StyleSheet,
  Alert,
  LogBox,
} from 'react-native';
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import styles from './styles';

function MenuPick() {
  function pressHandler() {
    navigation.navigae('');
  }

  return (
    <View style={styles.container}>
      <MenuProvider style={{ flexDirection: 'column', padding: 90 }}>
        <View>
          <Menu onSelect={(value) => alert(`You Clicked : ${value}`)}>
            <MenuTrigger>
              <Text style={styles.headerText}>Menu</Text>
            </MenuTrigger>
            <MenuOptions style={styles.menuContainer}>
              <MenuOption>
                <Text style={styles.menuContent}></Text>
              </MenuOption>
              <MenuOption value={'Home'}>
                <Text style={styles.menuContent}>Home</Text>
              </MenuOption>
              <MenuOption value={'Login'}>
                <Text style={styles.menuContent}>Login</Text>
              </MenuOption>
              <MenuOption value={'Sign Up'}>
                <Text style={styles.menuContent}>Sign Up</Text>
              </MenuOption>
              <MenuOption value={'Logout'}>
                <Text style={styles.menuContent}>Logout</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
      </MenuProvider>
    </View>
  );
}

export default MenuPick;
