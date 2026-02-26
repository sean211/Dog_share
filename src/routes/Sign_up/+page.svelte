
<style>
  #container {
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff8d7;
  }

  .sign_up {
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    width: 90%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 6px;
  }

  #button {
    width: 90%;
    padding: 10px;
    border: none;
    border-radius: 6px;
    background: black;
    color: white;
    cursor: pointer;
  }

  #button:hover {
    opacity: 0.8;
  }

  #link{
    display: flex;
    text-decoration: none; 
    color: white;
    width: 100%;
  }
</style>

<script>
  import { goto } from "$app/navigation";
  function Move_to_login(){
    goto('/Login')
  }
</script>

<div id="container">
    <div class="sign_up">
        <h3>Sign_up</h3>
        <form method="POST">
          <input type="text" placeholder="이메일" id="inp_id" name="email">
          <input type="password" placeholder="비밀번호" id="inp_pw" name="password">
          <input type="text" placeholder="거주지" id="inp_home" name="home">
          <button id="button" type="submit" on:click ={Move_to_login}>회원가입</button>
        </form>
        
    </div>
</div>

