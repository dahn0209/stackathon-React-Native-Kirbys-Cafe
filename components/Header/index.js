import React from 'react';
import { View, Image } from 'react-native';
import MenuPick from '../MenuPick/index';

import styles from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/SmashBall.png')}
      />
      <MenuPick />
    </View>
  );
};

export default Header;
