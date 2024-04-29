import Navbar from "./Navbar"
import SwitchButtons from "./SwitchButtons"

const Header = () => {
    return (
        <div className="flex w-full flex-col items-center">
            <Navbar />
            <SwitchButtons />
        </div>
    )
}

export default Header
