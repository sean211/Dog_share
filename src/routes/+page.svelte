<script lang="ts">
    import Map from '$lib/api/map/map.svelte';

    export let data;

    console.log(data)
</script>

<Map lat={data.location.address_lat} lng={data.location.address_lng}/>
<div id="navbar">
    <a id="Add_dog" class="button" href="/add_dog">
        <span>강아지 등록</span>
    </a>
    <a id="Add_address" class="button" href="/add_address">
        <span>거주지 등록</span>
    </a>
    <form method="POST" id="logout" class="button">
        <button type="submit" class=button>
            <span>로그아웃</span>
        </button>
    </form>
</div>

<style>
    #navbar{
        display: flex;
        flex-direction: row;
        justify-content:space-around;

        margin-top: 10px;
    }
    .button{
        transition: 0.1s;
        display: flex;
        align-items: center;
        justify-content: center;

        width: 150px;
        height: 50px;
        background-color: rgb(171, 112, 34);
        color: white;
        border-radius: 20px;
        border: 0px;
        box-shadow: 3px 3px 2px rgb(212, 212, 212);

        cursor: pointer;
        font-weight: bold;
        font-size: 17px;
        text-decoration: none;
    }
    .button:hover{
        opacity: 0.5;
    }
</style>

