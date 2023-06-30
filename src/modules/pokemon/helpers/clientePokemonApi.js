const obtenerPokemons = async () => {
    //retornar el array de pokemons
   // console.log("Aleatorio: " + getNumeroAleatorio(1, 600))
    // console.log("Aleatorio: "+obtenerAleatorio())
    //console.log("vector: " + obtenerVectorNumerico())
    // await consumirApi(25);
    //obtenerNombresPokemon(obtenerVectorNumerico())
   const vectoNom = await obtenerNombresPokemon(obtenerVectorNumerico());
   // console.log(vectoNom);
    return vectoNom;
}

function getNumeroAleatorio(min, max) {
    max++
    return Math.floor(Math.random() * (max - min) + min)
}

const obtenerAleatorio = () => {
    return Math.ceil(Math.random() * 600);
}

const obtenerVectorNumerico = () => {
    const vector = [obtenerAleatorio(), obtenerAleatorio(), obtenerAleatorio(), obtenerAleatorio()]

    return vector;
}

const consumirApi = async (id) => {

    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(result => result.json())///josn va como metodo
    console.log(data.id)
    console.log(data.name)
    return data;
}

const obtenerNombresPokemon = async ([id1, id2, id3, id4] = []) => {
    const data1 = await consumirApi(id1)
    const data2 = await consumirApi(id2)
    const data3 = await consumirApi(id3)
    const data4 = await consumirApi(id4)
    console.log(data1.name);
    console.log(data2.name);
    console.log(data3.name);
    console.log(data4.name);

    const obj1 = {
        id: data1.id,
        nombre: data1.name
    }
    const obj2 = {
        id: data2.id,
        nombre: data2.name
    }
    const obj3 = {
        id: data3.id,
        nombre: data3.name
    }
    const obj4 = {
        id: data4.id,
        nombre: data4.name
    }
    const vN = [obj1, obj2, obj3, obj4]
    return vN;
}

const obtenerFachadaPokemons = async() => {
    return await obtenerPokemons();
}

//solo esto lo exporto(fachada) para poderlo consumir
export default obtenerFachadaPokemons