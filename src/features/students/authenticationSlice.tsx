import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthenState {
    keyId: string;
    mobileNum: string;
    otp: string;
    studentId: string;
};

const initialState: AuthenState = {
    keyId: "",
    mobileNum: "",
    otp: "",
    studentId: "",
};



const authenSlice = createSlice({
  name: "authen",
  initialState,
  reducers: {
    setAuthenDetails: (state, action: PayloadAction<AuthenState>) => {
        const {
            keyId,
            mobileNum,
            otp,
            studentId,
        } = action.payload;

        state.keyId = keyId;
        state.mobileNum = mobileNum;
        state.otp = otp;
        state.studentId = studentId;
    },
  },
});

export const { setAuthenDetails } = authenSlice.actions;

export const selectKeyId = (state: { authen: AuthenState }) => state.authen.keyId;
export const selectMobileNum = (state: { authen: AuthenState }) => state.authen.mobileNum;
export const selectOtp = (state: { authen: AuthenState }) => state.authen.otp;
export const selectStudentId = (state: {authen: AuthenState }) => state.authen.studentId;

export default authenSlice.reducer;