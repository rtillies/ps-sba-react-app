import {create} from 'zustand'
import axios from "axios";

const cardsStore = create((set) => ({
  deck: null,
  deckID: '06tjvcttxnld',
  // deckID: null,

  // getDeck: async() => {
  //   // const {deckID} = cardsStore.getState() || 'new'
  //   // const id = deckID || 'new'
  //   console.log(deckID);

  //   const res = await axios.get(`${deckID}/shuffle/?jokers_enabled=true`)
  //   set({
  //     // deckID: res.data.deckID
  //   })
  // },

  getCards: async() => {
    const {deckID} = cardsStore.getState() || 'new'
    const count = 20

    if (deckID === null) {
      // set({deckID: 'new'})
    }

    // const {deckID} = cardsStore.getState() || 'new'

    await axios.get(`${deckID}/shuffle/`)
    const res = await axios.get(`${deckID}/draw/?count=${count}`)

    console.log(deckID);
    console.log('data', res.data.cards);
    set({
      deck: res.data.cards
    })
  },

  shuffle: async() => {
    const {deckID} = cardsStore.getState() || 'new'
    await axios.get(`${deckID}/shuffle/`)
    set({
      deck: res.data.cards
    })
  }

}))

export default cardsStore;