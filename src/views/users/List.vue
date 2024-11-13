<template>
    <div>
      <h1>Lista de Usuários</h1>
      <button @click="goToCreateUser">Criar Novo Usuário</button>
      <p></p>
      <table class='table' border="1">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>Criado Em</th>
          <th>Atualizado Em</th>
          <th colspan="2">Operações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.createdAt }}</td>
          <td>{{ user.updatedAt }}</td>
          <td colspan="2">
            <button @click="goToEditUser(user.id)">Editar</button>
            <button @click="deleteUser(user.id)">Excluir</button>
          </td>
        </tr>
      </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { getUsers, deleteUser } from '../../api/UserService';
  import { useRouter } from 'vue-router';
  
  export default {
    data() {
      return {
        users: []
      };
    },
    methods: {
      async fetchUsers() {
        try {
          const response = await getUsers();
          this.users = response.data;
        } catch (error) {
          console.error('Erro ao buscar usuários:', error);
        }
      },
      goToEditUser(id) {
        this.$router.push({ name: 'UsersForm', params: { id } });
      },
      goToCreateUser() {
        this.$router.push({ name: 'UsersCreate' });
      },
      async deleteUser(id) {
        try {
          await deleteUser(id);
          this.fetchUsers();
        } catch (error) {
          console.error('Erro ao excluir usuário:', error);
        }
      }
    },
    created() {
      this.fetchUsers();
    }
  };
  </script>