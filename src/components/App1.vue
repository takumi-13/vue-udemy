/* eslint-disable no-unused-vars */
<template>
  <div>
    <LikeHeader>
      <h3>はじめまして</h3>
    </LikeHeader>
    <LikeNumber :total-number="number" test-props="aaaaa" @my-click="incrementNumber"></LikeNumber>
    <button @click="currentComponent='Home'">Home</button>
    <button @click="currentComponent='About'">About</button>
    <keep-alive>
      <component :is="currentComponent"> </component>
    </keep-alive>
    <hr>
    <div>
      <EventTitle v-model="eventData.title"></EventTitle>
      <MaxNumber v-model="eventData.maxNumber"></MaxNumber>
      <Host v-model="eventData.host"></Host>

      <label for="detail">イベントの内容</label>
      <textarea id="detail" cols="30" rows="10" v-model="eventData.detail"></textarea>
      <p style="white-space: pre">{{eventData.detail}}</p>
    </div>

    <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate">
    <label for="isPrivate">非公開</label>
    <p>{{eventData.isPrivate}}</p>

    <p>参加条件</p>
    <input type="checkBox" id="10" value="10代" v-model="eventData.target">
    <label for="10">10代</label>
    <input type="checkBox" id="20" value="20代" v-model="eventData.target">
    <label for="20">20代</label>
    <input type="checkBox" id="30" value="30代" v-model="eventData.target">
    <label for="30">30代</label>

    <p>参加費</p>
    <input type="radio" id="free" value="無料" v-model="eventData.price">
    <label for="free">無料</label>
    <input type="radio" id="free" value="有料" v-model="eventData.price">
    <label for="free">有料</label>
    <p>開催場所</p>
    <select v-model="eventData.location">
      <option v-for="location in locations" :key="location">{{location}}</option>
    </select>
    <p> {{eventData.location}}</p>
  </div>
</template>
<script>
import LikeHeader from "./LikeHeader.vue";
import About from "./About.vue";
import Home from "./Home.vue";
import EventTitle from "./EventTitle.vue";
import MaxNumber from "./MaxNumber.vue";
import Host from "./Host.vue";


export default ({
  data (){
    return {
      number: 0,
      currentComponent: "Home",
      locations: ["Tokyo","Osaka","Sendai","Nagoya"],
      eventData:{
        title:"タイトル",
        maxNumber:0,
        host:"",
        detail:"",
        isPrivate:false,
        target:[],
        price:"無料",
        location:"Tokyo"
      }
    }
  },
  components:{
    LikeHeader,
    About,
    Home,
    EventTitle,
    Host,
    MaxNumber
  },
  methods:{
    incrementNumber(value){
      this.number = value
    }
  }

})
</script>

