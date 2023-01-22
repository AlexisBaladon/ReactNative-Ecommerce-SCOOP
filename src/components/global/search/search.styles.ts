import { StyleSheet } from 'react-native';
import { LIGHT_COLOR, MAIN_COLOR } from '../../../constants/styles';

const FILTER_WIDTH = 35;
const FILTER_HEIGHT = 30;
const FILTER_CONTAINER_FACTOR = 1.75; 

const styles = StyleSheet.create({
  search: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    
  },
  searchInputContainer: {
    backgroundColor: 'white',
    width: '77.5%', height: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,

    borderColor: LIGHT_COLOR,
    borderWidth: 1,
    borderRadius: 15,

    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1,
  },
  searchInput: {
    width: '100%', height: '100%',
    marginVertical: 2.5,
    marginLeft: 12.5,

    fontSize: 17.5,
  },
  magnifyingGlass: {
    height: 28, width: 27,
    marginLeft: 7.5,
  },
  filterContainer: {
    backgroundColor: MAIN_COLOR,
    borderRadius: 12.5,
    width: FILTER_WIDTH*FILTER_CONTAINER_FACTOR,
    height: FILTER_HEIGHT*FILTER_CONTAINER_FACTOR,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterImage: {
    width: FILTER_WIDTH, height: FILTER_HEIGHT,
  }
})

export default styles;