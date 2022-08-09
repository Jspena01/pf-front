import { createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

// <----------------- acciones que interactuan con la DB ----------------->
export const getAll = createAsyncThunk('categorias/@GET/ALL', async () => {
  try {
    const { data } = await axios.get('http://localhost:8000/categorias')
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const getById = createAsyncThunk('categorias/@GETBYID', async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:8000/categorias/${id}`)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const create = createAsyncThunk('create/@CREATE', async (categoria) => {
  try {
    const { data } = await axios.post(
      'http://localhost:8000/categorias',
      categoria
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const update = createAsyncThunk(
  'update/@PUT/ID',
  async ({ id, categoria }) => {
    try {
      const { data } = await axios.put(
        `http://localhost:8000/categorias/${id}`,
        categoria
      )
      return data
    } catch (error) {
      const msg = error.response.data.msg
      return msg
    }
  }
)

export const deleteById = createAsyncThunk('delete/@DELETE/ID', async (id) => {
  try {
    const { data } = await axios.delete(
      `http://localhost:8000/categorias/${id}`
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})
