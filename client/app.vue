<!-- <template>
  <div class="bg-white">
    <div class="container mx-auto flex flex-col h-screen">
      <AppHeader />
      <div class="flex flex-row flex-grow">
        <ChatroomsList />
        <CurrentChatroom />
      </div>
    </div>
  </div>
</template> -->

<template>
  <div class="flex flex-col h-screen w-screen">
    <div class="flex-none bg-secondary">
      <AppHeader />
    </div>
    <div class="bg-green-200 flex-1 flex flex-col lg:flex-row">
      <div class="bg-primary flex-none">usuarios</div>

      <div class="flex grow">
        <div class="flex-none bg-red-200 hidden md:block">
          <ChatroomsList />
        </div>
        <div class="flex-1">
          <CurrentChatroom />
        </div>
      </div>
    </div>
  </div>
</template>
