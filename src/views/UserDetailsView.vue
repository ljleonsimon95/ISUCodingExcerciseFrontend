<template>
  <div class="user-details">
    <div v-if="userInfo" class="user-info">
      <h3 class="title">User information:</h3>
      <p class="info">Id: {{ userInfo.id }}</p>
      <p class="info">Name: {{ userInfo.name }}</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const userId = route.params.id;

const userInfo = ref(null);

onMounted(() => {
  fetchUserInfo();
});

const fetchUserInfo = async () => {
  try {
    console.log(userId);
    const response = await fetch(`http://localhost:5290/api/users/${userId}`);
    const data = await response.json();
    userInfo.value = data;
  } catch (error) {
    console.error("Error fetching user information:", error);
  }
};
</script>

<style>
.user-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.input-container {
  display: flex;
  align-items: center;
}

.input {
  flex-grow: 1;
  padding: 10px;
  font-size: 1rem;
}

.button {
  margin-left: 10px;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}

.user-info {
  margin-top: 20px;
}

.title {
  margin-top: 0;
  font-size: 2rem;
  font-weight: bold;
}

.info {
  margin: 10px 0;
  font-size: 1.5rem;
}
</style>
