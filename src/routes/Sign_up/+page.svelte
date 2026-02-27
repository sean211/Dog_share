
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
</style>

<div id="container">
    <div class="sign_up">
        <h3>Sign_up</h3>
        <form method="POST">
          <input type="text" placeholder="이메일" name="email">
          <input type="password" placeholder="비밀번호" name="password">
          <button id="button" type="submit">회원가입</button>
        </form>
        
    </div>
</div>

