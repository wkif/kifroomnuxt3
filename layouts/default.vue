<template>
  <div>
    <AppHeader h="6vh" />
    <div p="t-8vh l-50px r-50px" h="91vh" class="flex" flex="row">
      <Aside w="20%" />
      <div p="l-20%">
        <slot />
      </div>
    </div>
    <AppFooter h="5vh" />
  </div>
</template>
