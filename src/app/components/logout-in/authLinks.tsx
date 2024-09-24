import Link from 'next/link';

interface AuthLinksProps {
  isLoggedIn: boolean;
}

const AuthLinks: React.FC<AuthLinksProps> = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn 
        ? <Link href={`/api/auth/signout`}>Logout</Link>
        : <Link href={`/api/auth/signin`}>Login</Link>}
    </div>
  );
};

export default AuthLinks;
