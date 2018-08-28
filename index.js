import { Platform, ScrollView, FlatList } from 'react-native';

const sv = Platform.OS === 'android'
? require('./lib/NestedScrollView')
: ScrollView;

const fl = Platform.OS === 'android'
? require('./lib/FlatList')
: FlatList;

export {
  fl as FlatList,
  sv as ScrollView
}
