
// async function fetchData() {
//     let data = await fetch('https://dummyjson.com/users')
//     data = await data.json()
    
//     return data
// }

// const Data = async () => {
//     let products = await fetchData()
//     console.log(products)

//     return (
//         <div>
//             <ul>
//                 {products? 
//                 products.map(e => (
//                     <li>{e.firstName}</li>
//                 )):
//                 <p>Not Available</p>}
//             </ul>
//         </div>
//     )
// }

// export default Data

async function fetchData() {
    let data = await fetch('https://dummyjson.com/users');
    data = await data.json();
    return data.users; // Access the 'users' property
  }
  
  const Data = async () => {
    let products = await fetchData();
    console.log(products); // Check the structure
  
    return (
      <div>
        <ul>
          {products ? (
            products.map((e) => (
              <li key={e.id}>{e.firstName}</li>
            ))
          ) : (
            <p>Not Available</p>
          )}
        </ul>
      </div>
    );
  };
  
  export default Data;
  