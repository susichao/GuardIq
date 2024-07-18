import { createClient } from '@/prismicio';
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';

export default async function Header(){

    const client = createClient();

    const settings = await client.getSingle("settings");
    return(
        <header>
            <Link href='/'></Link>
            {settings.data.site_title}
        
        <nav>
            <ul>
                {settings.data.navigation.map(({link, label})=>(
                     <li key={label}>
                     <PrismicNextLink field={link} className="p-3">
                       {label}
                     </PrismicNextLink>
                   </li>

                ))}
            </ul>
        </nav>
        </header>
    )
}