import { createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

// <----------------- acciones que conectan a la base de datos ----------------->
export const getAll = createAsyncThunk('usuarios/@GETALL', async () => {
  try {
    const { data } = await axios.get('http://localhost:8000/usuarios')
    return data
  } catch (error) {
    const msg = error.message.data.msg
    return msg
  }
})

export const getAllByName = createAsyncThunk(
  'getAll/@GETALL',
  async ({ payload }) => {
    try {
      const { data } = await axios.get('http://localhost:8000/usuarios', {
        payload,
      })
      return data
    } catch (error) {
      const msg = error.message.data.msg
      return msg
    }
  }
)

export const getById = createAsyncThunk('usuarios/@GETBYID', async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:8000/usuarios/${id}`)
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const create = createAsyncThunk('usuarios/@CREATE', async (body) => {
  try {
    const { data } = await axios({
      method: 'post',
      url: 'http://localhost:8000/usuarios',
      headers: { authorization: `Bearer ${body.token}` },
      data: body.user,
    })
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const update = createAsyncThunk('usuarios/@UPDATE', async (body) => {
  try {
    const { data } = await axios.put(
      `http://localhost:8000/usuarios/${body.id}`,
      body.datos
    )
    return data
  } catch (error) {
    const msg = error.response.data.msg
    return msg
  }
})

export const deleteById = createAsyncThunk(
  'usuarios/@DELETEBYID',
  async (id) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:8000/usuarios/${id}`
      )
      return data
    } catch (error) {
      const msg = error.response.data.msg
      return msg
    }
  }
)
