import Link from 'next/link';
import { validateAccessToken } from 'app/utils/auth/validateAccessToken';

export const Header = async () =>{
    
  const customer = await validateAccessToken()

return(

<header>
<nav>
  <ul>
    <Link href="/">
    <li>
      Home
    </li>
    </Link>
    <Link href="/store">
    <li>Store</li>
    </Link>
    
  </ul>
  {customer?.firstname ? (<p>Hola!</p>) : (<Link href="/login">Login</Link>)}
</nav>
</header>
)
}