import { NextPageContext } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BsPerson } from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';

interface ErrorProps {
  statusCode: number;
}

const ErrorPage = ({ statusCode }: ErrorProps) => {
  const httpCatUrl = `https://http.cat/${statusCode}.jpg`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <div className="mt-6">
        <Image
          src={httpCatUrl}
          alt={`HTTP status code ${statusCode}`}
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
        <div className="flex space-x-4 mt-5 flex-row items-center justify-center">
            <Link href="/info" className="px-4 flex-row flex items-center justify-center gap-2 py-2 rounded-lg bg-[#fff2] hover:bg-[#fff3] transition-colors duration-100">
                <BsPerson /> Go to Info
            </Link>
            <Link href="/" className="px-4 flex-row flex items-center justify-center gap-2 py-2 rounded-lg bg-[#fff2] hover:bg-[#fff3] transition-colors duration-100">
                <FaHome /> Go Home
            </Link>
        </div>
      </div>
    </div>
  );
};

// Fetch the error status code
ErrorPage.getInitialProps = ({ res, err }: NextPageContext): ErrorProps => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 404;
  return { statusCode };
};

export default ErrorPage;
