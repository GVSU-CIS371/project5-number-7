
<template>

  <!-- your answer -->
  
    <v-hover v-slot:default="{ isHovering, props }" >
  <v-card class="ma-4" max-width="475"  v-bind="props" :elevation="isHovering ? 12 : 2">


    <v-card-item class="ml-4 mt-4 mb-" >
      <v-card-title class="font-weight-bold">Gamer's Delight Laptop</v-card-title>
    </v-card-item>


    <v-card-item class="ml-4 mt-n2 px-4">
      <span><v-icon
        icon="mdi mdi-star"
        size="small"
        color="#ffd700"
      </v-icon><v-icon
        icon="mdi mdi-star"
        size="small"
        color="#ffd700"
      </v-icon><v-icon
        icon="mdi mdi-star"
        size="small"
        color="#ffd700"
      </v-icon><v-icon
        icon="mdi mdi-star"
        size="small"
        color="#ffd700"
      </v-icon><v-icon
        icon="mdi mdi-star-outline"
        size="small"
        color="#ffd700"
      </v-icon></span>  
      

      <span class="px-6"><v-icon
        icon="mdi mdi-cash"
        size="large"
        color="green"
      </v-icon> 1200</span> 


       <span><v-icon
        icon=" mdi mdi-package-variant-closed"
        size="large"
        color="blue"
      </v-icon>10</span>
    </v-card-item>
    

    <v-card-item class="ma-4">
      <v-img
        src="https://m.media-amazon.com/images/I/31TcnQiBTpL._AC_UF894,1000_QL80_.jpg"
      >
      </v-img>
    </v-card-item>


    <v-card-item class="mx-14 pb-14" >
      A powerful gaming laptop with top-tier graphics and performance for immersive gaming experiences.
    </v-card-item>
   
 
 
  </v-card>
    </v-hover>




  
 
</template>



<script lang="ts" setup>




</script>

