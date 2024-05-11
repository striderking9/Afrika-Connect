import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: [
        {
            id: 1,
            name: "Residential",
            value: "residential",
        },
        {
            id: 2,
            name: "Commercial",
            value: "commercial",
        },
        {
            id: 3,
            name: "Industrial",
            value: "industrial",
        },
        {
            id: 4,
            name: "Apartments",
            value: "apartments",
        },
    ],
    datePost: [
        { id: 1, name: "Tout", value: "all", isChecked: false },
        { id: 2, name: "Dernière Heure", value: "last-hour", isChecked: false },
        {
            id: 3,
            name: "Dernière 24 heure",
            value: "last-24-hour",
            isChecked: false,
        },
        {
            id: 4,
            name: "Dernier 7 jours",
            value: "last-7-days",
            isChecked: false,
        },
        {
            id: 5,
            name: "Dernier 14 jour",
            value: "last-14-days",
            isChecked: false,
        },
        {
            id: 6,
            name: "Dernier 30 jour",
            value: "last-30-days",
            isChecked: false,
        },
    ],
    experience: [
        { id: 1, name: "Entrée", value: "fresh", isChecked: false },
        { id: 2, name: "1 An", value: "1-year", isChecked: false },
        { id: 3, name: "2 Ans", value: "2-year", isChecked: false },
        { id: 4, name: "3 Ans", value: "3-year", isChecked: false },
        {
            id: 5,
            name: "4 Ans",
            value: "4-year",
            isChecked: false,
        },
    ],
    qualification: [
        {
            id: 1,
            name: "Certificat",
            value: "certificate",
        },
        {
            id: 2,
            name: "Diplôme d'associé",
            value: "associate-degree",
        },
        {
            id: 3,
            name: "Licence",
            value: "bachelor-degree",
        },
        {
            id: 4,
            name: "Master",
            value: "master’s-degree",
        },
        {
            id: 5,
            name: "Doctorat",
            value: "doctorate-degree",
        },
    ],
};

export const candidateSlice = createSlice({
    name: "candidate",
    initialState,
    reducers: {
        addDatePostCheck: (state, { payload }) => {
            state?.datePost?.map((item) => {
                item.isChecked = false;
                if (item.id === payload) {
                    item.isChecked = true;
                }
                return {
                    ...item,
                };
            });
        },
        clearDatePost: (state, { payload }) => {
            state?.datePost?.map((item) => {
                item.isChecked = false;
                return {
                    ...item,
                };
            });
        },
        addExperienceCheck: (state, { payload }) => {
            state?.experience?.map((item) => {
                if (item.id === payload) {
                    if (item.isChecked) {
                        item.isChecked = false;
                    } else {
                        item.isChecked = true;
                    }
                }
                return {
                    ...item,
                };
            });
        },
        clearExperience: (state, { payload }) => {
            state?.experience?.map((item) => {
                item.isChecked = false;
                return {
                    ...item,
                };
            });
        },
        addQualificationCheck: (state, { payload }) => {
            state?.qualification?.map((item) => {
                if (item.id === payload) {
                    if (item.isChecked) {
                        item.isChecked = false;
                    } else {
                        item.isChecked = true;
                    }
                }
                return {
                    ...item,
                };
            });
        },
        clearQualification: (state, { payload }) => {
            state?.qualification?.map((item) => {
                item.isChecked = false;
                return {
                    ...item,
                };
            });
        },
    },
});

export const {
    addDatePostCheck,
    addExperienceCheck,
    addQualificationCheck,
    clearDatePost,
    clearExperience,
    clearQualification,
} = candidateSlice.actions;
export default candidateSlice.reducer;
