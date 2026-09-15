import { Helmet } from "react-helmet";
import { Link } from "react-router";


export default function Login() {

    return (
        <main className="bg-gray-50 px-4 md:px-8 dark:bg-neutral-900">
            <Helmet>
                <title>Log-in page</title>
            </Helmet>
            <div className="flex flex-col items-center justify-center py-8 md:py-16">
                <div className="max-w-md w-full">
                    <a href="#"><img src="https://readymadeui.com/logo-alt.svg" alt="logo"
                        className="w-14 min-h-14 mb-8 mx-auto block" />
                    </a>

                    <div
                        className="p-6 rounded-lg bg-white border border-slate-300 shadow-xs md:p-8 dark:bg-neutral-800 dark:border-neutral-700">
                        <h1 className="text-slate-900 text-center text-3xl font-bold dark:text-slate-50">Sign in</h1>

                        <form className="space-y-6 mt-10">
                            <div>
                                <label htmlFor="email"
                                    className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Email</label>
                                <input type="email" id="email" name="email" placeholder="john@readymadeui.com" required
                                    className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-700 dark:outline-neutral-600" />
                            </div>
                            <div>
                                <label htmlFor="password"
                                    className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Password</label>
                                <input type="password" id="password" name="password" placeholder="••••••••" required
                                    className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-700 dark:outline-neutral-600" />
                            </div>

                            <div className="flex items-start flex-wrap gap-2">
                                <label className="flex items-center group has-[input:checked]:text-slate-900">
                                    <input id="remember" name="remember" type="checkbox" required className="sr-only" />
                                    {/* Custom box */}
                                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded outline-1 outline-slate-300 dark:outline-neutral-600
                                 bg-white dark:bg-neutral-700
                                 group-has-[input:checked]:bg-blue-600
                                 group-has-[input:checked]:outline-blue-600
                                 group-focus-within:outline-2
                                 group-focus-within:outline-blue-600" aria-hidden="true">
                                        {/* Checkmark */}
                                        <svg className="size-3 text-white opacity-0 group-has-[input:checked]:opacity-100"
                                            viewBox="0 0 12 10" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M1 5l3 3 7-7" />
                                        </svg>
                                    </span>
                                    <span className="ml-3 text-sm text-slate-700 dark:text-slate-300">
                                        Remember me
                                    </span>
                                </label>

                                <a href="#"
                                    className="ml-auto text-sm font-medium text-blue-700 dark:text-blue-500 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                                    Forgot password?
                                </a>
                            </div>

                            <button type="submit"
                                className="w-full py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                                Sign in</button>

                            <div className="text-slate-900 text-sm text-center dark:text-slate-50">Don't have an account? <Link to="/register"
                                className="text-blue-700 hover:underline ml-1 font-medium dark:text-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">Sign
                                up</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}