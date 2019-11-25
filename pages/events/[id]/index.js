import React from 'react';
import { useRouter } from 'next/router';;


const App = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div className='main'>
        <div>Post: {id}</div>
        </div>
    );
};

export default App;
