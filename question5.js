import { useState } from "react";

function UserProfile({userId}){
    const [user,setUser]=useState(null);
    const fetchUser = useCallback(async() => {
        const res= await fetch(`api/users/${userId}`);
        serUser(await res.json());
    },[userId]);

    useEffect(() => {
        fetchUser();
    },[fetchUser]);

    return <div> {user?.name}</div>;
}