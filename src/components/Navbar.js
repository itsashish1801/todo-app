import Container from './Container';

const Navbar = () => {
  return (
    <header className='py-10'>
      <Container>
        <nav className='flex justify-between  z-50 items-center md:gap-x-12'>
          <div className='flex items-center gap-2.5'>
            <svg width={40} height={40}>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M0 20c0 11.046 8.954 20 20 20s20-8.954 20-20S31.046 0 20 0 0 8.954 0 20Zm20 16c-7.264 0-13.321-5.163-14.704-12.02C4.97 22.358 6.343 21 8 21h24c1.657 0 3.031 1.357 2.704 2.98C33.32 30.838 27.264 36 20 36Z'
                fill='#4ade80'
              ></path>
            </svg>

            <span className='font-display text-xl'>
              Todo<span className='font-bold text-emerald-500'>Pal</span>
            </span>
          </div>

          <div className='flex gap-6 md:gap-12 font-display'>
            <a
              href='#'
              className='inline-block rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
            >
              Todos
            </a>
            <a
              href='#'
              className='inline-block rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
            >
              Contact
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
