<script lang="ts">
import {selectSticker , setSticker} from "../service/firebase";
import pokemonData from "../data/pokemonList.json";
import A_Sticker from "../component/atom/sticker.svelte";
import ASIDE_CardPack from "../component/aside/cardPack.svelte";

let result = [{}];
async function select(){
  result = await selectSticker();
};
function set(){
  setSticker({buid:50});
};
function lots(){
  let lots5 = [];
  for(let i=0;i<5;i++){
    const buid = ~~(Math.random() * pokemonData.length);
    lots5.push( pokemonData[buid] );
  };
  console.log(lots5);
  return lots5;
}
function findPokemon(buid:number){
  const pk = pokemonData.find((pokemon) => pokemon.buid == buid);
  console.log(pk);
}
</script>

{JSON.stringify(result)}

<h1>스벨트킷</h1>
<div class="test">
  <span>스판</span>
</div>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button on:click={set}>눌러봐요</button>
<button on:click={select}>가져와요</button>
<button on:click={()=>findPokemon(1225)}>미라이돈</button> 
<button on:click={()=>findPokemon(1224)}>코라이돈</button>
<button on:click={lots}>뽑기</button>

<ASIDE_CardPack></ASIDE_CardPack>

<A_Sticker></A_Sticker>