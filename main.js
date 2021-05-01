const environment = {
    pokeBaseUrl: "https://pokeapi.co/api/v2/pokemon"
}

class UserService {

    constructor() { }

    async fetchPokemon(name) {
        return fetch(`${environment.pokeBaseUrl}/${name}`)
    }
}

const term = document.getElementById('term');
const display = document.getElementById('display');
const service = new UserService();

async function searchPokemon() {
    let object = await service.fetchPokemon(term.value);
    let pokemon = JSON.parse(object);
    
}