const API_KEY = process.env.REACT_APP_API_KEY

const functions = {
  
  // sends a request to api and returns a list of results.
 getItems: async (search, pageSize, pageNumber) => {
  try{
   let requestData;
   await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?format=json&query=${search}&sort=n&pageSize=${pageSize}&pageNumber=${pageNumber}&api_key=${API_KEY}`)
   .then( data => data.json() )
   .then( data => requestData = data )
   return requestData;
  }catch(error){
   console.error(error);
   return [{description: "Issue with Request"}]
  }
 },

 // sends a request to api for a single item and return item details.
 getItem: async (fdcId) => {
  try{
    let requestData;
    await fetch(`https://api.nal.usda.gov/fdc/v1/food/${fdcId}?api_key=${API_KEY}`)
    .then(data => data.json())
    .then(data => {
      requestData = data
    })
    return requestData
  }catch(error){
   console.error(error);
   return {
     description: "Issue with Request"
   }
  }
 },

 calCals: (arr) => {
  if(arr.length > 0){
   let energies = []
   for(let i = 0; i < arr.length; i++){
    energies.push(arr[i].foodNutrients.find( ele => {
     return ele.nutrientName === 'Energy'
    }))
   }
   let energyValues = energies.map(ele => ele.value)
   return energyValues.reduce((prev, current) => prev + current )
  }else{
   return 0
  }
 },

 calCal: (item) => {
  let energy = item.foodNutrients.find(ele => ele.nutrientName === 'Energy')
  if(!!energy) return energy.value;
  return 0
 }
}

export default functions