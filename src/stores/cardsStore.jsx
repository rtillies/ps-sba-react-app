import {create} from 'zustand'
import axios from "axios";

const cardsStore = create((set) => ({
  deckID: '06tjvcttxnld',
  deck: null,
  showDeck: null,

  suits: ['all', 'spades', 'diamonds', 'clubs', 'hearts', 'joker'],
  ranks: ['ace', 'king', 'queen', 'jack', '10', '9', '8', '7', '6', '5', '4', '3', '2'],

  getCards: async() => {
    const {deckID, deck} = cardsStore.getState() || 'new'
    const count = 54 // cards remaining

    if (deckID === null) {
      // set({deckID: 'new'})
    }

    await axios.get(`${deckID}/shuffle/`)
    const res = await axios.get(`${deckID}/draw/?count=${count}`)

    console.log(deckID);
    console.log('data', res.data.cards);
    set({
      deck: res.data.cards,
      showDeck: res.data.cards
    })
  },

  filter: (term) => {
    const {deck, showDeck} = cardsStore.getState()

    console.log('filter', term);
    console.log('deck filter', deck);

    if(term === 'all') {
      set({
        showDeck: deck
      })
      return
    }

    const filteredDeck = deck.filter((card) => {
      return (card.value.toLowerCase() === term || card.suit.toLowerCase() === term)
    })

    console.log('new deck', filteredDeck);

    set({
      showDeck: filteredDeck
    })
  },

}))

export default cardsStore;