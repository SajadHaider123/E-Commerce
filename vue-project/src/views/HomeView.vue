<template>
  <main class="container">
    <h1>Available Products</h1>
    
    <div v-if="loading">Products load ho rahe hain...</div>
    
    <div v-else class="product-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <div class="product-icon">📦</div>
        <h3>{{ product.name }}</h3>
        <p class="price">Rs. {{ product.price }}</p>
        <button @click="addToCart(product.name)" class="buy-btn">Add to Cart</button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const products = ref([])
const loading = ref(true)

// Jab page load hoga, ye function chalega
onMounted(async () => {
  try {
    // Port 3000 wale backend se data mangwana
    const response = await axios.get('http://localhost:3000/api/products')
    products.value = response.data
    loading.value = false
  } catch (error) {
    console.error("Backend se data nahi mila:", error)
    loading.default = false
  }
})

const addToCart = (name) => {
  alert(name + " cart mein add ho gaya hai!")
}
</script>

<style scoped>
.container { padding: 20px; text-align: center; }
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
.product-card {
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}
.product-card:hover { transform: translateY(-5px); }
.product-icon { font-size: 3rem; margin-bottom: 10px; }
.price { font-size: 1.2rem; color: #2c3e50; font-weight: bold; }
.buy-btn {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}
.buy-btn:hover { background-color: #3aa876; }
</style>