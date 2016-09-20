'use strict'
/**
 * @author: Ke Wu
 * @createdTime: 2016-09-09 15:14:07
 * @fileName: vue-dropdown.js
 * @description:
 **/

var options = [
  'option0',
  'option1',
  'option2',
  'option3'
]


Vue.component('vue-dropdown', {
  template: '#vue-dropdown-template',
  replace: true,
  props: ['options', 'selectedIndex'],
  data: function() {
    return {
      bShow: false
    }
  },
  methods: {
    chooseOption: function(index) {
      this.selectedIndex = index
      this.bShow = false
    },
    highlight: function(e) {
      var el = e.target
      el.style.color = 'black'
    },
    unhighlight: function(e) {
      var el = e.target
      el.style.color = 'gray'
    }
  }
})

var vm = new Vue({
  el: '#vue-dropdown',
  data: {
    options: options,
    selectedIndex: 1
  },
  methods: {
    hideList: function() {
      this.$children[0].bShow = false
    },
    showList: function() {
      this.$children[0].bShow = true
    }
  }
})
