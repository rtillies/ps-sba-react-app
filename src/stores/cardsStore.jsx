import {create} from 'zustand'
import axios from "axios";

const cardsStore = create((set) => ({
  deckID: '06tjvcttxnld',
  deck: null,
  showDeck: null,

  suits: ['spades', 'diamonds', 'clubs', 'hearts', 'joker'],
  ranks: ['joker', 'ace', 'king', 'queen', 'jack', '10', '9', '8', '7', '6', '5', '4', '3', '2'],
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
      deck: res.data.cards,
      showDeck: res.data.cards
    })
  },

  shuffle: async() => {
    const {deckID} = cardsStore.getState() || 'new'
    await axios.get(`${deckID}/shuffle/`)
    set({
      deck: res.data.cards
    })
  },

  filter: (term) => {
    const {deck, showDeck} = cardsStore.getState()

    const filteredDeck = deck.cards.filter((card) => {
      card.value === term || card.suit === term
    })

    set({
      showDeck: filteredDeck
    })
  }

}))

export default cardsStore;