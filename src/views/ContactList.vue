<template>
  <div class="contact-list">
    <h1>Lista de Contatos</h1>
    <ul>
      <ContactItem
        v-for="contact in contacts"
        :key="contact.id"
        :contact="contact"
        @edit="editContact"
        @delete="deleteContact"
      />
    </ul>
    
  </div>
</template>


<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { contactService } from '../services/ContactService';
import ContactItem from '../components/ContactItem.vue';
import { Contact } from '../interfaces/Contact';

export default defineComponent({
  name: 'ContactList',
  components: { ContactItem },
  data() {
    return {
      contacts: [] as Contact[],
    };
  },
  created() {
    contactService.contacts$.subscribe((contacts) => {
      this.contacts = contacts;
    });
  },
  methods: {
    async fetchContacts() {
      await contactService.fetchContacts();
    },
    async deleteContact(id: number) {
      await contactService.deleteContact(id);
    },
    editContact(id:  string) {
      this.$router.push(`/edit/${id}`);
    },
  },
  mounted() {
    this.fetchContacts();
  },
});
</script>

<style scoped>
.contact-list {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

ul {
  list-style-type: none;
  padding: 0;
}

p {
  text-align: center;
  color: #777;
}
</style>