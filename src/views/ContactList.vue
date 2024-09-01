<template>
  <div class="max-w-2xl mx-auto p-6 mt-10 bg-white rounded shadow">
    <h1 class="text-2xl font-bold mb-4">Lista de Contatos</h1>
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
import { defineComponent } from 'vue';
import { contactService } from '../services/ContactService';
import ContactItem from '../components/ContactItem.vue';
import { Contact } from '../models/Contact'; 

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
    editContact(id: number) {
      this.$router.push(`/edit/${id}`);
    },
  },
  mounted() {
    this.fetchContacts();
  },
});
</script>