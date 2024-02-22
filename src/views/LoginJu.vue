<template>
  <div class="form">
    <ul class="tab-group">
      <li id="loginTab" class="tab active" @click="showTab('login')">Login</li>
      <li id="signupTab" class="tab" @click="showTab('signup')">Sign Up</li>
    </ul>

    <div class="tab-content">
      <div id="login" class="active">
        <h1>Bem vindo.</h1>
        <form id="login1">
          <div class="field-wrap">
            <input type="email" id="login-email" required autocomplete="off" placeholder="Digite seu e-mail*" />
          </div>
          <div class="field-wrap">
            <input type="password" id="login-password" required autocomplete="off" placeholder="Digite sua senha*" />
          </div>
          <button type="submit" class="button">Entrar</button>
        </form>
      </div>

      <div id="signup">
        <h1>Cadastre-se agora</h1>
        <form id="sign">
          <div class="top-row">
            <div class="field-wrap">
              <input type="text" id="first-name" required autocomplete="off" placeholder="Digite seu nome*" />
            </div>
          </div>
          <div class="field-wrap">
            <input type="email" id="email" required autocomplete="off"  placeholder="Digite seu e-mail*"/>
          </div>
          <div class="field-wrap">
            <input type="password" id="password" required autocomplete="off" placeholder="Digite sua senha*"/>
          </div>
          <button type="submit" class="button">Cadastrar</button>
        </form>
      </div>
    </div>
  </div>

  
  </template>
  
  <script>
export default {
  methods: {
    showTab(tabId) {
      
      document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
      document.querySelectorAll('.tab-content > div').forEach(content => content.classList.remove('active'));
      
      
      document.getElementById(tabId + 'Tab').classList.add('active');
      document.getElementById(tabId).classList.add('active');
    }
  }
}
  </script>
  


<style scoped>
.form {
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: rgba(19, 35, 47, 0.9);
}
.form input{
    font-size: 22px;
    padding: 5px 10px;
    background: none;
    background-image: none;
    border: 1px solid #a0b3b0;
    color: #ffffff;
    border-radius: 0;
    transition: border-color .25s ease, box-shadow .25s ease;
}
.form h1{
  color: #ffffff;
}
.form li{
  background-color: transparent;
  border: none;
}
.form li:hover{
  background-color: #7feceb;
}
.tab-group {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}
.tab {
  flex: 1; 
}
.tab.active {
  background: #34bbbb;
  color: #ffffff;
}
.tab-group li{
  display: block;
  padding: 15px;
  background: rgba(160, 179, 176, 0.25);
  color: #a0b3b0;
  font-size: 20px;
  cursor: pointer;
  transition: .5s ease;
}
.tab-content {
  padding: 20px;
}
.tab-content > div {
  display: none;
}
.tab-content > div.active {
  display: block;
}
.button {
  border: 0;
  padding: 15px 0;
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .1em;
  background:  #34bbbb;
  color: #ffffff;
  transition: all 0.5s ease;
  cursor: pointer;
}
.button:hover{
  background-color: #7feceb;
}
#login1{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
#sign{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>