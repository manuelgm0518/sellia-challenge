<template>
  <div class="modal" id="log-in-form">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
      <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
      <div class="modal-action">
        <a href="#" class="btn">Yay!</a>
      </div>
    </div>
  </div>

  <div class="flex flex-col h-screen w-screen">
    <div class="flex-none">
      <AppHeader />
    </div>
    <div class="flex-1 flex flex-col lg:flex-row min-h-0 flex-nowrap">
      <div class="flex-none">
        <UsersList />
      </div>
      <div class="flex grow min-h-0 flex-nowrap">
        <div class="flex-none hidden md:block">
          <ChatroomsList />
        </div>
        <div class="flex-1 bg-base-300">
          <NuxtPage />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url("https://unicons.iconscout.com/release/v4.0.0/css/line.css");

::-webkit-scrollbar {
  width: 0.3rem;
  height: 0.3rem;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: rgba(96, 96, 96, 0.5);
  border-radius: 1rem;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(128, 128, 128, 0.5);
}
</style>
