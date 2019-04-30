<template>
  <div class="home">
    <a class="input btn-form" @click="clearConversation()">Clear All</a>
    <TitleInfo title="YodaBot"/>
    <div class="conversation-container"> 
      <div id="conversation"> 
        <ul v-if="messages.length > 0">
          <li v-for="m in messages">
            <span v-if="m.type == 'answer'">
              <label class="bold yoda">YodaBot: </label>{{ m.message }} 
            </span> 
            <span v-else><label class="bold">Me: </label>{{ m.message }} </span> 
          </li>
        </ul>
      </div>
      <div id="is-writing-msg" v-show="isWriting" class="writing-msg"> YodaBot is writing... </div>
      <form id="form-line" @submit.prevent="submit">
        <input v-model="question" class="input text-form" placeholder="type something, young padawan..." :disabled = "isWriting">
        <input class="input btn-form" type="submit" value="Send!" :disabled = "isWriting || question == '' ">
      </form> 
  </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TitleInfo from '@/components/TitleInfo.vue';
import ApiService from '@/services/api.service';
import SwapiService from '@/services/swapi.service';
import Message from '@/models/message';
import store from '@/store';

const keyAnswers = 'answers'

@Component({
  components: {
    TitleInfo,
  },
})

export default class Home extends Vue {

  public isWriting: boolean = false;
  public question: string = '';
  public messages: Message[] = [];
  
  private async submit() {
    this.isWriting = true;

    const message = new Message(this.question,'-','question');
    this.saveMessage(message);
    
    if (this.question.includes('force')) {
      this.getMovies();
    } else {
      this.sendMessage(this.question);
    }

    this.question = '';
  }

  private getMovies() {
    SwapiService.films.get()
    .then((response: any) => {
      const answer: string[] = [];
      for (let a of response['results']) {
        answer.push(a.title);
      }
      let text: string = 'The force is in this movies: ' + answer.join(', ');
      const message = new Message(text,'-', 'answer')
      this.saveMessage(message);

      this.isWriting = false;
    })
    .catch(error => {
        console.log(error)
      })
  }

  private getRandomCharacters() {
    SwapiService.people.get()
    .then((response: any) => {
      const answer: string[] = [];
      for (let a of response['results']) {
        answer.push(a.name);
      }
      let text: string = 'I have not found any results. But here there is a list of some Star Wars characters: ' 
      + answer.join(', ');

      const message = new Message(text,'-', 'answer')
      this.saveMessage(message);
      this.isWriting = false;
    })
    .catch(error => {
        console.log(error)
      })
  }

  private sendMessage(question: string) {
    ApiService.conversation.sendMessage(question)
      .then((response: any) => {
        let answer = (response[keyAnswers][0]);
        let message: Message = answer as Message;

        if (this.validateConsecutives(message)){
          this.getRandomCharacters();
        }
        else {
          this.saveMessage(message);
          this.isWriting = false;
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  private validateConsecutives(answerMessage: Message){
    if(this.messages.length >= 2) {
      let lastMessage: Message = this.messages[this.messages.length-2];
      if (answerMessage.flags[0] == "no-results" && lastMessage.flags[0] == "no-results") {
        return true;
      }
    }
    return false;
  }

  private getSessionInfo() {
    const sessionInfo = sessionStorage.getItem('messages');
    if (sessionInfo) {
      return JSON.parse(sessionInfo);
    } else {
      sessionStorage.setItem('messages', JSON.stringify([]));
      return [];
    }
  }

  private saveMessage(message: Message){
    this.messages.push(message);
    const session = this.getSessionInfo();
    session.push(message);
    sessionStorage.setItem('messages', JSON.stringify(session));
  }

  private clearConversation (){
    sessionStorage.clear();
    this.messages = [];
  }


  mounted() {
    this.messages = this.getSessionInfo();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .conversation-container {
    text-align: left;
    padding: 20px 50px;
  }

  .input {
    height: 40px;
    border: 1px solid lightgrey;
    border-radius: .25rem;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 14px;
  }

  .text-form {
    padding: 0px 10px;
    width: 60%;
    margin-right: 20px;
  }
  .text-form:disabled, .btn-form:disabled {
    cursor:not-allowed;
  }
  .btn-form {
    padding: 10px;
    width: 100px;
    font-weight: bold;
    color: #2c3e50;
    cursor: pointer;
  }

  .writing-msg {
    font-style: italic;
    color: #b0b0b0;
  }

  .bold {
    font-weight: bold;
  }

  .yoda {
    color:#62704c;
  }

</style>
