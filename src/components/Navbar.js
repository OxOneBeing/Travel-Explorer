export default function Navbar() {
    return (
        <nav className="navbar bg-grey-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" className="inline-flex item-center justify-center p-2 rounded-md text-grey-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white aria-controls='mobile-menu' aria-expanded='false' ">
                            <span className="sr-only">Open main menu</span>
                        </button>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex-items-center">
                                <img className="" src="" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
