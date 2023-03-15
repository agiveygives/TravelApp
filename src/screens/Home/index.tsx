import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AttractionCard from '../../components/AttractionCard';
import Categories from '../../components/Categories';
import Title from '../../components/Title';
import styles from './styles';
import attractionsJson from '../../data/attractions.json';
import categoriesJson from '../../data/categories.json';
import ScreenProps from '../../types/stackNavigation';

const All = 'All';

const Home = () => {
  const {navigate} = useNavigation<ScreenProps<'Home'>>();
  const [selectedCategory, setSelectedCategory] = useState<string>(All);
  const [attractions, setAttractions] = useState<any>();
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    setAttractions(attractionsJson);
    setCategories(categoriesJson);
  }, []);

  useEffect(() => {
    if (selectedCategory === All) {
      setAttractions(attractionsJson);
    } else {
      setAttractions(
        attractionsJson.filter(attraction =>
          attraction.categories.includes(selectedCategory),
        ),
      );
    }
  }, [selectedCategory]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <View>
              <Title text="Where do" style={styles.thinTitle} />
              <Title text="you want to go" />

              <Title text="Explore attractions" style={styles.subTitle} />
            </View>

            <Categories
              selectedCategory={selectedCategory}
              onCategoryPress={setSelectedCategory}
              categories={[All, ...categories]}
            />
          </>
        }
        data={attractions}
        numColumns={2}
        keyExtractor={item => String(item?.id)}
        style={styles.list}
        contentContainerStyle={[styles.gap, styles.margin32]}
        columnWrapperStyle={styles.gap}
        renderItem={({item}) => (
          <AttractionCard
            onPress={() => navigate('AttractionDetails', {item})}
            title={item.name}
            location={item.city}
            imageSrc={item.images ? item.images[0] : ''}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No attractions found.</Text>
        }
      />
    </SafeAreaView>
  );
};

export default React.memo(Home);
