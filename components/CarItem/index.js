import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

const CarItem = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagline}</Text>
        <Text style={styles.subtitleCTA}>Price: {taglineCTA}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type='primary'
          content={'Add to Cart'}
          onPress={() => {
            console.warn('Added to Cart');
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
