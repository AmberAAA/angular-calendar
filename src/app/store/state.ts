import { createSelector } from '@ngrx/store';

export interface State {
  userInfo: object;
  home: number;
  away: number;
}

export const initialState: State = {
  userInfo: {},
  home: 0,
  away: 0
};

export interface User {
  id: number;
  name: string;
}

export interface Book {
  id: number;
  name: string;
  userId: number;
}

export interface AppState {
  selectUser: User;
  allBooks: Book[];
}

export const selectUser = (state: AppState) => state.selectUser;
export const selectAllBooks = (state: AppState) => state.allBooks;

export const selectVisibleBooks  = createSelector(
  selectUser,
  selectAllBooks,
  (selectedUser: User, allBooks: Book[]) => {
    if (selectedUser && allBooks) {
      return allBooks.filter((book: Book) => book.id === selectedUser.id);
    } else {
      return allBooks;
    }
  }
)
