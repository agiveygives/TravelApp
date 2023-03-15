import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    position: 'absolute',
    top: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    marginHorizontal: 24,
    width: width - 48,
  },
  backContainer: {
    padding: 16,
  },
  icon: {
    width: 36,
    height: 36,
    marginRight: 16,
  },
  title: {
    fontSize: 20,
    color: '#000',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
