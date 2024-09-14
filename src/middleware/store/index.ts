import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { showToastMessage } from "../../utils/helpers";

// Define the shape of a Contact object
export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
}

// Define the initial state shape for contacts
interface ContactState {
  items: Contact[];
}

// Initialize the state for the contact slice
const initialState: ContactState = {
  items: [],
};

// Create a slice for contacts with reducers and actions
const contactSlice: any = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    // Action to add a new contact
    addContact: (state, action: PayloadAction<Contact>) => {
      state.items.push(action.payload);
      showToastMessage("Contact created.", "success");
    },
    // Action to remove a contact by id
    removeContact: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
      showToastMessage("Contact deleted.", "error");
    },
    // Action to update an existing contact
    updateContact: (state, action: PayloadAction<Contact>) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
      showToastMessage("Contact details updated.", "success");
    },
  },
});

// Export actions for use in components
export const { addContact, removeContact, updateContact } =
  contactSlice.actions;

// Export the reducer function for use in the store
export default contactSlice.reducers;

// Combine reducers into a root reducer
const rootReducer = combineReducers({
  contacts: contactSlice.reducer,
});

// Configure and create the Redux store with an initial state
export const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    contacts: {
      items: [
        {
          id: 1,
          firstName: "Hrithik",
          lastName: "C",
          status: "Inactive",
        },
        {
          id: 2,
          firstName: "Nishchal",
          lastName: "Chandrashekar",
          status: "Inactive",
        },
        {
          id: 3,
          firstName: "John",
          lastName: "Doe",
          status: "Active",
        },
        {
          id: 4,
          firstName: "Donald",
          lastName: "Harris",
          status: "Inactive",
        },
        {
          id: 5,
          firstName: "Nick",
          lastName: "Cage",
          status: "Active",
        },
        {
          id: 6,
          firstName: "Kat",
          lastName: "Cin",
          status: "Inactive",
        },
        {
          id: 7,
          firstName: "Dec",
          lastName: "Stylin",
          status: "Inactive",
        },
        {
          id: 8,
          firstName: "Johnsion",
          lastName: "Des",
          status: "Active",
        },
        {
          id: 9,
          firstName: "Thives",
          lastName: "Harry",
          status: "Inactive",
        },
        {
          id: 10,
          firstName: "Augustion",
          lastName: "Cage",
          status: "Active",
        },
      ],
    },
  },
});
