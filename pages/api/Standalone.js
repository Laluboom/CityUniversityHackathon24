import { useRouter } from 'next/router';

const Standalone = () => {
    const router = useRouter();

    const goBack = () => {
        router.push('/');
    };

    return (
        <div>
            <h1>Standalone Page</h1>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
};

export default Standalone;
