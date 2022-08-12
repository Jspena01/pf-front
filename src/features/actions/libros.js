import { createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

// <----------------- acciones que conectan a la base de datos ----------------->
export const getAll = createAsyncThunk('libros/@GETALL', async (query) => {
  try {
    // console.log('query', query)
    const { data } = await axios.get(`http://localhost:8000/libros?${query}`)
    // console.log(data)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const getListCar = createAsyncThunk(
  'libros/@GETLISTCAR',
  async (query) => {
    try {
      console.log('query', query)
      const { data } = await axios.get(`http://localhost:8000/libros?${query}`)
      console.log(data)
      return data
    } catch (error) {
      const msg = error.response.data.msg
      return msg
    }
  }
)

export const getById = createAsyncThunk('libros/@GETBYID', async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:8000/libros/${id}`)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const create = createAsyncThunk('libros/@CREATE', async (libro) => {
  try {
    const { data } = await axios.post('http://localhost:8000/libros', libro)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const update = createAsyncThunk('libros/@UPDATE', async (libro) => {
  try {
    const { data } = await axios.put(
      `http://localhost:8000/libros/${libro.id}`,
      libro
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const deleteById = createAsyncThunk('libros/@DELETEBYID', async (id) => {
  try {
    const { data } = await axios.delete(`http://localhost:8000/libros/${id}`)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})
