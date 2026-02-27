// https://apis.map.kakao.com/web/sample/addr2coord/
//https://developers.kakao.com/docs/latest/ko/local/dev-guide#address-coord-sample
import { MAP_RESTAPI_KEY } from "$env/static/private"

async function Get_intadd(address:string) {
    const url = new URL("https://dapi.kakao.com/v2/local/search/address.JSON")
    url.searchParams.set('query', address) // url뒤의 query라는 parameter 생성하는거

    const res = await fetch(url, {
        headers: {
            "Authorization" : `KakaoAK ${MAP_RESTAPI_KEY}`
        }
    })
    const result = await res.json()
    console.log(result)
    //result.documents.x(lon) , .y(lat)
}
// Get_intadd("광덕서로19")