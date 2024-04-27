<template>
  <div class="home-view">
    <h1>ISU Corp coding exercise</h1>

    <div class="button-container">
      <router-link to="/users">
        <button class="button">List all Users</button>
      </router-link>
    </div>

    <div class="button-container">
      <router-link to="/search-users">
        <button class="button">Get User info by Id</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.home-view {
  text-align: center;
}

.button-container {
  margin-bottom: 1em;
}

.button {
  padding: 1em 2em;
  font-size: 1.2em;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #45a049;
}
</style>
