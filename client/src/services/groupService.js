import API from "../utils/api";

/** 
 * Fetch group  options from the backend and formats them for dropdowns
 * @param {function} t - i18next   translation function
 * @returns {Array} Array of {value, label} objects for SelectField
    
 }}
*/

export const fetchGroupOptions = async(t) => {
    try {
        const response = await API.get("/studio-pulse/api/groups/");

        const groups = response.data

        return groups.map((group) => ({
            value: group.name,
            label: t(`roles.${group.name.toLowerCase()}`) || group.name
        }));


    } catch (error) {
        console.error("Failed to fetch groups:", error)
        return [];
    }
}