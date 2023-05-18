import httpInstance from "@/utils/http";

export function getCategory() {
  //返回是一个promise
  return httpInstance({
    url: 'home/category/head'
  })
}