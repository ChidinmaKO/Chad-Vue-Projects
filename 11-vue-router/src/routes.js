import Home from './components/Home.vue';
import User from './components/user/User.vue';
import UserEdit from './components/user/UserEdit.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserStart from './components/user/UserStart.vue';


export const routes = [
    { path: '', component: Home, name: 'home' },
    { path: '/user', component: User, children: [
        { path: '', component: UserStart, name: 'userStart' },
        { path: ':id', component: UserDetail, name: 'userDetail', beforeEnter: (to, from, next) => {
            console.log('before enter');
            
            next();
        } },
        { path: ':id/edit', component: UserEdit, name: 'userEdit' }
    ] },
    { path: '/usr', redirect: '/user' },
    { path: '*', redirect: { name: 'home' } }
];