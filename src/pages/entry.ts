import './root.less';
import {router} from 'san-router';

router.setMode('html5' as any);
router.add({
  rule: '/',
  Component: () => import('./CompPage/index'),
  target: '#app',
});

router.start();
