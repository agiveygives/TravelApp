import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import React, {type FunctionComponent} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Share from 'react-native-share';
// @ts-ignore
import ImgToBase64 from 'react-native-image-base64';
import InfoCard from '../../components/InfoCard';
import Title from '../../components/Title';
import ScreenProps, {RootStackParamList} from '../../types/stackNavigation';
import styles from './styles';
import {ShareOpenResult} from 'react-native-share/lib/typescript/types';

const AttractionDetails: FunctionComponent = () => {
  const navigation = useNavigation<ScreenProps<'AttractionDetails'>>();
  const route = useRoute<RouteProp<RootStackParamList, 'AttractionDetails'>>();

  const {item} = route?.params || {};
  const images: string[] = item?.images?.length ? item.images : [];
  const mainImage = images.length ? item.images[0] : undefined;
  const slicedImages = images.length ? images.slice(0, 5) : [];
  const diffImages = images.length - slicedImages?.length;

  const coordinates = {
    latitude: item.coordinates.lat,
    longitude: item.coordinates.lon,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const splitImageUrl = mainImage?.split('?')[0]?.split('.') || '';
  const imageExtension = splitImageUrl[splitImageUrl.length - 1] || 'jpg';

  const onBack = () => {
    navigation.goBack();
  };

  const onGalleryNavigate = () => {
    navigation.navigate('Gallery', {images: images});
  };

  const onShare = async () => {
    try {
      const base64Image = (await ImgToBase64.getBase64String(
        mainImage,
      )) as ShareOpenResult;

      await Share.open({
        title: item.name,
        message: 'Check out this amazing attraction!',
        url: `data:image/${imageExtension};base64,${base64Image}`,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          style={styles.mainImageContainer}
          imageStyle={styles.mainImage}
          source={{uri: mainImage}}>
          <View style={styles.header}>
            <Pressable hitSlop={8} onPress={onBack}>
              <Image
                source={require('../../assets/back.png')}
                style={styles.icon}
              />
            </Pressable>

            <Pressable hitSlop={8} onPress={onShare}>
              <Image
                source={require('../../assets/share.png')}
                style={styles.icon}
              />
            </Pressable>
          </View>

          <Pressable style={styles.footer} onPress={onGalleryNavigate}>
            {slicedImages?.map((image, index) => (
              <View key={image}>
                <Image source={{uri: image}} style={styles.imagePreview} />
                {diffImages > 0 && index === slicedImages?.length - 1 ? (
                  <View style={styles.moreImagesContainer}>
                    <Text style={styles.moreImages}>{`+${diffImages}`}</Text>
                  </View>
                ) : null}
              </View>
            ))}
          </Pressable>
        </ImageBackground>

        <View style={styles.headerContainer}>
          <View style={styles.titleContainer}>
            <Title style={styles.title} text={item?.name} />
            <Text style={styles.city}>{item?.city}</Text>
          </View>

          <Title style={styles.title} text={item?.entry_price} />
        </View>

        <InfoCard
          icon={require('../../assets/location_circle.png')}
          text={item?.address}
        />
        <InfoCard
          icon={require('../../assets/schedule.png')}
          text={`OPEN\n${item?.opening_time} - ${item?.closing_time}`}
        />

        <MapView style={styles.map} initialRegion={coordinates}>
          <Marker coordinate={coordinates} title={item.name} />
        </MapView>

        <Text
          style={styles.mapText}
          onPress={() =>
            navigation.navigate('Map', {
              coordinates,
              name: item.name,
              city: item.city,
            })
          }>
          Show full map
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(AttractionDetails);
