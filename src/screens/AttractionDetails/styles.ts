import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 32,
  },
  mainImageContainer: {
    width: '100%',
    height: height / 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainImage: {
    borderRadius: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  icon: {
    width: 36,
    height: 36,
    margin: 16,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'rgba(256,256,256,0.35)',
    margin: 16,
    paddingHorizontal: 8,
  },
  imagePreview: {
    width: 40,
    height: 40,
    marginHorizontal: 4,
    marginVertical: 8,
    borderRadius: 10,
  },
  moreImages: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  moreImagesContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.38)',
    width: 40,
    height: 40,
    top: 8,
    left: 4,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 40,
  },
  titleContainer: {
    maxWidth: '75%',
  },
  title: {
    color: '#000000',
  },
  city: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
    marginTop: 8,
  },
  map: {
    width: '100%',
    height: 400,
    borderRadius: 20,
  },
  mapText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#4681A3',
    textAlign: 'center',
    padding: 16,
    marginBottom: 20,
  },
});

export default styles;
