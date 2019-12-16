import PartListScreen from '../Views/PartList';
import BookingScreen from '../Views/Booking';
import AboutScreen from '../Views/About';
import CreditsScreen from '../Views/Credits';

/* Icon key is optional. It must be of type string and its value should match a valid provider icon
  name.
  To omit the icon just pass null on its value.
*/
export default [
  {name: 'Жесткий диск', screen: PartListScreen, icon: require('../assets/images/parts/storage.png')},
  {name: 'Оперативна память', screen: PartListScreen, icon: require('../assets/images/parts/main-memory.png')},
  {name: 'Видео карта', screen: PartListScreen, icon: require('../assets/images/parts/video-card.png')},
  {name: 'Процессор', screen: PartListScreen, icon: require('../assets/images/parts/processor.png')},
  {name: 'Блок питания', screen: PartListScreen, icon: require('../assets/images/parts/power-suit.png')},
  {name: 'Компьютерный блок', screen: PartListScreen, icon: require('../assets/images/parts/case.png')},
  {name: 'Материнская плата', screen: PartListScreen, icon: require('../assets/images/parts/motherboard.png')}
];
