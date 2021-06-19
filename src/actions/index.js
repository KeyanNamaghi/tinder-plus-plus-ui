import { createAction } from '@reduxjs/toolkit'

export const FETCH_IMAGE_REQUEST = createAction('FETCH_IMAGE_REQUEST')
export const FETCH_IMAGE_SUCCESS = createAction('FETCH_IMAGE_SUCCESS')
export const FETCH_IMAGE_FAILURE = createAction('FETCH_IMAGE_FAILURE')

export const FETCH_STOCK_IMAGES_REQUEST = createAction('FETCH_STOCK_IMAGES_REQUEST')
export const FETCH_STOCK_IMAGES_SUCCESS = createAction('FETCH_STOCK_IMAGES_SUCCESS')
export const FETCH_STOCK_IMAGES_FAILURE = createAction('FETCH_STOCK_IMAGES_FAILURE')
export const FETCH_STOCK_IMAGES_REMOVE = createAction('FETCH_STOCK_IMAGES_REMOVE')
