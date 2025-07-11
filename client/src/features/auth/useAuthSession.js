import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginSucess } from "./authSlice";
import API from "../../utils/api";

const useAuthSession = ( ) => {
    const dispatch = useDispatch();

    useEffect (() => {
        const fetchSessionUser = async () => {
            try {
                const res = await API.get("/studio-pulse/me/");
                const {password, ...user} = res.data;
                dispatch(loginSucess(user))
            } catch (err) {
                //Not logged in - no need to do anything
            }
        }

        fetchSessionUser()
    }, [])
}

export default useAuthSession;