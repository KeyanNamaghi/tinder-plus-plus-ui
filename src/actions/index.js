import { createAction } from '@reduxjs/toolkit'

export const toggleDemo = createAction('TOGGLE_DEMO')

export const fetchSuccess = createAction('USER_FETCH_SUCCEEDED')

export const FETCH_IMAGE_REQUEST = createAction('FETCH_IMAGE_REQUEST')
export const FETCH_IMAGE_SUCCESS = createAction('FETCH_IMAGE_SUCCESS')
export const FETCH_IMAGE_FAILURE = createAction('FETCH_IMAGE_FAILURE')
