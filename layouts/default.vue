<template>
  <div>
    <AppHeader h="6vh" />
    <div p="t-8vh l-50px r-50px b-8vh" min-h="83vh" class="flex" flex="row">
      <Aside w="10vw" />
      <div p="l-10vw">
        <slot />
      </div>
    </div>
    <AppFooter h="5vh" />
  </div>
</template>
