<template>
  <button @click="goToCreateUser" class="inline-flex items-center rounded-md bg-green-600 px-3 py-1 text-sm font-semibold text-white shadow-sm ring-2 ring-inset ring-green-500 hover:bg-green-150">Criar Novo Usuário</button><br/>
  <ul role="list" class="divide-y divide-gray-100">
    <li v-for="user in users" :key="user.email" class="flex justify-between gap-x-6 py-4">
      <div class="flex min-w-0 gap-x-4">
        <img class="size-12 flex-none rounded-full bg-gray-100" :src="getGravatarImage(user.email)" alt="" />
        <div class="min-w-0 flex-auto">
          <p class="text-sm/6 font-semibold text-gray-900">{{ user.name }}</p>
          <p class="mt-1 truncate text-xs/5 text-gray-500">
            <b>Id:</b> {{ user.id }} |
            <b>Email:</b> {{ user.email }} | 
            <b>Telefone:</b> {{ user.phone }} | 
            <b>Criado Em:</b> {{ user.createdAt }} |
            <b>Atualizado Em:</b> {{ user.updatedAt }}
          </p>
        </div>
      </div>
      <div class="shrink-0 sm:flex sm:flex-col sm:items-end">
        <p class="text-sm/8 text-gray-900">
          <span class="sm:block">
            <button type="button" @click="goToEditUser(user.id)" class="inline-flex items-center rounded-md bg-yellow-300 px-3 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              Editar
            </button>
          </span>
          <span class="sm:block">
            <button type="button" @click="deleteUser(user.id)" class="inline-flex items-center rounded-md bg-red-500 px-3 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              Excluir
            </button>
          </span>
        </p>
      </div>
    </li>
  </ul>
</template>
<script>
  import { getUsers, deleteUser } from '../../api/UserService';
  import { useRouter } from 'vue-router';
  import md5 from 'md5';

  export default {
    data() {
      return {
        users: []
      };
    },
    methods: {
      getGravatarImage(email){
        const hash = md5(email);
        return `https://www.gravatar.com/avatar/${hash}?s=200&d=identicon`
      },
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
<!--<template>
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
  </script>-->