<template>
  <div>
    <div class="mb-2"></div>
    <div class="mb-2">
      <b-avatar src="https://placekitten.com/300/300" size="4rem"></b-avatar>
    </div>

    <label for="textarea-small">สวัสดี</label>
    <label for="textarea-small">{{
      profile.displayName ? profile.displayName : '[Display_name]'
    }}</label>
    <hr />
    <label for="textarea-small">ยินดีตอนรับเข้าสู่ระบบ</label>
    <label for="textarea-small"> </label>
    <label for="textarea-small"> </label>
    <label for="textarea-small">กรุณาให้ข้อมูล เพื่อรับสิทธิพิเศษต่างๆ</label>
    <b-form-group class="mb-0">
      <b-form-textarea
        placeholder="เบอร์โทรศัพท์"
        v-model="number"
      ></b-form-textarea>
    </b-form-group>

    <div>
      <b-form-datepicker
        id="example-datepicker"
        v-model="value"
        class="mb-2"
      ></b-form-datepicker>
    </div>

    <div>
      <b-form-checkbox
        id="checkbox-1"
        v-model="email"
        name="checkbox-1"
        value="accepted"
        unchecked-value="not_accepted"
        v-b-modal.modal-center
      >
        ยอมรับข้อตกลงและเงื่อนไข
      </b-form-checkbox>
    </div>

    <b-modal
      :pressed.sync="action"
      id="modal-center"
      centered
      title="ข้อตกลงแล้วเงื่อนไข"
    >
      <p class="my-4">
        Vertically centered modal! Vertically centered modal!Vertically centered
        modal!Vertically centered modal!
      </p>
    </b-modal>
    <router-link to="/feed"
      ><button :disabled="!email" @click="saveData">
        เข้าสู่ระบบ
      </button></router-link
    >
  </div>
</template>



<script>
import DataServices from '../services/DataService'

export default {
  name: 'app',
  components: {},
  data: () => ({
    terms: false,
    profile: {
      userId: '',
      displayName: '',
      pictureUrl: '',
      statusMessage: '',
      coupon: {
        c1: '',
        c2: '',
      },
    },
    value: '',
    modalShow: false,
    myToggle: false,
    action: true,
    email: '',
    number: '',
  }),
  methods: {
    main() {
      console.log('token')
      let token = this.$cookie.get('token')
      console.log({ token })
      if (token) {
        location.replace('https://test-1e7ff.web.app/feed')
      }
    },
    saveData() {
      var data = {
        userId: this.profile.userId ? this.profile.userId : 'Idtest',
        displayName: this.profile.displayName
          ? this.profile.displayName
          : 'displayNametest',
        displayImage: this.profile.displayImage
          ? this.profile.displayImage
          : 'displaydisplayImage',
        coupon: {
          c1: true,
          c2: false,
        },
      }
      DataServices.create(data)
        .then((response) => {
          this.$cookie.set('token', response.data.id)
          console.log('send response success')
          console.log(response.data)
        })
        .catch((e) => {
          console.log(e)
        })
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
    this.main()
    this.getProfile()
  },
}
</script>
