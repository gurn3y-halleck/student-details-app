import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StudentState {
    studentId: string;
    mobileNum: string;
    studentName: string;
    grade: string;
    schoolName: string;
    examDate: string;
    examTime: string;
};

const initialState: StudentState = {
    studentId: "",
    mobileNum: "",
    studentName: "",
    grade: "",
    schoolName: "",
    examDate: "",
    examTime: "",
};



const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setStudentDetails: (state, action: PayloadAction<StudentState>) => {
        const {
            studentId,
            mobileNum,
            studentName,
            grade,
            schoolName,
            examDate,
            examTime,
        } = action.payload;

        state.studentId = studentId;
        state.mobileNum = mobileNum;
        state.studentName = studentName;
        state.grade = grade;
        state.schoolName = schoolName;
        state.examDate = examDate;
        state.examTime = examTime;
    },
    setSignOutState: (state) => {
      state.studentId = "";
      state.mobileNum = "";
      state.studentName = "";
      state.grade = "";
      state.schoolName = "";
      state.examDate = "";
      state.examTime = "";
    }
  },
});

export const { setStudentDetails, setSignOutState } = studentSlice.actions;

export const selectStudentId = (state: {student: StudentState }) => state.student.studentId;
export const selectMobileNum = (state: { student: StudentState }) => state.student.mobileNum;
export const selectStudentName = (state: { student: StudentState }) => state.student.studentName;
export const selectGrade = (state: { student: StudentState }) => state.student.grade;
export const selectSchoolName = (state: { student: StudentState }) => state.student.schoolName;
export const selectExamDate = (state: { student: StudentState }) => state.student.examDate;
export const selectExamTime = (state: { student: StudentState }) => state.student.examTime;

export default studentSlice.reducer;