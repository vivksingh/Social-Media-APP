

function Header(){
    return(
        <header className="p-3 text-bg-dark" style={{userSelect: 'auto'}}>
        <div className="container" style={{userSelect: 'auto'}}>
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start" style={{userSelect: 'auto'}}>
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none" style={{userSelect: 'auto'}}/>
              <svg className="bi me-2" width={40} height={32} role="img" aria-label="Bootstrap" style={{userSelect: 'auto'}}><use xlinkHref="#bootstrap" style={{userSelect: 'auto'}} /></svg>
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0" style={{userSelect: 'auto'}}>
              <li style={{userSelect: 'auto'}}><a href="#" className="nav-link px-2 text-secondary" style={{userSelect: 'auto'}}>Home</a></li>
              <li style={{userSelect: 'auto'}}><a href="#" className="nav-link px-2 text-white" style={{userSelect: 'auto'}}>Features</a></li>
              <li style={{userSelect: 'auto'}}><a href="#" className="nav-link px-2 text-white" style={{userSelect: 'auto'}}>FAQs</a></li>
              <li style={{userSelect: 'auto'}}><a href="#" className="nav-link px-2 text-white" style={{userSelect: 'auto'}}>About</a></li>
            </ul>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search" style={{userSelect: 'auto'}}>
              <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" style={{userSelect: 'auto'}} />
            </form>
            <div className="text-end" style={{userSelect: 'auto'}}>
              <button type="button" className="btn btn-outline-light me-2" style={{userSelect: 'auto'}}>Login</button>
              <button type="button" className="btn btn-warning" style={{userSelect: 'auto'}}>Sign-up</button>
            </div>
          </div>
        </div>
      </header>
    );
}

export default Header;