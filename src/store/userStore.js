import axios from 'axios';

const API = "https://62de065c79b9f8c30ab1e60a.mockapi.io/api/users";

let userStore = (set) => ({
  userState: {
    users: [],
    error: undefined,
    loading: false,
  },
  getUsers: async () => {
    set(
      (state) => {
        state.userState.loading = true;
      },
      false,
      `users/fetch_request`
    )

    try {
      const res = await axios.get(API)

      set(
        (state) => {
          state.userState.loading = false;
          state.userState.users = res.data;
        },
        false,
        `users/fetch_success`
      )
    } catch (err) {
      set(
        (state) => {
          state.userState.loading = false;
          state.userState.error = err.message;
        },
        false,
        `users/fetch_error`
      )
    }
  },
  createUsers: async (newUser) => {
    set(
      (state) => {
        state.userState.loading = true;
      },
      false,
      "users/create_request"
    )

    try {
      const res = await axios.post(API, newUser);
      set(
        (state) => {
          state.userState.loading = false;
          state.userState.users = [res.data, ...state.userState.users];
        },
        false,
        "users/create_success"
      )
    } catch (err) {
      set(
        (state) => {
          state.userState.loading = false;
          state.userState.error = err.message;
        },
        false,
        "users/create_error"
      )
    }
  },
  deleteUser: async (id) => {
    set(
      (state) => {
      state.userState.loading = true;
      },
      false,
      'users/delete_request'
    )

    try {
      await axios.delete(`${API}/${id}`);
      set(
        (state) => {
          state.userState.loading = false;
          state.userState.users = state.userState.users?.filter(item => item.id !== id)
        },
        false,
        "users/delete_success"
      )
    } catch (error) {
      set(
        (state) => {
          state.userState.loading = false;
          state.userState.error = error.message;
        },
        false,
        "users/delete_error"
      )
    }
  },
  updateUsers: async (newUser) => {
    set(
      (state) => {
        state.userState.loading = true;
      },
      false,
      "users/update_request"
    )

    try {
      await axios.put(`${API}/${newUser.id}`, newUser);
      
      set(
        (state) => {
          state.userState.loading = false;
          state.userState.users = state.userState.users.map((user) => 
            user.id === newUser.id ? newUser: user
          )
        },
        false,
        "users/update_success"
      )
    } catch (err) {
      set(
        (state) => {
          state.userState.loading = false;
          state.userState.error = err.message;
        },
        false,
        "users/update_error"
      )
    }
  }
});

export default userStore;
