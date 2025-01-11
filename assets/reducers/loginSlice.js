import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    loginDetails: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
      city: '',
      state: '',
      zip: '',
      sFirstName: '',
      sLastName: '',
      cFullName: '',
      cDOB: '',
      reffered: '',
      subscription: ''
    }
  },
  reducers: {
    setLoginInfo: (state) => {
      state.loginDetails = {
        firstName: 'Mahesh',
        lastName: 'Babu',
        email: 'Mahesh.Babu@star.com',
        phone: '306 224 9408',
        country: 'USA',
        city: 'Dallas',
        state: 'TX',
        zip: '48701',
        sFirstName: 'Namrata',
        sLastName: 'Shirodkar',
        cFullName: 'Gautham Ghattamaneini',
        cDOB: '2004-12-06',
        subscription: 'Diamond',
        reffered:''
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setLoginInfo } = loginSlice.actions;

export default loginSlice.reducer