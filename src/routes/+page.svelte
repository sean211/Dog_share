<style>
    #container{
        margin:0;
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .box{
        width:300px;
        background:#f5b459;
        padding:30px;
        text-align:center
    }
    input{
        width:100%;
        margin:5px 0;
        padding:8px
    }
    .circle{
        display:inline-block;
        width:25px;
        height:25px;
        border-radius:50%;
        background:#eee;
        margin-left:5px;
        cursor:pointer
    }
</style>

<div id="container">
    <div class="box">
        <img src="C:\Users\sean9\Documents\Project\Dog_share\my-app\src\lib\assets\pet_icon.png" alt="" width="100px">
        <h2 style="color: #5e3700">로그인</h2>
        <input placeholder="아이디">
        <input type="password" placeholder="비밀번호">
        <div style="margin-top:10px">
            회원가입
            <span class="circle"></span>
            <span class="circle"></span>
        </div>
    </div>
</div>