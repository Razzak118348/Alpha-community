
import logo from "../assets/image/logo.jpg";
const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal flex justify-around bg-neutral text-neutral-content p-10">
            <aside>

                <div className='text-sm lg:text-lg flex font-bold mb-2 text-center text-red-500'> <img className='h-10 w-10' src={logo} alt="" /> <span>Alpha Community
                    <br />
                    Providing reliable Music & Entertainment from 2025</span>
                </div>

            </aside>
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4">

                    <a
                        href="https://www.instagram.com/alpha_community.mu?igsh=MW45em5mZnRocTBpdg=="
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current"
                        >
                            <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.343 3.608 1.319.975.975 1.256 2.242 1.319 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.343 2.633-1.319 3.608-.975.975-2.242 1.256-3.608 1.319-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.343-3.608-1.319-.975-.975-1.256-2.242-1.319-3.608C2.175 15.646 2.163 15.266 2.163 12s.012-3.584.07-4.849c.062-1.366.343-2.633 1.319-3.608.975-.975 2.242-1.256 3.608-1.319C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.773.13 4.572.393 3.555 1.411 2.537 2.429 2.274 3.63 2.216 4.909.014 8.332 0 8.741 0 12s.014 3.668.072 4.948c.058 1.279.321 2.48 1.339 3.498 1.018 1.018 2.219 1.281 3.498 1.339C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.279-.058 2.48-.321 3.498-1.339 1.018-1.018 1.281-2.219 1.339-3.498.058-1.279.072-1.688.072-4.948s-.014-3.668-.072-4.948c-.058-1.279-.321-2.48-1.339-3.498-1.018-1.018-2.219-1.281-3.498-1.339C15.668.014 15.259 0 12 0z" />
                            <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z" />
                            <circle cx="18.406" cy="5.594" r="1.44" />
                        </svg>
                    </a>

                    <a href="https://m.facebook.com/profile.php?id=61573957567455&mibextid=wwXIfr&mibextid=wwXIfr"
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                    </a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;