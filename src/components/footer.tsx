import type { FC } from "react"
import { Version } from "../utils/version"

export const Footer: FC = () => {
    return (
        <footer className="bg-dark py-4">
            <p className="text-center text-white lh-1 m-0" style={{ fontSize: "14px" }}>Project ReactVite19</p>
            <p className="text-center text-white lh-1 m-0" style={{ fontSize: "10px" }}>AdminDemoApp {Version.static}</p>
        </footer>
    )
}