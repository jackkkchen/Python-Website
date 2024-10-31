<template>
  <div class="container mx-auto px-4">
    <h1 class="text-3xl font-bold mb-8">Python 教程</h1>
    
    <!-- 添加导航链接 -->
    <nav class="mb-8">
      <NuxtLink 
        to="/tutorial" 
        class="text-blue-600 hover:text-blue-800"
      >
        进入教程
      </NuxtLink>
    </nav>
    
    <!-- 教程列表 -->
    <div class="grid gap-4">
      <ContentList path="/tutorial" v-slot="{ list }">
        <div v-for="article in list" :key="article._path" 
             class="p-4 border rounded hover:shadow-lg transition duration-300">
          <NuxtLink :to="article._path" class="block">
            <h2 class="text-xl font-semibold mb-2">{{ article.title }}</h2>
            <p class="text-gray-600">{{ article.description }}</p>
          </NuxtLink>
        </div>
      </ContentList>
    </div>
  </div>
</template>