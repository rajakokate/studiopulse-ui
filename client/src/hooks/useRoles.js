import { useState, useEffect } from "react";
import { fetchGroupOptions } from "../services/groupService";

export const useRoles = (t) => {
    const [roleOptions, setRoleOptions]= useState([]);

    useEffect (() =>  {
        const loadRoles = async () => {
            const options = await fetchGroupOptions(t);
            setRoleOptions(options);
        };
        loadRoles();

    }, [t]);

    return roleOptions;
}