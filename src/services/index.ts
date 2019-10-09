import searchRoutes from './search/routes';
import formRoutes from './layout/routes';
import checkUserName from './checkUserName/routes';
import translationRoutes from './translation/routes';
import styleRoutes from './style/routes';

export default [ ...searchRoutes, ...formRoutes, ...translationRoutes, ...styleRoutes, ...checkUserName ];
