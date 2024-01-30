// student-info.js

import Link from 'next/link';

const StudentInfo = () => {
  return (
    <div>
      <p>Your Name: Aaron Manocha</p>
      <p>
        GitHub Repository:{' '}
        <Link href="https://github.com/Aaron-1303">
            Your GitHub Repository
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;
