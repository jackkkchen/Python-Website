<template>
  <div class="container mx-auto px-4">
    <h1 class="text-3xl font-bold mb-8">Python 教程</h1>
    
    <div class="grid gap-4">
      <ContentList path="/tutorial" v-slot="{ list }">
        <div v-for="article in list" :key="article._path" 
             class="p-4 border rounded hover:shadow-lg">
          <NuxtLink :to="article._path">
            <h2 class="text-xl font-semibold">{{ article.title }}</h2>
            <p class="text-gray-600">{{ article.description }}</p>
          </NuxtLink>
        </div>
      </ContentList>
    </div>
  </div>
</template>