import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
    const routes = {home: '/', analise: '/Analise', 
    relatorio: '/Relatorio', diferenca: '/Diferenca', login: '/Login', signup: '/SignUp'}
  return (
    <header className='w-100 px-32 py-5'>
        <nav className='flex flex-row justify-between w-100 items-center'>
        <Link href={routes.home} className='w-[20%]'>
                <Image src='/logo.svg' alt='logo' width={144.56} height={35.73}/>
                </Link>
            <ul className='flex flex-row justify-between w-[40%]'>
                <li><Link href={routes.analise}>Análise</Link></li>
                <li><Link href={routes.relatorio}>Relatório</Link></li>
                <li><Link href={routes.diferenca}>Diferença</Link></li>
                </ul>
                <div className='flex justify-end gap-5 w-[30%]'>
                    <Link href={routes.signup}>Criar conta</Link>
                    <Link href={routes.login} className='bg-primary'>Login</Link>
                </div>
        </nav>
    </header>
  )
}

export default Header