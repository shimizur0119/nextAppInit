import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <div>
        <div>
          header!!
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/">top</Link>
            </li>
            <li>
              <Link href="/about">about</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header