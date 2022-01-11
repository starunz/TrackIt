import axios from 'axios'

const baseApi = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

const login = (obj) => {
    const promise = axios.post(`${baseApi}/auth/login`, obj);
    return promise;
}

const registerUser = (obj) => {
    const promise = axios.post(`${baseApi}/auth/sign-up`, obj);
    return promise;
}

const getTodayHabits = (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const promise = axios.get(`${baseApi}/habits/today`, config);
    return promise;
}

const getHabits = (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const promise = axios.get(`${baseApi}/habits`, config);
    return promise;
}

const createUserHabit = (token, body) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const promise = axios.post(`${baseApi}/habits`, body, config);
    return promise;
}

const deleteHabit = (token, id) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

    const promise = axios.delete(`${baseApi}/habits/${id}`, config);
    return promise;
}

const changeHabitState = (token, id, state) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
    }
    axios.post(`${baseApi}/habits/${id}/${state}`, {}, config);
}

const getHistory = (token) =>{
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const promise = axios.get(`${baseApi}/habits/history/daily`, config);
    return promise;
}

export {
    login,
    registerUser,
    getTodayHabits,
    getHabits,
    createUserHabit,
    deleteHabit,
    changeHabitState,
    getHistory
}