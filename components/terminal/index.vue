<script setup lang="ts">
import Ls from './ls.vue'
import Help from './help.vue'
import About from './termabout.vue'

const props = defineProps({
  show: Boolean
})

interface HistoryType {
  id: number
  command: string
  time: string
}
const history = ref<HistoryType[]>([
  {
    id: 1,
    command: 'help',
    time: '2021-10-10 10:10:10'
  }
])
const type = ref('')
const time = ref('')
function getTime() {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  time.value = `${year}-${month}-${day} ${hour}:${minute}:${second}`
}
function enter(e: any) {
  console.log('e', e.target.value)
  const value = e.target.value
  if (value === 'ls' || value === 'list') {
    history.value.push({
      id: history.value.length + 1,
      command: 'ls',
      time: time.value
    })
  } else if (value === 'help') {
    history.value.push({
      id: history.value.length + 1,
      command: 'help',
      time: time.value
    })
  } else if (value === 'about') {
    history.value.push({
      id: history.value.length + 1,
      command: 'about',
      time: time.value
    })
  } else {
    history.value.push({
      id: history.value.length + 1,
      command: value,
      time: time.value
    })
  }
  document.getElementById('input')!.value = ''
}
onMounted(() => {
  type.value = getBrowserType()
  getTime()
})
watch(
  () => props.show,
  (val) => {
    if (val && process.client) {
      const input = document.getElementById('input')
      console.log('input', input)
      input?.focus()
    }
  }
)
</script>

<template>
  <div
    v-show="props.show"
    class="terminal transform-center box-shadow-term bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800"
    fixed
    top="50%"
    left="50%"
    h="50%"
    w="50%"
    z-2
    rounded-0.5rem
  >
    <div h-2rem bg="#2e2e2e" dark:bg-gray-100 p-l-0.5rem flex items-center>
      <!-- <img src="../assets/image/ico.png" h-2rem w-2rem alt="" srcset="" /> -->
      kifroom shell
    </div>
    <div p-1rem overflow-auto h="80%">
      kifroom shell v1.0.0
      <div v-for="item in history" :key="item.id">
        <div flex items-center justify-between rounded-10px>
          <div flex items-center>
            <div bg="#077ac3" p-1px p-r-0.5rem>>_ pwsh</div>
            <div p-1px p-l-0.5rem p-r-0.5rem bg="#ff9248">
              <i v-if="type === 'Chrome'" class="iconfont icon-chrome"></i>
              <i v-if="type === 'Edge'" class="iconfont icon-changyonglogo46"></i>
              <i v-if="type === 'Firefox'" class="iconfont icon-firefox"></i>
              <i v-if="type === 'Safari'" class="iconfont icon-Safariliulanqi"></i>
              {{ type }}
            </div>
            <div bg="#41b883" p-1px p-r-0.5rem>
              <i class="iconfont icon-nuxt"></i>
              Nuxt@3.4.1
            </div>
          </div>
          <div flex items-center p-1px bg="#40c4ff">
            <i class="iconfont icon-Field-time"></i>
            {{ item.time }}
          </div>
        </div>
        <div flex items-center>
          <div m-r-1rem>->></div>
          {{ item.command }}
        </div>
        <div v-if="item.command === 'ls'">
          <Ls />
        </div>
        <div v-else-if="item.command === 'help'"><Help /></div>
        <div v-else-if="item.command === 'about'"><About /></div>
        <div v-else>command not found</div>
      </div>
      <div>
        <div flex items-center justify-between rounded-10px>
          <div flex items-center>
            <div bg="#077ac3" p-1px p-r-0.5rem>>_ pwsh</div>
            <div p-1px p-l-0.5rem p-r-0.5rem bg="#ff9248">
              <i v-if="type === 'Chrome'" class="iconfont icon-chrome"></i>
              <i v-if="type === 'Edge'" class="iconfont icon-changyonglogo46"></i>
              <i v-if="type === 'Firefox'" class="iconfont icon-firefox"></i>
              <i v-if="type === 'Safari'" class="iconfont icon-Safariliulanqi"></i>
              {{ type }}
            </div>
            <div bg="#41b883" p-1px p-r-0.5rem>
              <i class="iconfont icon-nuxt"></i>
              Nuxt@3.4.1
            </div>
          </div>
          <div flex items-center p-1px bg="#40c4ff">
            <i class="iconfont icon-Field-time"></i>
            {{ time }}
            <!-- <i class="iconfont icon-Field-time"></i>{{ time }} -->
          </div>
        </div>
        <div flex items-center>
          <div m-r-1rem flex w-2rem items-center>->></div>
          <input
            id="input"
            w="100%"
            h-2rem
            class="bg-transparent text-gray-100 dark:text-gray-800 outline-none"
            border="none"
            type="text"
            @keyup.enter="enter"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
