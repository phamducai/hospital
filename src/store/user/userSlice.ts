import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { Person } from '@/interfaces/Person';
import { exampleData } from '@/data/user-list';
export interface UserStore {
  items: Person[];
  selectedRow?: Person;
  isShowTableFirstTime: boolean;
  dialog: {
    message: string;
    show: boolean;
  };
}

const initialState: UserStore = {
  items: [],
  selectedRow: undefined,
  isShowTableFirstTime: false,
  dialog: {
    message: '',
    show: false,
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSelectRow: (state, action) => {
      state.selectedRow = action.payload;
      localStorage.setItem('person', JSON.stringify(action.payload))
    },
    updateRow: (state, action) => {
      let updateIndex = -1;
      for (let index = 0; index < state.items.length; index++) {
        if (state.items[index].userId === action.payload?.userId) {
          updateIndex = index;
          break;
        }
      }
      if (updateIndex > -1 && action.payload) {
        state.items[updateIndex] = action.payload;
        state.dialog = {
          message: 'データを更新しました。',
          show: true,
        };
      }
    },
    searchUser: (state, action) => {
      const fiterData = exampleData.filter(function (el) {
        return (
          el.userId.includes(action.payload.userId) &&
          el.kanaName.includes(action.payload.kanaName)
        );
      });
      state.items = fiterData;
      state.isShowTableFirstTime = true;
    },
    hideDialog: (state) => {
      state.dialog = {
        message: '',
        show: false,
      };
    },
    setShowListSearch: (state) => {
      state.isShowTableFirstTime = false;
    },
    removeUser: (state, action) => {
      const dataAfterRemove = [];
      for (let index = 0; index < state.items.length; index++) {
        if (state.items[index].userId !== action.payload?.userId) {
          dataAfterRemove.push(state.items[index]);
        }
      }

      state.items = dataAfterRemove;
      state.isShowTableFirstTime = true;
      state.dialog = {
        message: '削除成功しました。',
        show: true,
      };
    },
    registerUser: (state, action) => {
      state.items = [action.payload, ...state.items];
      state.isShowTableFirstTime = true;
      state.dialog = {
        message: '正常に登録されました。',
        show: true,
      };
    },
  },
});

export const {
  setSelectRow,
  updateRow,
  searchUser,
  hideDialog,
  setShowListSearch,
  removeUser,
  registerUser,
} = userSlice.actions;
export const userSelector = (state: RootState) => state.userReducer;
export default userSlice.reducer;
