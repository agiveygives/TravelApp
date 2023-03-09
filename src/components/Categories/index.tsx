import React from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

type Props = {
  categories: string[];
  selectedCategory: string;
  onCategoryPress: (selectedCategory: string) => void;
};

const Categories = ({categories, selectedCategory, onCategoryPress}: Props) => {
  return (
    <FlatList
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => String(item)}
      data={categories}
      renderItem={({item}) => {
        const isSelected = selectedCategory === item;

        return (
          <TouchableOpacity
            onPress={() => onCategoryPress(item)}
            style={[
              styles.categoryContainer,
              isSelected ? styles.selectedContainer : {},
            ]}>
            <Text style={[styles.category, isSelected ? styles.selected : {}]}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default React.memo(Categories);
