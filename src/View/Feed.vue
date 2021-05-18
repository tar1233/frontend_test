<template>
  <div class="mb-2">
    <b-avatar src="https://placekitten.com/300/300" size="4rem"></b-avatar>
    <label for="textarea-small">สวัสดี</label>
    <label for="textarea-small">{{
      profile.displayName ? profile.displayName : '[Display_name]'
    }}</label
    >>
    <p>{{ counter ? 'คุณใช้คูปองไปแล้ว 20 คะแนน' : '0 คะแนน' }}</p>
    <hr />
    <b-card bg-variant="dark" text-variant="white" title="C1 disabled">
      <b-card-text>
        With supporting text below as a natural lead-in to additional content.
      </b-card-text>
      <b-button :disabled="c1" href="#" variant="primary">{{
        c1 ? 'คูปองใช้งานไปแล้ว' : 'C1 สามารถใช้ได้'
      }}</b-button>
    </b-card>
    <b-card bg-variant="dark" text-variant="white" title="C2">
      <b-card-text>
        With supporting text below as a natural lead-in to additional content.
      </b-card-text>
      <b-button
        :disabled="c2"
        v-on:click="counter = 20"
        href="#"
        variant="primary"
        >{{ c2 ? 'คูปองใช้งานไปแล้ว' : 'C2 สามารถใช้ได้' }}</b-button
      >
    </b-card>
  </div>
</template>


<script>
import DataServices from '../services/DataService'

export default {
  name: 'app',
  //  el: '#app',
  components: {},
  data: () => ({
    terms: false,
    profile: {
      userId: '',
      displayName: '',
      pictureUrl: '',
      statusMessage: '',
    },
    value: 0,
    modalShow: false,
    myToggle: false,
    action: true,
    email: '',
    id: '60a1898937b14d23dc217ea3',
    c1: true,
    c2: false,
    counter: 0,
  }),

  methods: {
    saveData() {
      const id = this.id
      DataServices.get(id)
    },
    async getProfile() {
      console.log('getprofile')
      let _this = this
      await liff.init({ liffId: '1655989724-6p7gwqMD' })
      const profile = await this.$liff
        .getProfile()
        .then(function (profile) {
          _this.profile = profile
          console.log({ profile })
        })
        .catch(function (error) {
          alert('Error getting profile: ' + error)
        })
    },
  },
  beforeMount() {
    this.getProfile()
  },
}
</script>

