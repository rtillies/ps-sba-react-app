import {create} from 'zustand'
import axios from "axios";

const cardsStore = create((set) => ({
  deck: null,
  deckID: '06tjvcttxnld',

  // getDeck: async() => {
  //   const deckID = getState() || 'new'
  //   // const id = deckID || 'new'
  //   console.log(deckID);

  //   const res = await axios.get(`${deckID}/shuffle/?jokers_enabled=true`)
  //   set({
  //     deckID: res.data.deckID
  //   })
  // },

  getCards: async() => {
    const deckID = cardsStore.getState() || 'new'
    // console.log(deckID);
    const res = await axios.get(`${deckID}/draw/?count=${3}`)
    // console.log(res.data.cards);
    set({
      // deck: res.data.cards
      deck: res.data
    })
  },

}))

export default cardsStore;