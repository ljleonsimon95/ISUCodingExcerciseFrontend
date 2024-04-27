<template>
  <div class="users-list">
    <h2>Users list</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td class="client_name">
            {{ user.name }}
            <router-link :to="'/users/' + user.id">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path
                  d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-134 0-244.5-72T61-462q-5-9-7.5-18.5T51-500q0-10 2.5-19.5T61-538q64-118 174.5-190T480-800q134 0 244.5 72T899-538q5 9 7.5 18.5T909-500q0 10-2.5 19.5T899-462q-64 118-174.5 190T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"
                />
              </svg>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const users = ref([]);

onMounted(() => {
  fetchUsers();
});

const fetchUsers = async () => {
  try {
    const response = await fetch("http://localhost:5290/api/users");
    const data = await response.json();
    users.value = data;
  } catch (error) {
    console.error("Error fetching users list:", error);
  }
};
</script>

<style scoped>
.users-list {
  margin: 20px;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

th {
  background-color: #f2f2f2;
  padding: 10px;
  text-align: center;
}

td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

h2 {
  margin-bottom: 10px;
}
</style>
