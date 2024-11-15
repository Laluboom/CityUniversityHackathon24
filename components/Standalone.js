import Link from 'next/link';

const Standalone = () => (
    <div>
        <h1>Standalone Page</h1>
        <Link href="/">
            <button>Go Back</button>
        </Link>
    </div>
);

export default Standalone;