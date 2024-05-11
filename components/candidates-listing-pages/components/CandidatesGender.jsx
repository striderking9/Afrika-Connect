
'use client'
import { useDispatch, useSelector } from "react-redux";
import { addCandidateGender } from "../../../features/filter/candidateFilterSlice";

const CandidatesGender = () => {
    const { candidateGender } =
        useSelector((state) => state.candidateFilter) || {};

    const dispath = useDispatch();

    // gender handler
    const genderHandler = (e) => {
        dispath(addCandidateGender(e.target.value));
    };

    return (
        <>
            <select
                className="form-select"
                value={candidateGender}
                onChange={genderHandler}
            >
                <option value="male">Homme</option>
                <option value="female">Femme</option>
            </select>
            <span className="icon flaticon-briefcase"></span>
        </>
    );
};

export default CandidatesGender;
