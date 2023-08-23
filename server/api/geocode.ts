import { key } from "@/data/config"

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  console.log('query',query)
  const url =`https://restapi.amap.com/v3/geocode/geo?address=${query.city}&output=JSON&key=${key}`
  const {status,geocodes} = await $fetch(url)
  if(status === '1'){
    const {location} = geocodes[0]
    return {
      code:200,
      data:location
    }
  }else{
    return {
      code:500,
      data:''
    }
  }
})
