import { createReducer } from '@reduxjs/toolkit'
import { FETCH_IMAGE_SUCCESS, FETCH_IMAGE_FAILURE } from '../actions'

/*
 {"Id":"6",
 "URL":"https://scontent-lhr8-2.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/186770752_299815694960521_1076742162468558205_n.jpg?tp=1\u0026_nc_ht=scontent-lhr8-2.cdninstagram.com\u0026_nc_cat=101\u0026_nc_ohc=oOsHnS3i3ugAX_xHqks\u0026edm=AP_V10EBAAAA\u0026ccb=7-4\u0026oh=4cce7819aeb8cadc92646d00974b3bd6\u0026oe=60CD815D\u0026_nc_sid=4f375e",
 "Category":"dog"}
*/

const initialState = { id: '', url: '', category: '', image: '', error: false }

const fetchImageResponse = createReducer(initialState, {
  [FETCH_IMAGE_SUCCESS.type]: (state, { payload }) => {
    state.id = payload.id
    state.url = payload.url
    state.category = payload.category
    state.image = 'data:image/png;base64,' + payload.image
    state.error = false
  },

  [FETCH_IMAGE_FAILURE.type]: (state) => {
    state.id = ''
    state.url = ''
    state.category = ''
    state.image = ''
    state.error = true
  }
})

export default fetchImageResponse
