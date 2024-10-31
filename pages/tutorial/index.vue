<template>
  <ContentNavigation v-slot="{ navigation }" :query="queryContent('/Python-Website/')">
    <TutNav :nav="navigation[0].children" />
  </ContentNavigation>
</template>