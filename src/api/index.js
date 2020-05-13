
const files=require.context('./',false,/\.js$/)

const api=files.keys().filter(item=>!item.includes('index')).reduce((prev,item)=>{
   //  console.log(item); 除了index.
   prev={
       ...prev,
       ...files(item).default
   }
   return prev
},{})
export default api