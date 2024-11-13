<template>
    <div>
      <h1>{{ userId ? 'Editar' : 'Criar' }} Usuário</h1>
      <form @submit.prevent="saveUser">
        <input type="hidden" v-model="userId" />
        <div>
          <label for="name">Nome:</label>
          <input type="text" v-model="name" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label for="phone">Telefone:</label>
          <input type="text" v-model="phone" />
        </div>
        <button type="submit">{{ userId ? 'Salvar Alterações' : 'Criar Usuário' }}</button>
      </form>
      <button @click="goToUserList">Cancelar</button>
    </div>
  </template>
  
  <script>
  import { getUser, createUser, updateUser } from '../../api/UserService';
  
  export default {
    data() {
      return {
        userId: null,
        name: '',
        email: '',
        phone: ''
      };
    },
    methods: {
      async fetchUser() {
        try {
          const response = await getUser(this.userId);
          const user = response.data;
          this.name = user.name;
          this.email = user.email;
          this.phone = user.phone;
        } catch (error) {
          console.error('Erro ao buscar usuário:', error);
        }
      },
      async saveUser() {
        const user = {
          name: this.name,
          email: this.email,
          phone: this.phone
        };
  
        try {
          if (this.userId) {
            await updateUser(this.userId, user);
          } else {
            await createUser(user);
          }
          this.$router.push('/');
        } catch (error) {
          console.error('Erro ao salvar usuário:', error);
        }
      },
      goToUserList() {
        this.$router.push('/');
      }
    },
    created() {
      if (this.$route.params.id) {
        this.userId = this.$route.params.id;
        this.fetchUser();
      }
    }
  };
  </script>