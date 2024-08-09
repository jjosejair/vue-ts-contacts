import { createRouter, createWebHistory } from 'vue-router';
import ContactList from '../views/ContactList.vue';
import ContactDetails from '../views/ContactDetails.vue';
import ContactEdit from '../views/ContactEdit.vue';
import ContactCreate from '../views/ContactCreate.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ContactList,
  },
  {
    path: '/contact/:id',
    name: 'ContactDetails',
    component: ContactDetails,
  },
  {
    path: '/edit/:id',
    name: 'ContactEdit',
    component: ContactEdit,
  },
  {
    path: '/create',
    name: 'ContactCreate',
    component: ContactCreate,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;