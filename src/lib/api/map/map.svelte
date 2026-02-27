<script lang="ts">
    import { onMount } from "svelte";
    import { PUBLIC_MAP_API_KEY } from "$env/static/public";

    export let lat:Number;
    export let lng:Number;
    var container:HTMLDivElement;

    function loadKakaoSdk(appKey: string) {
        return new Promise<void>((resolve, reject) => {
            // @ts-ignore
            if (window.kakao?.maps) return resolve();

            const script = document.createElement('script');
            script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&autoload=false`;

            script.onload = () => resolve();
            script.onerror = () => reject(new Error('Kakao Maps SDK load failed'));

            document.head.appendChild(script);
        });
    }

    onMount(async () =>{
        await loadKakaoSdk(PUBLIC_MAP_API_KEY)

        const { kakao } = window as any;

        kakao.maps.load(() => {
            const center = new kakao.maps.LatLng(lat, lng);
            const map = new kakao.maps.Map(container, { center, level: 3 });
            new kakao.maps.Marker({ map, position: center });
        });
    })
    
</script>

<div id="map">
    <div bind:this={container} style="width: 90vw; height:90vh; box-shadow: 5px 5px 10px rgba(0,0,0,0.1);"></div>
</div>

<style>
    #map{
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
</style>