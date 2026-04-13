<template>
  <div class="container">
    <h1 class="title">Available Products</h1>
    
    <div v-if="loading" class="loading">
      Products fetch ho rahe hain, thora intezar karein...
    </div>

    <div v-else class="product-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <div class="product-image">📦</div>
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-price">Rs. {{ product.price }}</p>
        <button class="add-btn" @click="addToCart(product.name)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// Variables to store data
const products = ref([])
const loading = ref(true)

// Backend se data mangwane ka function
const fetchProducts = async () => {
  try {
    // Aapka backend local port 3000 par chal raha hai
    const response = await axios.get('http://localhost:3000/api/products')
    products.value = response.data
    loading.value = false
  } catch (error) {
    console.error("Data mangwane mein masla hua:", error)
    alert("Backend connect nahi ho raha. Check karein ke node index.js chal raha hai?")
    loading.value = false
  }
}

// Jab page load ho to products mangwao
onMounted(() => {
  fetchProducts()
})

const addToCart = (name) => {
  alert(name + " aapke cart mein add ho gaya!")
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Arial', sans-serif;
}

.title {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 40px;
  font-size: 2.5rem;
}

.loading {
  text-align: center;
  font-size: 1.2rem;
  color: #666;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.product-card {
  background: white;
  border-radius: 15px;
  padding: 25px;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  border: 1px solid #eee;
}

.product-card:hover {
  transform: translateY(-10px);
}

.product-image {
  font-size: 4rem;
  margin-bottom: 15px;
}

.product-name {
  font-size: 1.4rem;
  color: #333;
  margin: 10px 0;
}

.product-price {
  font-size: 1.2rem;
  color: #42b983;
  font-weight: bold;
  margin-bottom: 20px;
}

.add-btn {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background 0.3s;
}

.add-btn:hover {
  background-color: #369b6d;
}
</style>