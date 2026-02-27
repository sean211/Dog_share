<style>
  #container {
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff8d7;
  }

  .login {
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

  .button {
    width: 90%;
    padding: 10px;
    margin-bottom: 10px;
    border: none;
    border-radius: 6px;
    background: black;
    color: white;
    cursor: pointer;
  }

  .button:hover {
    opacity: 0.8;
  }

  .link{
    display: flex;
    text-decoration: none; 
    color: white;
    width: 100%;
  }
</style>
<div id="container">
    <div class="login">
        <h3>Login</h3>
        <form method="POST">
          <input type="text" placeholder="아이디" name="id">
          <input type="password" placeholder="비밀번호" name="password">
          <button class="button" type="submit">로그인</button>
        </form>
        <div class="button"><a href="/Sign_up" class="link">회원가입</a></div>
    </div>
</div>