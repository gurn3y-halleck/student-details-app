import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StudentState {
    studentId: string| null;
    mobileNum: string| null;
    studentName: string | null;
    grade: string | null;
    schoolName: string | null;
    examDate: string | null;
    examCommenceTime: string | null;
    examEndTime: string | null;
};

const initialState: StudentState = {
    studentId: null,
    mobileNum: null,
    studentName: null,
    grade: null,
    schoolName: null,
    examDate: null,
    examCommenceTime: null,
    examEndTime: null,
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
            examCommenceTime,
            examEndTime,
        } = action.payload;

        state.studentId = studentId;
        state.mobileNum = mobileNum;
        state.studentName = studentName;
        state.grade = grade;
        state.schoolName = schoolName;
        state.examDate = examDate;
        state.examCommenceTime = examCommenceTime;
        state.examEndTime = examEndTime;
    },
  },
});

export const { setStudentDetails } = studentSlice.actions;

export const selectStudentId = (state: {student: StudentState }) => state.student.studentId;
export const selectMobileNum = (state: { student: StudentState }) => state.student.mobileNum;
export const selectStudentName = (state: { student: StudentState }) => state.student.studentName;
export const selectGrade = (state: { student: StudentState }) => state.student.grade;
export const selectSchoolName = (state: { student: StudentState }) => state.student.schoolName;
export const selectExamDate = (state: { student: StudentState }) => state.student.examDate;
export const selectExamCommenceTime = (state: { student: StudentState }) => state.student.examCommenceTime;
export const selectExamEndTime = (state: { student: StudentState }) => state.student.examEndTime;

export default studentSlice.reducer;