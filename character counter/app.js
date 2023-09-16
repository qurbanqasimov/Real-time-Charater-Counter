const input = document.querySelector("textarea")
const total = document.querySelector(".total")
const remaining = document.querySelector(".rem")

input.addEventListener("keyup",() =>{

   const texts =  input.value.length
   total.textContent = `Total Charaters: ${texts}`
   const tols =  50 - texts
   remaining.textContent = `Remaining: ${tols}`

})