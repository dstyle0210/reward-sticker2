<script lang="ts">
import {selectSticker , setSticker} from "../service/firebase";

let result = [{}];
async function select(){
  result = await selectSticker();
};
function set(){
  setSticker({buid:50}); 
};
</script>

{JSON.stringify(result)}
<h1>스벨트킷</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button on:click={set}>눌러봐요</button>
<button on:click={select}>가져와요</button> 