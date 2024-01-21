
async function fetchData() {
    let data = await fetch('https://dummyjson.com/users')
    data = await data.json()
    
    return data
}

const Data = async () => {
    let products = await fetchData()
    console.log(products)

    return (
        <div>
            <ul>
            {products.map((e) => (
                <li key={e.id}>{e.firstName}</li>
            ))}
            </ul>
        </div>
    )
}

export default Data