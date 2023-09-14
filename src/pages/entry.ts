import './root.less';
import {router} from 'san-router';
import Index from './IndexPage/Index.san';

const app = document.getElementById('app');

router.add({rule: '/', Component: Index, target: '#app'});

router.start();