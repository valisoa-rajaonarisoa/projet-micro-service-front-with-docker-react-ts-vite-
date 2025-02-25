import { JSX } from "react"
import Menu from "./components/menu/Menu"
import Section from "./components/sections/Section"
type Props = {}
const Membre = ({}: Props):JSX.Element=> {
  return (
    <div className="bg-gray-800 h-[100vh] flex">
        <div className="w-[10%] ">
            <Menu/>
        </div>

        <div className="w-[90%] 0">
            <Section/>
        </div>
    </div>
  )
}

export default Membre