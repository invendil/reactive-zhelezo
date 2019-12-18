import PartListScreen from '../views/PartList';
import CartListScreen from "../views/CartList";

/* Icon key is optional. It must be of type string and its value should match a valid provider icon
  name.
  To omit the icon just pass null on its value.
*/
export default [
  {fetchName: 'case', name: 'Компьютерный блок', screen: PartListScreen, icon: require('../assets/images/parts/case.png')},
  {fetchName: 'mainMemory', name: 'Оперативная память', screen: PartListScreen, icon: require('../assets/images/parts/main-memory.png')},
  {fetchName: 'motherboard', name: 'Материнская плата', screen: PartListScreen, icon: require('../assets/images/parts/motherboard.png')},
  {fetchName: 'powerSuit', name: 'Блок питания', screen: PartListScreen, icon: require('../assets/images/parts/power-suit.png')},
  {fetchName: 'processor', name: 'Процессор', screen: PartListScreen, icon: require('../assets/images/parts/processor.png')},
  {fetchName: 'storage', name: 'Жесткий диск', screen: PartListScreen, icon: require('../assets/images/parts/storage.png')},
  {fetchName: 'videoCard', name: 'Видео карта', screen: PartListScreen, icon: require('../assets/images/parts/video-card.png')},
  {name: 'Корзина', screen: CartListScreen},
];
