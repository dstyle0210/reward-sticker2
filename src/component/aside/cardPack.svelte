<script>
    import A_Sticker from "../atom/sticker.svelte";
    function lotsCard(){
        const _elCardPack = document.getElementById("cardPack");
        _elCardPack?.classList.toggle("-show");
    }
</script>
<div class="aside-cardPack" id="cardPack">
    <div class="aside-cardPack__header">
        <button on:click={lotsCard}>뽑기</button>
    </div>
    <div class="aside-cardPack__body">
        <A_Sticker></A_Sticker>
        <A_Sticker></A_Sticker>
        <A_Sticker></A_Sticker>
        <A_Sticker></A_Sticker>
        <A_Sticker></A_Sticker>
    </div>
</div>
<style lang="scss">
.aside-cardPack{position:fixed;left:0;right:0;bottom:calc((80% - 40px) * -1);z-index:1000;height:80%;background:#fff;border-radius:20px 20px 0 0;overflow:hidden;
    transition:bottom 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    &__header{text-align:center;height:40px;background:red;}
    &:global(.-show){bottom:0;}
}
</style>