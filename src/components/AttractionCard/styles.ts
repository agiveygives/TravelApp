import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    padding: 4,
    borderWidth: 1,
    borderColor: '#e2e2e2',
    borderRadius: 15,
  },
  image: {
    width: (width - 96) / 2,
    height: 120,
    borderRadius: 10,
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 12,
    marginLeft: 6,
    color: '#000000',
  },
  subtitle: {
    fontSize: 10,
    fontWeight: '300',
    color: 'rgba(0,0,0,0.5)',
  },
  location: {
    height: 10,
    width: 10,
    marginRight: 6,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    marginLeft: 6,
    marginTop: 4,
  },
});

export default styles;
