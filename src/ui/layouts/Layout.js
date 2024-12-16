import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className='flex flex-col justify-between min-h-screen m-0 bg-slate-50'>
      <div className='flex flex-col grow'>
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}