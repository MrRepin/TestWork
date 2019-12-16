export const state = () => ({
  person: [
    {
      title: 'Name',
      text: '-'
    },
    {
      title: 'Surname',
      text: '-'
    },
    {
      title: 'Phone',
      text: '-'
    },
  ]
})

export const mutations = {
  setPersonalData: (state, data) => state.person = data
}

export const getters = {
  getPersonData: state => state.person
}