<template>
    <main class="container">
      <header class="hero-section">
        <h1 class="title">🛍️Ibrahim Store</h1>
        <p class="subtitle">Best quality electronics at your doorstep</p>
      </header>
  
      <div v-if="loading" class="status loading">
        <div class="spinner"></div>
        <p>Fetching amazing products...</p>
      </div>
  
      <div v-else-if="error" class="status error">
        <div class="error-icon">⚠️</div>
        <p>{{ error }}</p>
        <button @click="fetchProducts" class="retry-btn">Dobara Koshish Karein</button>
      </div>
  
      <div v-else-if="products.length === 0" class="status empty">
        <p>Abhi koi products available nahi hain.</p>
      </div>
  
      <div v-else class="product-grid">
        <div 
          v-for="product in products" 
          :key="product.id" 
          class="product-card"
        >
          <div class="badge" v-if="product.price < 5000">Sale</div>
          <div class="product-image-container">
             <img v-if="product.image" :src="product.image" :alt="product.name" class="product-img">
             <span v-else class="placeholder-icon">📱</span>
          </div>
          
          <div class="product-info">
            <h3 class="product-name">{{ product.name }}</h3>
            <p class="product-category">Electronics</p>
            <p class="price">Rs. {{ product.price.toLocaleString() }}</p>
  
            <button 
              @click="addToCart(product)" 
              class="buy-btn"
            >
              Add to Cart 🛒
            </button>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  
  const products = ref([])
  const loading = ref(true)
  const error = ref(null)
  
  const fetchProducts = async () => {
    loading.value = true
    error.value = null
    try {
      // API Call
      const response = await axios.get('http://localhost:3000/api/products')
      products.value = response.data
    } catch (err) {
      console.error("Fetch Error:", err)
      error.value = "Server connect nahi ho raha. Check karein ke Backend chal raha hai?"
    } finally {
      loading.value = false
    }
  }
  
  onMounted(fetchProducts)
  
  const addToCart = (product) => {
    // Console par log karna professional practice hai
    console.log("Adding to cart:", product)
    alert(`✅ ${product.name} cart mein shamil kar diya gaya hai!`)
  }
  </script>
  
  <style scoped>
  /* Main Container */
  .container {
    padding: 40px 20px;
    max-width: 1200px;
    margin: auto;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  /* Header Section */
  .hero-section {
    margin-bottom: 50px;
    text-align: center;
  }
  
  .title {
    font-size: 2.8rem;
    font-weight: 800;
    color: #1a1a1a;
    margin-bottom: 10px;
  }
  
  .subtitle {
    color: #666;
    font-size: 1.1rem;
  }
  
  /* Status Messages & Spinner */
  .status {
    text-align: center;
    padding: 50px;
    background: #f9f9f9;
    border-radius: 20px;
  }
  
  .spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #42b983;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 20px;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  /* Product Grid */
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 30px;
  }
  
  /* Product Card Design */
  .product-card {
    position: relative;
    border-radius: 20px;
    background: #ffffff;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 1px solid #f0f0f0;
  }
  
  .product-card:hover {
    transform: translateY(-12px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.12);
  }
  
  .badge {
    position: absolute;
    top: 15px;
    right: 15px;
    background: #ff4757;
    color: white;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: bold;
    z-index: 1;
  }
  
  .product-image-container {
    height: 200px;
    background: #f8f9fa;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .placeholder-icon {
    font-size: 4rem;
  }
  
  .product-info {
    padding: 20px;
    text-align: left;
  }
  
  .product-name {
    font-size: 1.25rem;
    color: #2d3436;
    margin-bottom: 5px;
  }
  
  .product-category {
    color: #a0a0a0;
    font-size: 0.9rem;
    margin-bottom: 10px;
  }
  
  .price {
    font-size: 1.4rem;
    color: #2ecc71;
    font-weight: 700;
    margin-bottom: 20px;
  }
  
  /* Professional Button */
  .buy-btn {
    width: 100%;
    background: #1a1a1a;
    color: white;
    border: none;
    padding: 14px;
    border-radius: 12px;
    cursor: pointer;
    font-weight: 600;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  
  .buy-btn:hover {
    background: #42b983;
    box-shadow: 0 8px 15px rgba(66, 185, 131, 0.3);
  }
  
  .retry-btn {
    margin-top: 15px;
    padding: 10px 20px;
    border-radius: 8px;
    border: none;
    background: #3498db;
    color: white;
    cursor: pointer;
  }
  </style>