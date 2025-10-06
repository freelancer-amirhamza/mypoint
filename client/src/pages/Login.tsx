import bg_login  from "../assets/ns_home_page.jpg"
import login_logo from "../assets/login-page.png"

const Login = () => {
  return (
    <div className=" bg-no-repeat bg-cover min-h-screen w-full flex h-full "
    style={{backgroundImage: `url(${bg_login})` }}
    >
        <div className="container">
            <div className="w-full max-w-md bg-white rounded mx-auto flex flex-col  items-center justify-center mt-12 ">
                <div className="flex flex-col items-center justify-center w-full">
                    <img src={login_logo} alt="" className='object-scale-down h-16 w-fit' />
                    <h1 className="text-white bg-primary font-medium text-xl w-full text-center p-3">প্রশাসনিক লগইন</h1>
                </div>
                <form action="" className="grid gap-5 w-full h-full px-10 py-8">
                    <div className="grid gap-2.5 w-full">
                        <label htmlFor="phone" className="text-primary text-xl font-semibold">Phone:</label>
                        <input type="text" name="phone" id="phone" placeholder='Enter your phone number'
                        className='outline-none border border-primary/40 p-2.5 rounded focus-within:border-primary text-xl text-neutral-600'
                        />
                    </div>
                    <div className="grid gap-2.5 w-full">
                        <label htmlFor="password" className="text-primary text-xl font-semibold">Password:</label>
                        <input type="password" name="password" id="password" placeholder='Enter your password number'
                        className='outline-none border border-primary/40 p-2.5 rounded focus-within:border-primary text-xl text-neutral-600'
                        />
                    </div>
                    <input type="submit" value="Login"
                    className='text-primary border-primary p-2 rounded border-2 text-xl font-semibold cursor-pointer
                     hover:bg-primary hover:text-white transition-colors duration-300'
                    />
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login