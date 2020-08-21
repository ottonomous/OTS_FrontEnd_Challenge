// Vuex Core
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  messages: [
    {
      id: 1,
      from: 'Eliette Kett',
      subject: 'nulla ultrices aliquet maecenas leo odio condimentum',
      message:
        'vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod',
      timestamp: '5:20 AM',
      urgent: false
    },
    {
      id: 2,
      from: 'Noémie Turmell',
      subject: 'eros viverra eget congue eget semper rutrum nulla nunc purus',
      message:
        'proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut',
      timestamp: '5:03 AM',
      urgent: true
    },
    {
      id: 3,
      from: 'Lysa Gluyus',
      subject: 'egestas metus aenean fermentum donec ut mauris',
      message:
        'eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi',
      timestamp: '10:35 AM',
      urgent: false
    },
    {
      id: 4,
      from: 'Adèle Takis',
      subject: 'mattis egestas metus aenean fermentum',
      message:
        'faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec',
      timestamp: '12:01 AM',
      urgent: false
    },
    {
      id: 5,
      from: 'Song Ormshaw',
      subject:
        'parturient montes nascetur ridiculus mus etiam vel augue vestibulum',
      message:
        'curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique',
      timestamp: '6:10 AM',
      urgent: true
    },
    {
      id: 6,
      from: 'Cécile Mendoza',
      subject: 'vel augue vestibulum rutrum rutrum neque aenean',
      message:
        'lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere',
      timestamp: '12:38 AM',
      urgent: true
    },
    {
      id: 7,
      from: 'Maëlyss Lanfear',
      subject: 'sit amet lobortis sapien sapien non mi integer',
      message:
        'fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis',
      timestamp: '12:08 AM',
      urgent: false
    },
    {
      id: 8,
      from: 'Marlène Carrivick',
      subject: 'in libero ut',
      message:
        'nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et',
      timestamp: '10:43 PM',
      urgent: false
    },
    {
      id: 9,
      from: 'Rebecca Margerison',
      subject: 'leo maecenas pulvinar lobortis',
      message:
        'quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper',
      timestamp: '8:46 AM',
      urgent: false
    },
    {
      id: 10,
      from: 'Ruò Hillett',
      subject: 'convallis morbi odio odio elementum eu interdum',
      message:
        'nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat',
      timestamp: '8:23 AM',
      urgent: false
    }
  ],
  savedInput: null
}

const getters = {
  messages(state) {
    return state.messages
  },
  savedInput(state) {
    return state.savedInput
  }
}

const mutations = {
  saveInput(state, input) {
    state.savedInput = input
  }
}

const actions = {}

const store = new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
})

export default store
