import { createRouter, createWebHistory } from 'vue-router';
import ContactList from '../views/contact-list.vue';
import ContactDetails from '../views/contact-create.vue';
import ContactEdit from '../views/contact-edit.vue';
import ContactCreate from '../views/contact-create.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ContactList,
  },
  {
    path: '/contact/:id',
    name: 'contact-details',
    component: ContactDetails,
  },
  {
    path: '/edit/:id',
    name: 'ContactEdit',
    component: ContactEdit,
  },
  {
    path: '/create',
    name: 'contac-tcreate',
    component: ContactCreate,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;