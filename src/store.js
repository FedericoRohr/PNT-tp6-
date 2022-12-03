import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        restart:false,
        colorCount : 6,
        colors : [],
        colorDisplay:"" ,
        messageDisplay2 :"",
        messageDisplay:"",
        headerStyle : "",
    },
    actions: {
        setColorCount({commit}, number) {
                commit('setColorCount', number)        
        },
        setColors({commit}) {
            commit('setColors')        
        },
        setColorDisplay({commit}) {
            commit('setColorDisplay')        
        },
        setHeaderStyle({commit},style) {
            commit('setHeaderStyle',style)        
        },
        setMessage({commit},msg) {
            commit('setMessage',msg)        
        },
        setMessage2({commit},msg) {
            commit('setMessage2',msg)        
        },
        setAllColors({commit},color) {
            commit('setAllColors',color)        
        },setColor({commit},i,color) {
            commit('setColor',i,color)        
        },

    },
    mutations: {
        setColorCount(state , number){
        state.colorCount = number
        },
        setColors(state) {
        let array = []
        for (let i = 0 ; i < state.colorCount ; i++){
            array.push(`rgb( ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)} )`)
        }
        state.colors = array   
        },
        setColorDisplay(state) {
            state.colorDisplay= state.colors[Math.floor(Math.random() * state.colorCount )]       
        },
        setHeaderStyle(state,style){
        state.headerStyle = style
        },
        setMessage(state,msg){
            state.messageDisplay = msg
        },
        setMessage2(state,msg){
            state.messageDisplay2 = msg
        },
        setAllColors(state,color){
            for(var i = 0 ; i< state.colorCount; i++){
               state.colors[i] = color
              }
        },
        setColor(state,i,color){
            state.colors[i] = color 
        }
    }
})