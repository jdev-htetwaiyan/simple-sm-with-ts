import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type ProfileStates = {
  id: number;
  name: string;
  about: string;
  thumbsUp: number;
  thumbsDown: number;
  bookmark: boolean;
};

const initialState: ProfileStates[] = [
  {
    id: 1,
    name: "Woody",
    about: `Some quick example text to build on the profile title and make up the bulk of the profile's content.`,
    thumbsUp: 0,
    thumbsDown: 0,
    bookmark: false,
  },
  {
    id: 2,
    name: "Buzz",
    about: `Some quick example text to build on the profile title and make up the bulk of the profile's content.`,
    thumbsUp: 0,
    thumbsDown: 0,
    bookmark: false,
  },
];

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    incrementThumbsUp: (
      state,
      action: PayloadAction<{ profileId: number }>
    ) => {
      const { profileId } = action.payload;
      const selectedProfile = state.find((profile) => profile.id === profileId);
      if (selectedProfile) {
        selectedProfile.thumbsUp += 1;
      }
    },
    incrementThumbsDown: (
      state,
      action: PayloadAction<{ profileId: number }>
    ) => {
      const { profileId } = action.payload;
      const selectedProfile = state.find((profile) => profile.id === profileId);
      if (selectedProfile) {
        selectedProfile.thumbsDown += 1;
      }
    },
    toogleBookmark: (state, action: PayloadAction<{ profileId: number }>) => {
      const { profileId } = action.payload;
      const selectedProfile = state.find((profile) => profile.id === profileId);
      if (selectedProfile) {
        selectedProfile.bookmark = !selectedProfile.bookmark;
      }
    },
  },
});

export default profileSlice.reducer;

export const { incrementThumbsUp, incrementThumbsDown, toogleBookmark } =
  profileSlice.actions;

export const selectProfile = (state: RootState) => state.profile;
