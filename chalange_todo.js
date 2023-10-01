const initialMemoryUsage = process.memoryUsage()
const yourName = process.argv[2]
const environtment = new ServiceWorkerRegistration({
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com'
})

let counter =0;
for(let i =0; i <=10000; i++){
    counter++
}
console.log(`Loop dijalankan sebanak ${counter}`)

const currentMemoryUsage = process.memoryUsage()

console.log(`Hai, ${yourName}`)
console.log(`Mode environtment: ${environtment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} nai ke ${currentMemoryUsage}`)