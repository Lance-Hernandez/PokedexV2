async function fetchData(){

    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
        document.getElementById("pokeName").innerHTML = data.name;
        document.getElementById("pokeID").innerHTML = `#${data.id}`;
        document.getElementById("pokeHeight").innerHTML = `Height: ${data.height}`;
        document.getElementById("pokeWeight").innerHTML = `Weight: ${data.weight}lbs`;
        document.getElementById("pokeAbility").innerHTML = `Ability: ${data.abilities[0].ability.name}`;
        document.getElementById("typeMain").innerHTML = data.types[0].type.name;
        document.getElementById("typeSecondary").innerHTML = data.types[1].type.name;
        document.getElementById("flavorText").innerHTML = data.flavor_text;

    }
    catch(error){
        console.error(error);
    }
}