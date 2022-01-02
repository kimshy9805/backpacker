import React, {useState, useEffect, useMemo} from 'react';

export default function useAuth(initialValue) {
    const [auth, setAuth] = useState(initialValue);

    useEffect(() => {
        //Handle

        // Component will unamount
        return () => {};
    }, []);
}
